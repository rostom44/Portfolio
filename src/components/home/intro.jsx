/* eslint-disable react/no-unknown-property */
import { MdOutlineDoubleArrow } from "react-icons/md";

import { useTheme } from "../../darkTheme/ThemeProvider";
import { useTranslation } from "react-i18next";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import ReactLogo from "./ReactLogo";

import "./home.css";
export default function Intro() {
  const { t } = useTranslation();
  const { darkMode } = useTheme();
  return (
    <div className="box-container">
      <div className="introHeader">
        <div className={darkMode ? "img-circle dark" : "img-circle"}>
          <img src="src\assets\anime-dance.gif" alt="pfp" />
        </div>
        <Canvas className="reactLogo">
          <ambientLight />
          <OrbitControls autoRotate enableZoom={false} />
          <ReactLogo />
          <Environment preset="forest" />
        </Canvas>
      </div>
      <h1>
        {t("common.translate-hi")}
        <span>ROSTOM</span>
      </h1>
      <h2>{t("common.translate-fullStack")}</h2>
      <p className="more">
        {t("common.translate-aboutMe")}
        <a href="/about">
          <MdOutlineDoubleArrow />
        </a>
      </p>
    </div>
  );
}
