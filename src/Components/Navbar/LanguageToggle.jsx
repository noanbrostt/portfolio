import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageToggle.css"; // CSS para estilização e animação

import br_flag from "../../assets/brazil.png";
import us_flag from "../../assets/united-states.png";

const LanguageToggle = () => {
    const {
        i18n: { changeLanguage, language },
        i18n
    } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language);
    const [isFlying, setIsFlying] = useState(false);
    const [direction, setDirection] = useState("ptToEn"); // Para controlar a direção do voo

    React.useEffect(() => {
        setCurrentLanguage(i18n.language);
    }, [i18n.language]);

    const handleToggle = (lang) => {
      if (currentLanguage !== lang) {

        setIsFlying(true);
        setDirection(currentLanguage === "pt" ? "ptToEn" : "enToPt"); // Define a direção do voo
        setTimeout(() => {
          const newLanguage = currentLanguage === "pt" ? "en" : "pt";
          changeLanguage(newLanguage);

          // Atualiza a URL sem recarregar a página
          const url = new URL(window.location);
          url.searchParams.set('lang', newLanguage);
          window.history.pushState({}, '', url);

          setCurrentLanguage(newLanguage);
          setIsFlying(false);
        }, 600); // Duração da animação
      }
    };    

    return (
        <div className="language-toggle">
            <div className={`airplane ${isFlying ? "fly " + direction : ""}`}>
                ✈️
            </div>
            <div className="radio-buttons">
                <label
                    className={currentLanguage === "pt" ? "" : "inactive"}
                    onClick={() => handleToggle("pt")}
                >
                    <img src={br_flag} alt="Brazil Flag" className="flags" />
                </label>
                <span className="separator">|</span>
                <label
                    className={currentLanguage === "en" ? "" : "inactive"}
                    onClick={() => handleToggle("en")}
                >
                    <img src={us_flag} alt="US Flag" className="flags" />
                </label>
            </div>
        </div>
    );
};

export default LanguageToggle;
