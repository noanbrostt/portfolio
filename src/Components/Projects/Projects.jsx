import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import ProjectCard from './ProjectCard';
import { Trans } from "react-i18next";
import { FaReact, FaPhp, FaNodeJs, FaHtml5, FaCss3Alt, FaHandPointer, FaGithub, FaUniversity, FaRecycle } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMicrosoftsqlserver, SiThreedotjs } from "react-icons/si";
import { DiJavascript, DiPostgresql } from "react-icons/di";
import { MdDesignServices, MdLock } from "react-icons/md";
import admin from "../../assets/projects/Admin.webp";
import pizra from "../../assets/projects/Pizra.webp";
import plansul from "../../assets/projects/recrutamento-plansul.webp";
import tinder from "../../assets/projects/tinder.webp";
import portfolio from "../../assets/projects/portfolio.webp";

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
    three: { icon: SiThreedotjs, label: "Three.js", color: "#b9b9d2" },
};

const withTech = (ids) => ids.map((id) => ({ id, ...TECH[id] }));

const featuredProject = {
    name: "Plansul Admin",
    titleKey: "projects.admin.title",
    descriptionKey: "projects.admin.description",
    deployUrl: "https://noanbrostt.github.io/Plansul-Admin/",
    codeUrl: "https://github.com/noanbrostt/Plansul-Admin/",
    image: admin,
    tech: ["react", "postgres", "tailwind", "uxui", "git"],
    stats: [
        { valueKey: "projects.admin.stat1.value", labelKey: "projects.admin.stat1.label" },
        { valueKey: "projects.admin.stat2.value", labelKey: "projects.admin.stat2.label" },
        { valueKey: "projects.admin.stat3.value", labelKey: "projects.admin.stat3.label" },
    ],
};

const internalWork = [
    {
        name: "CAIXA Econômica Federal",
        icon: FaUniversity,
        descriptionKey: "projects.internal.caixa.description",
    },
    {
        name: "Ambiensys",
        icon: FaRecycle,
        descriptionKey: "projects.internal.ambiensys.description",
    },
];

const portfolioProject = {
    name: "Portfolio",
    titleKey: "projects.portfolio.title",
    descriptionKey: "projects.portfolio.description",
    codeUrl: "https://github.com/noanbrostt/portfolio/",
    image: portfolio,
    tech: ["react", "three", "uxui", "git"],
};

const earlyProjects = [
    {
        name: "Tinder",
        titleKey: "projects.tinder.title",
        descriptionKey: "projects.tinder.description",
        deployUrl: "https://noanbrostt.github.io/tinder/",
        codeUrl: "https://github.com/noanbrostt/tinder/",
        image: tinder,
        tech: ["html", "css", "js", "hammer", "uxui"],
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
];

const EarlyCard = ({ project, index }) => {
    const [expanded, setExpanded] = useState(false);
    const [clamped, setClamped] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        if (expanded) return;
        const el = textRef.current;
        if (!el) return;
        const check = () => setClamped(el.scrollHeight > el.clientHeight + 1);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, [expanded]);

    return (
        <div
            className="earlyCard"
            data-aos="fade-up"
            data-aos-delay={index * 100}
        >
            <img src={project.image} alt={project.name} />
            <div className="earlyBody">
                <h4><Trans i18nKey={project.titleKey} /></h4>
                <p ref={textRef} className={expanded ? "expanded" : ""}>
                    <Trans i18nKey={project.descriptionKey} />
                </p>
                {(clamped || expanded) && (
                    <button
                        type="button"
                        className="earlyReadMore"
                        onClick={() => setExpanded(!expanded)}
                    >
                        <Trans i18nKey={expanded ? "projects.readless" : "projects.readmore"} />
                    </button>
                )}
                <div className="earlyTechs">
                    {project.tech.map((id) => {
                        const Icon = TECH[id].icon;
                        return (
                            <Icon
                                key={id}
                                title={TECH[id].label}
                                style={{ color: TECH[id].color }}
                            />
                        );
                    })}
                </div>
                <div className="earlyLinks">
                    <a href={project.deployUrl} target="_blank" rel="noreferrer">
                        <Trans i18nKey="projects.button.site" />
                    </a>
                    <a href={project.codeUrl} target="_blank" rel="noreferrer">
                        <Trans i18nKey="projects.button.code" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export const Projects = () => {

    return (
        <>
            <div className="section" data-aos="fade-right">
                <h2 className="section__title different">
                    <Trans i18nKey="projects.title" />
                </h2>
                <div className="allProjects">
                    <ProjectCard
                        featured
                        flip
                        titleKey={featuredProject.titleKey}
                        descriptionKey={featuredProject.descriptionKey}
                        deployUrl={featuredProject.deployUrl}
                        codeUrl={featuredProject.codeUrl}
                        imageUrl={featuredProject.image}
                        alt={featuredProject.name}
                        tech={withTech(featuredProject.tech)}
                        stats={featuredProject.stats}
                    />

                    <div className="internalWork" data-aos="fade-right">
                        <div className="groupIntro">
                            <h3><Trans i18nKey="projects.internal.title" /></h3>
                            <p><Trans i18nKey="projects.internal.note" /></p>
                        </div>
                        <div className="internalCards">
                            {internalWork.map((work) => {
                                const Icon = work.icon;
                                return (
                                    <div className="internalCard" key={work.name}>
                                        <Icon className="internalIcon" />
                                        <h4>{work.name}</h4>
                                        <p><Trans i18nKey={work.descriptionKey} /></p>
                                        <span className="internalTag">
                                            <MdLock />
                                            <Trans i18nKey="projects.internal.tag" />
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <ProjectCard
                        titleKey={portfolioProject.titleKey}
                        descriptionKey={portfolioProject.descriptionKey}
                        codeUrl={portfolioProject.codeUrl}
                        imageUrl={portfolioProject.image}
                        alt={portfolioProject.name}
                        tech={withTech(portfolioProject.tech)}
                    />

                    <div className="groupIntro earlyIntro" data-aos="fade-right">
                        <h3><Trans i18nKey="projects.begin.title" /></h3>
                        <p><Trans i18nKey="projects.begin.note" /></p>
                    </div>

                    <div className="earlyGrid">
                        {earlyProjects.map((project, index) => (
                            <EarlyCard key={project.name} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
