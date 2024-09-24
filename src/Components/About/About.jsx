import React from "react";
import "./About.css";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/foto_perfil.png";

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
                            Olá, seja bem vindo! 🖐🏻
                            <br />
                            <br />
                            Meu nome é{" "}
                            <span className="different">Noan Caliel Brostt</span>
                            , moro em{" "}
                            <span className="different">Curitiba</span>
                            , sou formado em{" "}
                            <span className="different">ADS</span>{" "}
                            e estou finalizando minha{" "}
                            <span className="different">pós-graduação em Front-End</span>.
                            <br />
                            <br />
                            Conheci a programação na faculdade de engenharia, e após conseguir meu primeiro emprego na área precisei desempenhar em diversas áreas, mas foi no{" "}
                            <span className="different">desenvolvimento web</span>
                            , principalmente no{" "}
                            <span className="different">front-end</span>
                            , que descobri minha vocação.
                            <br />
                            <br />
                            Hoje sou{" "}
                            <span className="different">Desenvolvedor PHP Full Stack há 3 anos</span>{" "}
                            e trabalho de forma terceirizada para a{" "}
                            <span className="different">CAIXA Ecônomica Federal</span>.
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );
};
