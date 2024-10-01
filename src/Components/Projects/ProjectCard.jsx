import React from "react";
import "./ProjectCard.css";
import { Trans } from "react-i18next";

const ProjectCard = ({ title, description, deployUrl, codeUrl, imageUrl }) => {
    return (
        <div className="project">
            <div
                className="imgContainer"
                onClick={() => window.open(deployUrl, "_blank")}
            >
                <img src={imageUrl} alt={title} />
            </div>

            <div className="verticalLine"></div>

            <div className="projectDetails">
                <h3>{title}</h3>
                <p>{description}</p>

                <div className="actions">
                    <a className="fancy" href={deployUrl} target="_blank">
                        <span className="top-key"></span>
                        <span className="text">
                            <Trans i18nKey="projects.button.site" />
                        </span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </a>
                    <a className="fancy" href={codeUrl} target="_blank">
                        <span className="top-key"></span>
                        <span className="text">
                            <Trans i18nKey="projects.button.code" />
                        </span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
