import React from "react";
import "./ProjectCard.css";
import { Trans } from "react-i18next";

const ProjectCard = ({ titleKey, descriptionKey, deployUrl, codeUrl, imageUrl, alt, tech = [] }) => {
    return (
        <div className="project" data-aos="fade-right">
            <a
                className="imgContainer"
                href={deployUrl}
                target="_blank"
                rel="noreferrer"
            >
                <img src={imageUrl} alt={alt} />
            </a>

            <div className="verticalLine"></div>

            <div className="projectDetails">
                <h3><Trans i18nKey={titleKey} /></h3>
                <p><Trans i18nKey={descriptionKey} /></p>

                <div className="techStack">
                    {tech.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <span
                                className="techBadge"
                                key={item.label}
                                style={{ "--brand": item.color }}
                                data-aos="fade-down"
                                data-aos-delay={index * 80}
                            >
                                <Icon />
                                {item.label}
                            </span>
                        );
                    })}
                </div>

                <div className="actions">
                    <a className="fancy" href={deployUrl} target="_blank" rel="noreferrer">
                        <span className="top-key"></span>
                        <span className="text">
                            <Trans i18nKey="projects.button.site" />
                        </span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </a>
                    <a className="fancy" href={codeUrl} target="_blank" rel="noreferrer">
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
