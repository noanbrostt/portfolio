import React from "react";
import "./Contact.css";
import { ThemeContext } from "../../Context/theme";
import { Trans } from "react-i18next";

import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export const Contact = () => {

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
                    <div className="card">
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
                </div>
            </div>
        </>
    );
};
