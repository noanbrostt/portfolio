import React from "react";
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
import { MdDesignServices, MdPhoneIphone } from "react-icons/md";
import { Trans } from "react-i18next";

const skillGroups = [
    {
        title: "Front-End",
        skills: [
            { icon: MdDesignServices, name: "User Experience (UX)", bar: "ux", level: "95%" },
            { icon: DiJavascript, name: "HTML / CSS / JS", bar: "html", level: "90%" },
            { icon: FaReact, name: "React", bar: "react", level: "85%" },
            { icon: SiTailwindcss, name: "Tailwind", bar: "tailwind", level: "85%" },
            { icon: MdPhoneIphone, name: "React Native", bar: "reactnative", level: "70%" },
            { icon: SiTypescript, name: "TypeScript", bar: "typescript", level: "65%" },
        ],
    },
    {
        titleKey: "skills.backend",
        skills: [
            { icon: SiMicrosoftsqlserver, name: "SQL Server", bar: "sql", level: "90%" },
            { icon: FaPhp, name: "PHP / Laravel", bar: "phplaravel", level: "85%" },
            { icon: DiPostgresql, name: "PostgreSQL", bar: "postgresql", level: "80%" },
            { icon: FaNodeJs, name: "NodeJS", bar: "nodejs", level: "25%" },
            { icon: SiGo, name: "Golang", bar: "golang", level: "20%" },
        ],
    },
    {
        titleKey: "skills.others",
        skills: [
            { icon: FaGithub, name: "Git / GitHub", bar: "git", level: "75%" },
            { icon: FaFlagUsa, nameKey: "skills.english", bar: "ingles", level: "B2" },
            { icon: FaRobot, name: "Agente de IA", bar: "agenteia", level: "60%" },
            { icon: FaDocker, name: "Docker", bar: "docker", level: "30%" },
        ],
    },
];

export const Skills = () => {
    return (
        <>
            <div className="section main" data-aos="fade-right">
                <h2 className="section__title different">
                    <Trans i18nKey="skills.title" />
                </h2>
                <div className="techsection">
                    {/* From Uiverse.io by Juanes200122, adapted by me */}
                    {skillGroups.map((group) => (
                        <div className="skillBox" data-aos="fade-right" key={group.title || group.titleKey}>
                            <h4>
                                {group.titleKey ? <Trans i18nKey={group.titleKey} /> : group.title}
                            </h4>

                            {group.skills.map((skill) => {
                                const Icon = skill.icon;
                                return (
                                    <div className="skill" key={skill.bar}>
                                        <Icon />
                                        <div>
                                            <span className="title">
                                                {skill.nameKey ? <Trans i18nKey={skill.nameKey} /> : skill.name}
                                            </span>

                                            <div className="skillBar">
                                                <span className={`skillPer ${skill.bar}`} data-aos="width-animation">
                                                    <span className="tooltip">{skill.level}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
