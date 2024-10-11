import React from "react";
import PropTypes from "prop-types";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
    const [themename, setthemename] = React.useState("dark");
    
    const toggletheme = () => {
        themename === "light" ? setthemename("dark") : setthemename("light");
    };

    React.useEffect(() => {
        // Função para fazer o scroll bar acompanhar a cor do tema
        const clrBg = getComputedStyle(document.querySelector("."+themename)).getPropertyValue('--clr-bg-alt').trim();
        const clrBgAlt = getComputedStyle(document.querySelector("."+themename)).getPropertyValue('--clr-bg').trim();
    
        document.documentElement.style.setProperty(
            "--scrollBar-handle",
            clrBg
        );
        document.documentElement.style.setProperty(
            "--scrollBar-rail",
            clrBgAlt
        );
    }, [themename]);

    return (
        <ThemeContext.Provider value={[{ themename, toggletheme }]}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
