import React, { useState } from "react";
import "./App.css";
import { ThemeContext } from "./Context/theme";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import { GooeyCursor } from './Components/GooeyCursor/GooeyCursor';
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import { About } from "./Components/About/About";
import { Skills } from "./Components/Skills/Skills";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";

export default function App() {
    const [{ themename }] = React.useContext(ThemeContext);
    const { i18n } = useTranslation();

    React.useEffect(() => {
        Aos.init({ duration: 1400 });

        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        if (langParam && (langParam === 'en' || langParam === 'pt')) {
            i18n.changeLanguage(langParam);
        }
    }, [i18n]);

    return (
        <div id="top" className={`${themename} app`}>
            <GooeyCursor />
            <Header />
            <main>
                <section id="home">
                    <Home />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </main>
        </div>
    );
}
