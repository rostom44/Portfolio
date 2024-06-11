import { FaLinkedin } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import "./home.css";
export default function Linkedin() {
  const { t } = useTranslation();

  return (
    <div className="box-container">
      <div className="box">
        <p>{t("home.translate-linkedin")}</p>
        <div className="icons">
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/rostom-rekik/"
          >
            <FaLinkedin />
          </a>
        </div>
        <h3>Linkedin</h3>
      </div>
    </div>
  );
}
