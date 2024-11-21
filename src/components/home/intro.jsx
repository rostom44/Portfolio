/* eslint-disable react/no-unknown-property */
import { MdOutlineDoubleArrow } from "react-icons/md";
import pfp from "../../assets/bat.gif";
import { useTheme } from "../../context/ThemeProvider";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./home.css";

export default function Intro() {
  const { t } = useTranslation();
  const { darkMode } = useTheme();

  return (
    <div className="box-container">
      <div className="introHeader">
        <div className={darkMode ? "img-circle dark" : "img-circle"}>
          <img src={pfp} alt="Profile Picture" />
        </div>
      </div>
      <h1 className="intro">
        {t("home.translate-hi")}
        <span>ROSTOM</span>
      </h1>
      <h2>{t("home.translate-fullStack")}</h2>
      <p className="arrow">
        {t("home.translate-aboutMe")}
        <Link to="/about">
          <MdOutlineDoubleArrow />
        </Link>
      </p>
    </div>
  );
}
