import React, { useState } from "react";
import "./Home.css";
import { Type } from "./Type";
import bkgPic from "../../assets/home_bkg.jpg";
import { Trans } from "react-i18next";

import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";


export const Home = () => {

    return (
        <>
            <img src={bkgPic} alt="Home Background" id="homeBkg" />

            <div className="about center">
                <h1 data-aos="fade-right" className="mobileHead">
                    <Trans
                        i18nKey="home.greeting"
                        values={{
                            name: "Noan Brostt"
                        }}
                        components={{ 1: <span className="about__name" /> }}
                    />
                </h1>
                <p data-aos="fade-right">
                    <Type />
                </p>
                <div className="about__contact center">
                    <a
                        href="https://github.com/noanbrostt"
                        aria-label="github"
                        target="_blank"
                        rel="noreferrer"
                        className="link link--icon"
                    >
                        <GitHubIcon />
                    </a>
                    <a
                        href="mailto:calielnoan@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="mail"
                        className="link link--icon"
                    >
                        <EmailIcon />
                    </a>
                    <a
                        href="https://wa.me//5541999946316"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="phone"
                        className="link link--icon"
                    >
                        <WhatsAppIcon />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/noan-caliel-brostt-74ab66187/"
                        aria-label="linkedin"
                        className="link link--icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <LinkedInIcon />
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1ePHlE76P4dVXpHfxugwWst-bvuYlg2mg/view?usp=drive_link"
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
