import React from "react";
import "./Skills.css";
import {
    FaReact,
    FaVuejs,
    FaPhp,
    FaLaravel,
    FaGithub,
    FaFlagUsa,
} from "react-icons/fa";
import { DiJqueryLogo, DiJavascript, DiPostgresql } from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";
import { Trans } from "react-i18next";

export const Skills = () => {
    return (
        <>
            <div className="section main" data-aos="fade-right">
                <h2 className="section__title different">
                    <Trans i18nKey="skills.title" />
                </h2>
                <div className="techsection">
                    {/* From Uiverse.io by Juanes200122, adapted by me */}
                    <div className="skillBox">
                        <h4>Front-End</h4>
                        <div className="skill">
                            <DiJavascript />
                            <div>
                                <span className="title">HTML / CSS / JS</span>

                                <div className="skillBar">
                                    <span className="skillPer html">
                                        <span className="tooltip">90%</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="skill">
                            <DiJqueryLogo />
                            <div>
                                <span className="title">JQuery</span>

                                <div className="skillBar">
                                    <span className="skillPer jquery">
                                        <span className="tooltip">90%</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="skill">
                            <BsBootstrap />
                            <div>
                                <span className="title">Boostrap</span>

                                <div className="skillBar">
                                    <span className="skillPer boostrap">
                                        <span className="tooltip">75%</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="skill">
                            <FaReact />
                            <div>
                                <span className="title">React</span>

                                <div className="skillBar">
                                    <span className="skillPer react">
                                        <span className="tooltip">55%</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="skill">
                            <FaVuejs />
                            <div>
                                <span className="title">Vue</span>

                                <div className="skillBar">
                                    <span className="skillPer vue">
                                        <span className="tooltip">40%</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skillBox">
                        <h4>Back-End</h4>
                        <div className="skill">
                            <FaPhp />
                            <div>
                                <span className="title">PHP</span>

                                <div className="skillBar">
                                    <span className="skillPer php">
                                        <span className="tooltip">80%</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="skill">
                            <FaLaravel />
                            <div>
                                <span className="title">Laravel</span>

                                <div className="skillBar">
                                    <span className="skillPer laravel">
                                        <span className="tooltip">80%</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="skill">
                            <DiPostgresql />
                            <div>
                                <span className="title">
                                    SQL Server / PostgreSQL
                                </span>

                                <div className="skillBar">
                                    <span className="skillPer sql">
                                        <span className="tooltip">90%</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skillBox">
                        <h4>
                            <Trans i18nKey="skills.others" />
                        </h4>
                        <div className="skill">
                            <FaGithub />
                            <div>
                                <span className="title">Git / GitHub</span>

                                <div className="skillBar">
                                    <span className="skillPer git">
                                        <span className="tooltip">65%</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="skill">
                            <FaFlagUsa />
                            <div>
                                <span className="title">
                                    <Trans i18nKey="skills.english" />
                                </span>

                                <div className="skillBar">
                                    <span className="skillPer ingles">
                                        <span className="tooltip">B2</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
