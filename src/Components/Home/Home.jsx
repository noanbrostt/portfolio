import React from "react";
import "./Home.css";
import { Type } from "./Type";
import bkgPic from "../../assets/home_bkg.webp";
import { Trans } from "react-i18next";

import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdDescription } from "react-icons/md";


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
                <div className="about__type" data-aos="fade-right">
                    <Type />
                </div>
                <div className="about__contact center">
                    <a
                        href="https://github.com/noanbrostt"
                        aria-label="github"
                        target="_blank"
                        rel="noreferrer"
                        className="link link--icon"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="mailto:calielnoan@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="mail"
                        className="link link--icon"
                    >
                        <MdEmail />
                    </a>
                    <a
                        href="https://wa.me//5541999946316"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="phone"
                        className="link link--icon"
                    >
                        <FaWhatsapp />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/noan-caliel-brostt-74ab66187/"
                        aria-label="linkedin"
                        className="link link--icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1ePHlE76P4dVXpHfxugwWst-bvuYlg2mg/view?usp=drive_link"
                        aria-label="curriculum"
                        className="link link--icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <MdDescription />
                    </a>
                </div>

            </div>
        </>
    );
};
