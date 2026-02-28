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

export const Skills = () => {
    return (
        <>
            <div className="section main" data-aos="fade-right">
                <h2 className="section__title different">
                    <Trans i18nKey="skills.title" />
                </h2>
                <div className="techsection">
                    {/* From Uiverse.io by Juanes200122, adapted by me */}
                    <div className="skillBox" data-aos="fade-right">
                        <h4>Front-End</h4>
                        
                        <div className="skill">
                            <MdDesignServices />
                            <div>
                                <span className="title">User Experience (UX)</span>

                                <div className="skillBar">
                                    <span className="skillPer ux" data-aos="width-animation">
                                        <span className="tooltip">95%</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="skill">
                            <DiJavascript />
                            <div>
                                <span className="title">HTML / CSS / JS</span>

                                <div className="skillBar">
                                    <span className="skillPer html" data-aos="width-animation">
                                        <span className="tooltip">90%</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="skill">
                            <FaReact />
                            <div>
                                <span className="title">React</span>

                                <div className="skillBar">
                                    <span className="skillPer react" data-aos="width-animation">
                                        <span className="tooltip">85%</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="skill">
                            <SiTailwindcss />
                            <div>
                                <span className="title">Tailwind</span>

                                <div className="skillBar">
                                    <span className="skillPer tailwind" data-aos="width-animation">
                                        <span className="tooltip">85%</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="skill">
                            <MdPhoneIphone />
                            <div>
                                <span className="title">React Native</span>

                                <div className="skillBar">
                                    <span className="skillPer reactnative" data-aos="width-animation">
                                        <span className="tooltip">70%</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="skill">
                            <SiTypescript />
                            <div>
                                <span className="title">TypeScript</span>

                                <div className="skillBar">
                                    <span className="skillPer typescript" data-aos="width-animation">
                                        <span className="tooltip">65%</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skillBox" data-aos="fade-right">
                        <h4>
                            <Trans i18nKey="skills.backend" />
                        </h4>

                        <div className="skill">
                            <SiMicrosoftsqlserver />
                            <div>
                                <span className="title">SQL Server</span>

                                <div className="skillBar">
                                    <span className="skillPer sql" data-aos="width-animation">
                                        <span className="tooltip">90%</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="skill">
                            <FaPhp />
                            <div>
                                <span className="title">PHP / Laravel</span>

                                <div className="skillBar">
                                    <span className="skillPer phplaravel" data-aos="width-animation">
                                        <span className="tooltip">85%</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="skill">
                            <DiPostgresql />
                            <div>
                                <span className="title">PostgreSQL</span>

                                <div className="skillBar">
                                    <span className="skillPer postgresql" data-aos="width-animation">
                                        <span className="tooltip">80%</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="skill">
                            <FaNodeJs />
                            <div>
                                <span className="title">NodeJS</span>

                                <div className="skillBar">
                                    <span className="skillPer nodejs" data-aos="width-animation">
                                        <span className="tooltip">25%</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="skill">
                            <SiGo />
                            <div>
                                <span className="title">Golang</span>

                                <div className="skillBar">
                                    <span className="skillPer golang" data-aos="width-animation">
                                        <span className="tooltip">20%</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skillBox" data-aos="fade-right">
                        <h4>
                            <Trans i18nKey="skills.others" />
                        </h4>
                        <div className="skill">
                            <FaGithub />
                            <div>
                                <span className="title">Git / GitHub</span>

                                <div className="skillBar">
                                    <span className="skillPer git" data-aos="width-animation">
                                        <span className="tooltip">75%</span>
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
                                    <span className="skillPer ingles" data-aos="width-animation">
                                        <span className="tooltip">B2</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="skill">
                            <FaRobot />
                            <div>
                                <span className="title">Agente de IA</span>

                                <div className="skillBar">
                                    <span className="skillPer agenteia" data-aos="width-animation">
                                        <span className="tooltip">60%</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="skill">
                            <FaDocker />
                            <div>
                                <span className="title">Docker</span>

                                <div className="skillBar">
                                    <span className="skillPer docker" data-aos="width-animation">
                                        <span className="tooltip">30%</span>
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
