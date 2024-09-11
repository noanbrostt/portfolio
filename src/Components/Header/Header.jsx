import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import "./Header.css";

export const Header = () => {
    const [{ themename }] = React.useContext(ThemeContext);
    const [barHeightClass, setBarHeightClass] = useState('');
    const [isCompact, setIsCompact] = useState(false);

    useEffect(() => {
        const toggleHeaderHeight = () =>
            window.pageYOffset == 0 ? setBarHeightClass('') : setBarHeightClass(' compact');

        window.addEventListener("scroll", toggleHeaderHeight);
        return () => window.removeEventListener("scroll", toggleHeaderHeight);
    }, []);


    return (
        <>
            <header className={"header center " + themename + " " + barHeightClass}>
                <h3>
                    <a href="#top" className="link">
                        Noan Brostt
                    </a>
                </h3>
                <Navbar />
            </header>
        </>
    );
};
