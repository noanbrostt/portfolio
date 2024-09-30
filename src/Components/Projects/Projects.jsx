import React from "react";
import "./Projects.css";
import { Trans } from "react-i18next";
import pizra from "../../assets/projects/Pizra.png";

export const Projects = () => {
    return (
        <>
            <div className="section">
                <h2 className="section__title different">
                    <Trans i18nKey="projects.title" />
                </h2>
                <div className="allProjects">
                    <div className="project">
                        <div className="imgContainer">
                            <img src={ pizra } alt="Pizra Pizzaria" />
                        </div>

                        <div className="verticalLine"></div>

                        <div className="projectDetails">
                            <h3>Pizra Pizzaria</h3>
                            <p>Site completo e responsivo para uma pizzaria ficcional.</p>
                            <div className="actions">
                                {/* From Uiverse.io by cssbuttons-io, adapted by me */}
                                <a className="fancy" href="https://noanbrostt.github.io/Pizra/" target="_blank">
                                    <span className="top-key"></span>
                                    <span className="text">Acessar Site</span>
                                    <span className="bottom-key-1"></span>
                                    <span className="bottom-key-2"></span>
                                </a>
                                <a className="fancy" href="https://github.com/noanbrostt/Pizra" target="_blank">
                                    <span className="top-key"></span>
                                    <span className="text">Ver Código</span>
                                    <span className="bottom-key-1"></span>
                                    <span className="bottom-key-2"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
