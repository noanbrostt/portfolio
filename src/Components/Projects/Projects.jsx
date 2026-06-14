import React from "react";
import "./Projects.css";
import ProjectCard from './ProjectCard';
import { Trans } from "react-i18next";
import { FaReact, FaPhp, FaNodeJs, FaHtml5, FaCss3Alt, FaHandPointer, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMicrosoftsqlserver } from "react-icons/si";
import { DiJavascript, DiPostgresql } from "react-icons/di";
import { MdDesignServices } from "react-icons/md";
import admin from "../../assets/projects/Admin.webp";
import pizra from "../../assets/projects/Pizra.webp";
import plansul from "../../assets/projects/recrutamento-plansul.webp";
import tinder from "../../assets/projects/tinder.webp";

const ACCENT = "var(--clr-primary)";

const TECH = {
    react: { icon: FaReact, label: "React", color: "#36b3e3" },
    tailwind: { icon: SiTailwindcss, label: "Tailwind", color: "#2bb6cf" },
    js: { icon: DiJavascript, label: "JavaScript", color: "#e6b800" },
    ts: { icon: SiTypescript, label: "TypeScript", color: "#3a8fd6" },
    php: { icon: FaPhp, label: "PHP / Laravel", color: "#7e84db" },
    sqlserver: { icon: SiMicrosoftsqlserver, label: "SQL Server", color: "#e03b38" },
    postgres: { icon: DiPostgresql, label: "PostgreSQL", color: "#4a97cf" },
    node: { icon: FaNodeJs, label: "NodeJS", color: "#4caf50" },
    html: { icon: FaHtml5, label: "HTML5", color: "#e8623f" },
    css: { icon: FaCss3Alt, label: "CSS3", color: "#3a8fd6" },
    hammer: { icon: FaHandPointer, label: "Hammer.js", color: "#d98a3a" },
    uxui: { icon: MdDesignServices, label: "UX / UI", color: ACCENT },
    git: { icon: FaGithub, label: "Git / GitHub", color: "#ef6b43" },
};

const projects = [
    {
        name: "Plansul Admin",
        titleKey: "projects.admin.title",
        descriptionKey: "projects.admin.description",
        deployUrl: "https://noanbrostt.github.io/Plansul-Admin/",
        codeUrl: "https://github.com/noanbrostt/Plansul-Admin/",
        image: admin,
        tech: ["react", "postgres", "tailwind", "uxui", "git"],
    },
    {
        name: "Pizra",
        titleKey: "projects.pizra.title",
        descriptionKey: "projects.pizra.description",
        deployUrl: "https://noanbrostt.github.io/Pizra/",
        codeUrl: "https://github.com/noanbrostt/Pizra/",
        image: pizra,
        tech: ["html", "css", "js", "uxui"],
    },
    {
        name: "Recrutamento Plansul",
        titleKey: "projects.plansul.title",
        descriptionKey: "projects.plansul.description",
        deployUrl: "https://noanbrostt.github.io/recruiting-landing-page/",
        codeUrl: "https://github.com/noanbrostt/recruiting-landing-page/",
        image: plansul,
        tech: ["html", "css", "js", "uxui"],
    },
    {
        name: "Tinder",
        titleKey: "projects.tinder.title",
        descriptionKey: "projects.tinder.description",
        deployUrl: "https://noanbrostt.github.io/tinder/",
        codeUrl: "https://github.com/noanbrostt/tinder/",
        image: tinder,
        tech: ["html", "css", "js", "hammer", "uxui"],
    },
];

export const Projects = () => {

    return (
        <>
            <div className="section" data-aos="fade-right">
                <h2 className="section__title different">
                    <Trans i18nKey="projects.title" />
                </h2>
                <div className="allProjects">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.name}
                            titleKey={project.titleKey}
                            descriptionKey={project.descriptionKey}
                            deployUrl={project.deployUrl}
                            codeUrl={project.codeUrl}
                            imageUrl={project.image}
                            alt={project.name}
                            tech={project.tech.map((id) => TECH[id])}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
