import React, { useState } from "react";
import { ThemeContext } from "../../Context/theme";
import "./Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Trans } from "react-i18next";

import LanguageToggle from './LanguageToggle';

export const Navbar = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const [showNavList, setShowNavList] = React.useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };


  return (
    <>
      <nav className="center nav">
        <ul
          style={{ display: showNavList ? "flex" : null }}
          className="nav__list"
        >
          <li className="nav__list-item">
            <a
              href="#top"
              onClick={() => toggleNavList("#home")}
              className="link link--nav"
            >
              <Trans i18nKey="nav.home" />
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#about"
              onClick={() => toggleNavList("#about")}
              className="link link--nav"
            >
              <Trans i18nKey="nav.about" />
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={() => toggleNavList("#skills")}
              className="link link--nav"
            >
              <Trans i18nKey="nav.skills" />
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={() => toggleNavList("#projects")}
              className="link link--nav"
            >
              <Trans i18nKey="nav.projects" />
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={() => toggleNavList("#contact")}
              className="link link--nav"
            >
              <Trans i18nKey="nav.contact" />
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="https://drive.google.com/file/d/1O7O6dgBNriadNFoYRj8kHr6-dyPyoG4n/view?usp=sharing"
              onClick={toggleNavList}
              className="link link--nav"
              target="_blank"
              rel="noreferrer"
            >
              <Trans i18nKey="nav.resume" />
            </a>
          </li>
        </ul>

        <LanguageToggle />

        {/* From Uiverse.io by juanpabl0svn, adapted by me */}
        <label htmlFor="switch" className="switch">
          <input id="switch" type="checkbox" onClick={toggeltheme} />
          <span className="slider"></span>
          <span className="decoration"></span>
        </label>  

        <button
          type="button"
          onClick={toggleNavList}
          className="btn btn--icon nav__hamburger"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </>
  );
};
