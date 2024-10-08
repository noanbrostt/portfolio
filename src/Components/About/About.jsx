import React, { useState } from "react";
import "./About.css";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/foto_perfil.png";
import { Trans } from "react-i18next";

export const About = () => {
    const [{ themename }] = React.useContext(ThemeContext);
    
    return (
        <>
            <div className="section" data-aos="fade-right">
                <h2 className="section__title">
                    <Trans
                        i18nKey="about.title"
                        components={{ 1: <span className="different" /> }}
                    />
                </h2>
                <div className={"introduction " + themename}>
                    <div className="introduction_logocontainer">
                        <img src={profilePic} alt="Profile picture" />
                    </div>
                    <div className="introduction_datacontainer">
                        <h4>
                            <Trans
                                i18nKey="about.text"
                                values={{
                                    name: "Noan Caliel Brostt",
                                    city: "Curitiba",
                                    company: "CAIXA Econômica Federal"
                                }}
                                components={{
                                    dif: <span className="different" />,
                                    wave: <span className="wave" />,
                                    br: <br />
                                }}
                            />
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );
};
