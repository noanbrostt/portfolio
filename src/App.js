import React, { useState } from "react";
import "./App.css";
import { ThemeContext } from "./Context/theme";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import { About } from "./Components/About/About";
import { Skills } from "./Components/Skills/Skills";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";

export default function App() {
    const [{ themename }] = React.useContext(ThemeContext);
    React.useEffect(() => {
        Aos.init({ duration: 1400 });
    }, []);

    const { t, i18n: {changeLanguage, language} } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language);  

    return (
        <div id="top" className={`${themename} app`}>
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
            <Footer />
        </div>
    );
}
