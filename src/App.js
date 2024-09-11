import React from "react";
import "./App.css";
import { ThemeContext } from "./Context/theme";
import Aos from "aos";
import "aos/dist/aos.css";
// import { Techstacks } from "./Components/About/Techstacks";

import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import { About } from "./Components/About/About";
import { Timeline } from "./Components/Timeline/Timeline";
import { Techstacks } from "./Components/Techstacks/Techstacks";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";

export default function App() {
    const [{ themename }] = React.useContext(ThemeContext);
    React.useEffect(() => {
        Aos.init({ duration: 1400 });
    }, []);

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
                <section id="timeline">
                    <Timeline />
                </section>
                <section id="skills">
                    <Techstacks />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}
