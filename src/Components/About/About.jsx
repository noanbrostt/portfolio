import React from "react";
import "./About.css";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Photo_fw14_056.png";

export const About = () => {
    const [{ themename }] = React.useContext(ThemeContext);

    return (
        <>
            <div className="section" data-aos="fade-right">
                <h2 className="section__title">
                    Sobre <span className="different">Mim</span>
                </h2>
                <div className={"introduction " + themename}>
                    <div className="introduction_logocontainer">
                        <img src={profilePic} alt="Images" />
                    </div>
                    <div className="introduction_datacontainer">
                        <h4>
                            {/* Possuo forte habilidade em lógica de programação e lógica matemática, além de uma excelente capacidade de interpretar as necessidades dos clientes. Minha principal competência está no front-end, onde me destaco por criar interfaces bonitas, intuitivas e funcionais, sem comprometer a eficiência e a qualidade do back-end. */}
                            Meu nome é{" "}
                            <span className="different">Noan Caliel Brostt </span>{" "}
                            e eu sou de{" "}
                            <span className="different">Curitiba, Paraná (Brasil)</span>
                            . Tenho 3 anos de experiência atuando em diversas áreas da programação, desde{" "}
                            <span className="different">automação </span>
                            até a construção de{" "}
                            <span className="different">bancos de dados </span>
                            e{" "}
                            <span className="different">desenvolvimento de sites completos</span>
                            . Minha principal competência está no front-end, onde me destaco por criar interfaces bonitas, intuitivas e funcionais, sem comprometer a eficiência e a qualidade do back-end.
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );
};
