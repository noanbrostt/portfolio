import React, { Suspense, lazy, useEffect, useState } from "react";
import "./Skills.css";
import {
    FaReact,
    FaDocker,
    FaPhp,
    FaGithub,
    FaFlagUsa,
    FaNodeJs,
    FaRobot,
} from "react-icons/fa";
import { DiJavascript, DiPostgresql } from "react-icons/di";
import { SiTailwindcss, SiTypescript, SiMicrosoftsqlserver, SiGo } from "react-icons/si";
import { MdDesignServices, MdPhoneIphone, MdViewInAr, MdGridView } from "react-icons/md";
import { Trans } from "react-i18next";

const Skills3D = lazy(() => import("./Skills3D"));

const ACCENT = "var(--clr-primary)";

const skillGroups = [
    {
        title: "Front-End",
        skills: [
            { icon: MdDesignServices, name: "UX / UI", color: ACCENT, levelKey: "skills.level.advanced" },
            { icon: DiJavascript, name: "HTML / CSS / JS", color: "#e6b800", levelKey: "skills.level.advanced" },
            { icon: FaReact, name: "React", color: "#36b3e3", levelKey: "skills.level.advanced" },
            { icon: SiTailwindcss, name: "Tailwind", color: "#2bb6cf", levelKey: "skills.level.advanced" },
            { icon: MdPhoneIphone, name: "React Native", color: "#36b3e3", levelKey: "skills.level.intermediate" },
            { icon: SiTypescript, name: "TypeScript", color: "#3a8fd6", levelKey: "skills.level.intermediate" },
        ],
    },
    {
        titleKey: "skills.backend",
        skills: [
            { icon: SiMicrosoftsqlserver, name: "SQL Server", color: "#e03b38", levelKey: "skills.level.advanced" },
            { icon: FaPhp, name: "PHP / Laravel", color: "#7e84db", levelKey: "skills.level.advanced" },
            { icon: DiPostgresql, name: "PostgreSQL", color: "#4a97cf", levelKey: "skills.level.advanced" },
            { icon: FaNodeJs, name: "NodeJS", color: "#4caf50", levelKey: "skills.level.learning" },
            { icon: SiGo, name: "Golang", color: "#2bbbe0", levelKey: "skills.level.learning" },
        ],
    },
    {
        titleKey: "skills.others",
        skills: [
            { icon: FaGithub, name: "Git / GitHub", color: "#ef6b43", levelKey: "skills.level.intermediate" },
            { icon: FaFlagUsa, nameKey: "skills.english", color: ACCENT, level: "B2" },
            { icon: FaRobot, name: "Agente de IA", color: ACCENT, levelKey: "skills.level.intermediate" },
            { icon: FaDocker, name: "Docker", color: "#3a9eef", levelKey: "skills.level.learning" },
        ],
    },
];

const allSkills = skillGroups.flatMap((group) => group.skills);

const usePrefersReducedMotion = () => {
    const [reduced, setReduced] = useState(false);
    useEffect(() => {
        const query = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setReduced(query.matches);
        update();
        query.addEventListener("change", update);
        return () => query.removeEventListener("change", update);
    }, []);
    return reduced;
};

const SkillGrid = () => (
    <div className="techsection">
        {skillGroups.map((group) => (
            <div className="skillBox" key={group.title || group.titleKey}>
                <h4>{group.titleKey ? <Trans i18nKey={group.titleKey} /> : group.title}</h4>

                <div className="skillGrid">
                    {group.skills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                className="skillCard"
                                key={skill.name || skill.nameKey}
                                style={{ "--brand": skill.color }}
                            >
                                <Icon className="skillIcon" />
                                <span className="skillName">
                                    {skill.nameKey ? <Trans i18nKey={skill.nameKey} /> : skill.name}
                                </span>
                                <span className="skillLevel">
                                    {skill.levelKey ? <Trans i18nKey={skill.levelKey} /> : skill.level}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        ))}
    </div>
);

export const Skills = () => {
    const reducedMotion = usePrefersReducedMotion();
    const [view, setView] = useState("3d");

    return (
        <div className="section main" data-aos="fade-right">
            <div className="skillsHeader">
                <h2 className="section__title different">
                    <Trans i18nKey="skills.title" />
                </h2>

                <div className="skillsToggle" role="group" aria-label="">
                    <button
                        type="button"
                        className={`skillsToggleBtn${view === "3d" ? " active" : ""}`}
                        onClick={() => setView("3d")}
                        aria-pressed={view === "3d"}
                    >
                        <MdViewInAr />
                        <span>
                            <Trans i18nKey="skills.view.cloud" />
                        </span>
                    </button>
                    <button
                        type="button"
                        className={`skillsToggleBtn${view === "list" ? " active" : ""}`}
                        onClick={() => setView("list")}
                        aria-pressed={view === "list"}
                    >
                        <MdGridView />
                        <span>
                            <Trans i18nKey="skills.view.cards" />
                        </span>
                    </button>
                </div>
            </div>

            {view === "3d" ? (
                <div className="skillsView" key="3d">
                    <Suspense fallback={<div className="skills3dStage" />}>
                        <Skills3D skills={allSkills} autoRotate={!reducedMotion} />
                        <p className="skills3dHint">
                            <Trans i18nKey="skills.drag" />
                        </p>
                    </Suspense>
                </div>
            ) : (
                <div className="skillsView" key="list">
                    <SkillGrid />
                </div>
            )}
        </div>
    );
};
