import React, { useEffect, useState } from "react";
import "./GooeyCursor.css";

export const GooeyCursor = () => {
    const [isCursorVisible, setIsCursorVisible] = useState(false);

    useEffect(() => {
        const TAIL_LENGTH = 40;
        const cursor = document.getElementById("cursor");

        let mouseX = 0;
        let mouseY = 0;
        let cursorCircles;
        let cursorHistory = Array(TAIL_LENGTH).fill({ x: 0, y: 0 });

        let inactivityTimeout;

        const onMouseMove = (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
            setIsCursorVisible(true);

            clearTimeout(inactivityTimeout);
            inactivityTimeout = setTimeout(() => {
                setIsCursorVisible(false);
            }, 1200);
        };

        const onClick = () => {
            for (let i = 0; i < TAIL_LENGTH; i++) {
                cursorHistory[i].x += Math.random() * 100 - 50;
                cursorHistory[i].y += Math.random() * 100 - 50;
            }
        };

        const initCursor = () => {
            for (let i = 0; i < TAIL_LENGTH; i++) {
                let div = document.createElement("div");
                div.classList.add("cursor-circle");
                cursor.append(div);
            }
            cursorCircles = Array.from(
                document.querySelectorAll(".cursor-circle")
            );
        };

        const updateCursor = () => {
            cursorHistory.shift();
            cursorHistory.push({ x: mouseX, y: mouseY });

            for (let i = 0; i < TAIL_LENGTH; i++) {
                let current = cursorHistory[i];
                let next =
                    cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];

                let xDiff = next.x - current.x;
                let yDiff = next.y - current.y;

                current.x += xDiff * 0.35;
                current.y += yDiff * 0.35;
                cursorCircles[i].style.transform = `translate(${current.x}px, ${
                    current.y
                }px) scale(${i / TAIL_LENGTH})`;
            }

            requestAnimationFrame(updateCursor);
        };

        document.addEventListener("mousemove", onMouseMove, false);
        document.addEventListener("click", onClick, false);

        initCursor();
        updateCursor();

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("click", onClick);
        };
    }, []);

    return (
        <>
            <div id="cursor" className={!isCursorVisible ? "hidden" : ""}></div>
        </>
    );
};
