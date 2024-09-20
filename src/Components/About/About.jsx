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
                            Meu nome é{" "}
                            <span className="different">Noan Caliel Brostt</span>{" "}
                            e moro em{" "}
                            <span className="different">Curitiba, Paraná (Brasil)</span>
                            . Conheci a programação na faculdade de engenharia, e após conseguir meu primeiro emprego como programador precisei desempenhar em diversas áreas diferentes, mas foi no{" "}
                            <span className="different">desenvolvimento web</span>
                            , principalmente no{" "}
                            <span className="different">front end</span>
                            , que descobri minha vocação. Hoje sou{" "}
                            <span className="different">Desenvolvedor PHP Full Stack</span>
                            , sai da engenharia e{" "}
                            <span className="different">me formei em ADS</span>{" "}
                            e logo vou finalizar minha{" "}
                            <span className="different">pós-graduação em Front End</span>
                            .
                            {/* Na faculdade de engenharia foi onde descobri minha{" "}
                            <span className="different">facilidade com lógica de programação</span>
                            .
                            No meu primeiro emprego eu fui o único desenvolvedor de um sistema, e desenvolvi uma{" "}
                            <span className="different">boa noção de design</span>
                            , depois que{" "}
                            <span className="different">me formei em ADS</span>{" "}
                            eu avancei na carreira e comecei a falar com clientes todo dia, aperfeiçoando minha{" "}
                            <span className="different">capacidade de traduzir os desejos do cliente em código</span>
                            . Atualmente,{" "}
                            <span className="different">estou cursando pós-graduação em front-end</span>{" "}
                            para expandir ainda mais minhas habilidades.
                            <br/>

                            Quando não estou programando eu gosto de jogar vôlei, um esporte que pratico há 8 anos. Estou sempre buscando novos desafios, tanto no esporte quanto na minha carreira, com o objetivo de crescer e contribuir com cada projeto que participo. */}
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );
};
