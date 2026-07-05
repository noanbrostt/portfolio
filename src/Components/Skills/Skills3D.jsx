import React, { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { Trans } from "react-i18next";

const CAM_Z = 7;
const FOV = 50;
const SPHERE_R = 2.6;
const _pos = new THREE.Vector3();

const spherePoints = (n) => {
    const points = [];
    const offset = 2 / n;
    const increment = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < n; i++) {
        const uy = i * offset - 1 + offset / 2;
        const r = Math.sqrt(Math.max(0, 1 - uy * uy));
        const phi = i * increment;
        points.push([Math.cos(phi) * r * SPHERE_R, uy * SPHERE_R, Math.sin(phi) * r * SPHERE_R]);
    }
    return points;
};

const IconNode = ({ skill, position, depth }) => {
    const groupRef = useRef();
    const elRef = useRef();
    const Icon = skill.icon;

    useFrame(() => {
        const group = groupRef.current;
        const el = elRef.current;
        if (!group || !el) return;
        group.getWorldPosition(_pos);
        const t = THREE.MathUtils.clamp((_pos.z + depth) / (2 * depth), 0, 1);
        el.style.opacity = (0.3 + 0.7 * t).toFixed(3);
        el.style.transform = `scale(${(0.72 + 0.42 * t).toFixed(3)})`;
    });

    return (
        <group ref={groupRef} position={position}>
            <Html center zIndexRange={[100, 0]}>
                <div ref={elRef} className="skill3dItem" style={{ "--brand": skill.color }} data-tech={skill.techId}>
                    <Icon className="skill3dIcon" />
                    <span className="skill3dName">
                        {skill.nameKey ? <Trans i18nKey={skill.nameKey} /> : skill.name}
                    </span>
                    <span className="skill3dLevel">
                        {skill.levelKey ? <Trans i18nKey={skill.levelKey} /> : skill.level}
                    </span>
                </div>
            </Html>
        </group>
    );
};

const Cloud = ({ skills, autoRotate }) => {
    const { size, gl } = useThree();
    const innerRef = useRef();
    const spin = useRef({ vx: 0, vy: 0.0015, active: false });

    const points = useMemo(() => spherePoints(skills.length), [skills.length]);

    const { scale, depth } = useMemo(() => {
        const aspect = size.width / Math.max(1, size.height);
        const halfH = Math.tan((FOV / 2) * (Math.PI / 180)) * CAM_Z;
        const sy = (halfH * 0.62) / SPHERE_R;
        const sx = THREE.MathUtils.clamp((halfH * aspect * 0.82) / SPHERE_R, sy, 2.2);
        const sz = sy;
        return { scale: [sx, sy, sz], depth: sz * SPHERE_R };
    }, [size.width, size.height]);

    useFrame(() => {
        const group = innerRef.current;
        if (!group) return;
        const state = spin.current;
        if (!state.active) {
            group.rotation.y += state.vy;
            group.rotation.x += state.vx;
            state.vx *= 0.92;
            state.vy += ((autoRotate ? 0.0015 : 0) - state.vy) * 0.04;
        }
    });

    useEffect(() => {
        const canvas = gl.domElement;
        let last = null;
        const speed = 0.006;

        const onDown = (event) => {
            last = { x: event.clientX, y: event.clientY };
            spin.current.active = true;
        };
        const onMove = (event) => {
            if (!last) return;
            const dx = event.clientX - last.x;
            const dy = event.clientY - last.y;
            last = { x: event.clientX, y: event.clientY };
            const group = innerRef.current;
            if (group) {
                group.rotation.y += dx * speed;
                group.rotation.x += dy * speed;
            }
            spin.current.vy = dx * speed;
            spin.current.vx = dy * speed;
        };
        const onUp = () => {
            last = null;
            spin.current.active = false;
        };

        canvas.addEventListener("pointerdown", onDown);
        window.addEventListener("pointermove", onMove);
        window.addEventListener("pointerup", onUp);
        return () => {
            canvas.removeEventListener("pointerdown", onDown);
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerup", onUp);
        };
    }, [gl]);

    return (
        <group scale={scale}>
            <group ref={innerRef}>
                {points.map((position, index) => (
                    <IconNode
                        key={skills[index].name || skills[index].nameKey}
                        skill={skills[index]}
                        position={position}
                        depth={depth}
                    />
                ))}
            </group>
        </group>
    );
};

export default function Skills3D({ skills, autoRotate = true }) {
    return (
        <div className="skills3dStage">
            <Canvas camera={{ position: [0, 0, CAM_Z], fov: FOV }} dpr={[1, 2]} gl={{ alpha: true }}>
                <Cloud skills={skills} autoRotate={autoRotate} />
            </Canvas>
        </div>
    );
}
