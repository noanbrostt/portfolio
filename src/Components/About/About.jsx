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
                            , eu{" "}
                            <span className="different">me formei em ADS</span>{" "}
                            e logo vou finalizar minha{" "}
                            <span className="different">pós-graduação em Front End</span>
                            .
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );
};
