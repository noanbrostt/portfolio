import React from "react";
import "./Home.css";
import { Type } from "./Type";
import bkgPic from "../../assets/home_bkg.jpg";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import DescriptionIcon from "@material-ui/icons/Description";

export const Home = () => {
    return (
        <>
            <img src={bkgPic} alt="Home Background" id="homeBkg" />

            <div className="about center">
                <h1 data-aos="fade-right" className="mobileHead">
                    Olá! Eu sou <span className="about__name">Noan Brostt</span>, Dev Full Stack e artista do Front End.
                </h1>
                <p data-aos="fade-right">
                    <Type />
                </p>
                <div className="about__contact center">
                    <a
                        href="https://github.com/Shreyasgkhakal100"
                        aria-label="github"
                        target="_blank"
                        rel="noreferrer"
                        className="link link--icon"
                    >
                        <GitHubIcon />
                    </a>
                    <a
                        href="mailto:shreyasgkhakal100@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="mail"
                        className="link link--icon"
                    >
                        <EmailIcon />
                    </a>
                    <a
                        href="tel:+918668613593"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="phone"
                        className="link link--icon"
                    >
                        <PhoneIcon />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shreyas-g-khakal/"
                        aria-label="linkedin"
                        className="link link--icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <LinkedInIcon />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shreyas-g-khakal/"
                        aria-label="curriculum"
                        className="link link--icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <DescriptionIcon />
                    </a>
                </div>

            </div>
        </>
    );
};
