import React from "react";
import "./Contact.css";
import { ThemeContext } from "../../Context/theme";
import { Trans } from "react-i18next";

import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export const Contact = () => {
    const [{ themename }] = React.useContext(ThemeContext);

    return (
        <>
            <div className="section" style={{ paddingBottom: "60px"}}>
                <h2 className="section__title" data-aos="fade-right">
                    <Trans
                        i18nKey="contact.title"
                        components={{
                            dif: <span className="different" />,
                        }}
                    />{" "}
                </h2>
                <div className="contactMain" data-aos="fade-right">
                    <div className="leftSection">
                        <a
                            href="https://github.com/noanbrostt"
                            aria-label="github"
                            target="_blank"
                            rel="noreferrer"
                            className="github"
                        >
                            <GitHubIcon />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/noan-caliel-brostt-74ab66187/"
                            aria-label="linkedin"
                            target="_blank"
                            rel="noreferrer"
                            className="linkedin"
                        >
                            <LinkedInIcon />
                        </a>
                    </div>
                    <div class="card">
                        <h2>Noan Brostt</h2>
                        <h6>
                            <Trans i18nKey="contact.position" />
                        </h6>
                        <div className="contactVerticalLine"></div>
                        <p>
                            <WhatsAppIcon /> (41) 99994-6316
                        </p>
                        <p>
                            <EmailIcon /> calielnoan@gmail.com
                        </p>
                    </div>
                    {/* <h1>Noan Brostt</h1>
                    <p>Full Stack & Front-End Developer</p>
                    <hr />
                    <div>
                        <div>
                            <span>Tel: </span>
                            <span>+55 (41) 99994-6316</span>
                            <div>
                                <span>Mail: </span>
                                <a
                                    href="mailto:calielnoan@gmail.com"
                                    target="_top"
                                >
                                    calielnoan@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://www.facebook.com/xpetrus.rex"
                        target="_blank"
                    >
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a
                        href="https://twitter.com/Gothburz"
                        target="_blank"
                    >
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a
                        href="https://plus.google.com/u/0/+PetrusRex/"
                        target="_blank"
                    >
                        <i class="fa fa-google-plus"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/xpetrus"
                        target="_blank"
                    >
                        <i class="fa fa-linkedin"></i>
                    </a>
                    <a
                        href="https://codepen.io/Gothburz/"
                        target="_blank"
                    >
                        <i class="fa fa-codepen"></i>
                    </a>
                    <a
                        href="https://github.com/Gothburz"
                        target="_blank"
                    >
                        <i class="fa fa-github"></i>
                    </a> */}
                </div>
            </div>
        </>
    );
};
