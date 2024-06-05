import { MdOutlineDoubleArrow } from "react-icons/md";
import "./home.css";
import { useTranslation } from "react-i18next";
export default function Intro() {
  const { t } = useTranslation();
  return (
    <div className="box-container">
      <img src="src\assets\anime-dance.gif" alt="pfp" />
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
