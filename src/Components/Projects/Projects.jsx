import React from "react";
import "./Projects.css";
import ProjectCard from './ProjectCard';
import { Trans } from "react-i18next";
import pizra from "../../assets/projects/Pizra.png";
import plansul from "../../assets/projects/recrutamento-plansul.png";
import tinder from "../../assets/projects/tinder.png";

export const Projects = () => {

    return (
        <>
            <div className="section" data-aos="fade-right">
                <h2 className="section__title different">
                    <Trans i18nKey="projects.title" />
                </h2>
                <div className="allProjects">

                    <ProjectCard
                        title={<Trans i18nKey="projects.pizra.title" />}
                        description={<Trans i18nKey="projects.pizra.description" />}
                        deployUrl="https://noanbrostt.github.io/Pizra/"
                        codeUrl="https://github.com/noanbrostt/Pizra/"
                        imageUrl={pizra}
                    />

                    <ProjectCard
                        title={<Trans i18nKey="projects.plansul.title" />}
                        description={<Trans i18nKey="projects.plansul.description" />}
                        deployUrl="https://noanbrostt.github.io/recruiting-landing-page/"
                        codeUrl="https://github.com/noanbrostt/recruiting-landing-page/"
                        imageUrl={plansul}
                    />

                    <ProjectCard
                        title={<Trans i18nKey="projects.tinder.title" />}
                        description={<Trans i18nKey="projects.tinder.description" />}
                        deployUrl="https://noanbrostt.github.io/tinder/"
                        codeUrl="https://github.com/noanbrostt/tinder/"
                        imageUrl={tinder}
                    />

                </div>
            </div>
        </>
    );
};
