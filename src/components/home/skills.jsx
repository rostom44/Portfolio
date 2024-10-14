import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaSwift } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaNode } from "react-icons/fa6";

import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeProvider";
export default function Skills() {
  const { t } = useTranslation();
  const { darkMode } = useTheme();

  return (
    <div className="box-container">
      <h2
        style={{ textAlign: "center", fontSize: "2.3rem", cursor: "default" }}
      >
        {t("home.translate-skills")}
      </h2>
      <div className={darkMode ? "skills dark" : "skills"}>
        <RiJavascriptFill className="js" data-tooltip-content="Javascript" />
        <FaHtml5 className="html" data-tooltip-content="HTML" />
        <FaCss3Alt className="css" data-tooltip-content="CSS" />
        <SiExpress className="exp" data-tooltip-content="Express" />
        <FaReact className="react" data-tooltip-content="React" />
        <FaSwift className="swift" data-tooltip-content="Swift" />
        <DiMysql className="sql" data-tooltip-content="MySql" />
        <FaNode className="node" data-tooltip-content="Node.js" />
        <FaGitAlt className="git" data-tooltip-content="Git" />
        <SiAdobephotoshop className="ps" data-tooltip-content="Photoshop" />
      </div>
      <Tooltip anchorSelect="[data-tooltip-content]" />
    </div>
  );
}
