import React, { useEffect, useMemo, useRef } from "react";
import "./ProjectCard.css";
import { Trans } from "react-i18next";
import { flyTech, flyTechBack } from "./techFlight";

const magnetMove = (event) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width - 0.5) * 16}px`);
    el.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height - 0.5) * 12}px`);
};

const magnetReset = (event) => {
    const el = event.currentTarget;
    el.style.setProperty("--mx", "0px");
    el.style.setProperty("--my", "0px");
};

const sendBack = (event, item) => {
    const el = event.currentTarget;
    if (!flyTechBack({ techId: item.id, color: item.color, fromEl: el })) {
        el.classList.remove("bump");
        void el.offsetWidth;
        el.classList.add("bump");
    }
};

const ProjectCard = ({ titleKey, descriptionKey, deployUrl, codeUrl, imageUrl, alt, tech = [], flip = false, featured = false, stats = [] }) => {
    const stackRef = useRef(null);
    const badgeRefs = useRef([]);
    const delays = useMemo(
        () => tech.map((_, index) => index * 150 + Math.random() * 220),
        [tech.length]
    );

    useEffect(() => {
        const el = stackRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            (entries) => {
                if (!entries[0].isIntersecting) return;
                observer.disconnect();
                tech.forEach((item, index) => {
                    const target = badgeRefs.current[index];
                    flyTech({
                        techId: item.id,
                        color: item.color,
                        targetEl: target,
                        delay: delays[index],
                        onArrive: () => target && target.classList.add("arrived"),
                    });
                });
            },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            className={`project${flip ? " flip" : ""}${featured ? " featured" : ""}`}
            data-aos="fade-right"
        >
            {deployUrl ? (
                <a
                    className="imgContainer"
                    href={deployUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={imageUrl} alt={alt} />
                </a>
            ) : (
                <div className="imgContainer">
                    <img src={imageUrl} alt={alt} />
                </div>
            )}

            <div className="verticalLine"></div>

            <div className="projectDetails">
                {featured && (
                    <span className="featuredTag">
                        <Trans i18nKey="projects.featured.tag" />
                    </span>
                )}
                <h3><Trans i18nKey={titleKey} /></h3>
                <p><Trans i18nKey={descriptionKey} /></p>

                {stats.length > 0 && (
                    <div className="featuredStats">
                        {stats.map((stat) => (
                            <div className="featStat" key={stat.labelKey}>
                                <span className="featStatValue">
                                    <Trans i18nKey={stat.valueKey} />
                                </span>
                                <span className="featStatLabel">
                                    <Trans i18nKey={stat.labelKey} />
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                <div className="techStack" ref={stackRef}>
                    {tech.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <span
                                className="techBadge"
                                key={item.label}
                                ref={(node) => (badgeRefs.current[index] = node)}
                                style={{ "--brand": item.color }}
                                onMouseMove={magnetMove}
                                onMouseLeave={magnetReset}
                                onClick={(event) => sendBack(event, item)}
                            >
                                <span className="techBadgeInner">
                                    <Icon />
                                    {item.label}
                                </span>
                            </span>
                        );
                    })}
                </div>

                <div className="actions">
                    {deployUrl && (
                        <a className="fancy" href={deployUrl} target="_blank" rel="noreferrer">
                            <span className="top-key"></span>
                            <span className="text">
                                <Trans i18nKey="projects.button.site" />
                            </span>
                            <span className="bottom-key-1"></span>
                            <span className="bottom-key-2"></span>
                        </a>
                    )}
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
