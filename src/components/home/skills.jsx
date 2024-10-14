import { RiJavascriptFill } from "react-icons/ri";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaSwift,
  FaNode,
} from "react-icons/fa";
import { SiExpress, SiAdobephotoshop } from "react-icons/si";
import { DiMysql } from "react-icons/di";

import { Tooltip } from "react-tooltip";
import { useContext, useState } from "react";
import { DeviceContext } from "../../context/deviceContext";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeProvider";

const skillIcons = [
  { icon: RiJavascriptFill, className: "js", tooltip: "Javascript" },
  { icon: FaHtml5, className: "html", tooltip: "HTML" },
  { icon: FaCss3Alt, className: "css", tooltip: "CSS" },
  { icon: SiExpress, className: "exp", tooltip: "Express" },
  { icon: FaReact, className: "react", tooltip: "React" },
  { icon: FaSwift, className: "swift", tooltip: "Swift" },
  { icon: DiMysql, className: "sql", tooltip: "MySQL" },
  { icon: FaNode, className: "node", tooltip: "Node.js" },
  { icon: FaGitAlt, className: "git", tooltip: "Git" },
  { icon: SiAdobephotoshop, className: "ps", tooltip: "Photoshop" },
];

export default function Skills() {
  const { t } = useTranslation();
  const { darkMode } = useTheme();
  const { deviceType } = useContext(DeviceContext);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (deviceType === "Phone") {
      setActiveIndex(index);
      // Reset the active state after a short delay
      setTimeout(() => setActiveIndex(null), 300);
    }
  };

  return (
    <div className="box-container">
      <h2
        style={{ textAlign: "center", fontSize: "2.3rem", cursor: "default" }}
      >
        {t("home.translate-skills")}
      </h2>
      <div className={darkMode ? "skills dark" : "skills"}>
        {skillIcons.map(({ icon: Icon, className, tooltip }, index) => (
          <Icon
            key={index}
            className={`${className} ${deviceType === "Phone" && activeIndex === index ? "active" : ""}`}
            data-tooltip-content={tooltip}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <Tooltip anchorSelect="[data-tooltip-content]" />
    </div>
  );
}
