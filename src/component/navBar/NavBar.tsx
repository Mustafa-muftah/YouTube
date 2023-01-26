import { TextFeild } from "../global/textFeild";
import { useState } from "react";
import { useTypeSelector } from "../../appState/Hooks/useTypedSelector";
import youTubeLogo from "../../assets/logo.svg";
import youTubeMobileLogo from "../../assets/youtube-icon.svg";
import "./NavBar.scss";


export const NavBar: React.FC = () => {  
  return (
    <div className="navBar">
    <nav className="navBar__container">
      <a href="/">
        <img className="desktop__logo" src={youTubeLogo} alt="desktop-logo" />
      </a>
      <a href="/">
        <img className=" mobile__logo" src={youTubeMobileLogo} alt="mobile-logo" />
      </a>
      <div className="search">
          <TextFeild />
      </div>
    </nav>
    </div>
  );
};
