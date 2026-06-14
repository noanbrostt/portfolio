import React from "react";
import "./Projects.css";
import ProjectCard from './ProjectCard';
import { Trans } from "react-i18next";
import admin from "../../assets/projects/Admin.png";
import pizra from "../../assets/projects/Pizra.png";
import plansul from "../../assets/projects/recrutamento-plansul.png";
import tinder from "../../assets/projects/tinder.png";

const projects = [
    {
        name: "Plansul Admin",
        titleKey: "projects.admin.title",
        descriptionKey: "projects.admin.description",
        deployUrl: "https://noanbrostt.github.io/Plansul-Admin/",
        codeUrl: "https://github.com/noanbrostt/Plansul-Admin/",
        image: admin,
    },
    {
        name: "Pizra",
        titleKey: "projects.pizra.title",
        descriptionKey: "projects.pizra.description",
        deployUrl: "https://noanbrostt.github.io/Pizra/",
        codeUrl: "https://github.com/noanbrostt/Pizra/",
        image: pizra,
    },
    {
        name: "Recrutamento Plansul",
        titleKey: "projects.plansul.title",
        descriptionKey: "projects.plansul.description",
        deployUrl: "https://noanbrostt.github.io/recruiting-landing-page/",
        codeUrl: "https://github.com/noanbrostt/recruiting-landing-page/",
        image: plansul,
    },
    {
        name: "Tinder",
        titleKey: "projects.tinder.title",
        descriptionKey: "projects.tinder.description",
        deployUrl: "https://noanbrostt.github.io/tinder/",
        codeUrl: "https://github.com/noanbrostt/tinder/",
        image: tinder,
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
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
