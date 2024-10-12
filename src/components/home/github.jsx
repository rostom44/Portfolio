import { IoLogoGithub } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import "./home.css";
import { useTheme } from "../../context/ThemeProvider";
export default function Github() {
  const { t } = useTranslation();
  const { darkMode } = useTheme;
  return (
    <div className="box-container">
      <div className="box">
        <p>{t("home.translate-git")}</p>
        <div className="icons">
          <a
            className={darkMode ? "github dark" : "github"}
            href="https://github.com/rostom44"
          >
            <IoLogoGithub />
          </a>
        </div>
        <h3>Github</h3>
      </div>
    </div>
  );
}
