import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import Switch from "react-switch";
import { IoMenu } from "react-icons/io5";
import { useTheme } from "../../context/ThemeProvider";
import { DeviceContext } from "../../context/deviceContext";
import { useTranslation } from "react-i18next";
import Sun from "../../assets/sun.svg";
import Moon from "../../assets/moon.svg";
import Lang from "./Lang";
import "./navbar.css";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const { deviceType } = useContext(DeviceContext);

  const menuClassName =
    deviceType === "Phone" ? "menu-button-mobile" : "menu-button";

  const handleToggle = () => {
    toggleTheme();
  };

  const handleNavLinkClick = () => {
    // Close the menu when a nav link is clicked
    setMenu(false);
  };
  return (
    <header className="nav_container">
      <nav className={darkMode ? "navbar dark" : "navbar"}>
        <h2 className="text-logo">𝓡𝓞𝓢𝓣𝓞𝓜</h2>
        <div className="nav-buttons">
          <Lang />
          <div className="switch-box">
            <Switch
              className="toggle"
              onChange={handleToggle}
              checked={darkMode}
              offColor="#000"
              onColor="#74a8d5"
              checkedIcon={
                <img
                  src={Moon}
                  alt="Moon Icon"
                  style={{
                    paddingLeft: "0.19rem",
                  }}
                />
              }
              uncheckedIcon={<img src={Sun} alt="Sun Icon" />}
              height={23}
              width={50}
              onHandleColor="#ffffff"
              offHandleColor="#c8bbbb"
              handleDiameter={27}
            ></Switch>
          </div>
          <button
            type="button"
            className={menuClassName}
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <IoMenu />
          </button>
        </div>
      </nav>
      <ul className={menu ? "nav-list active" : "nav-list"}>
        <li>
          <NavLink to="/" onClick={handleNavLinkClick}>
            {t("common.translate-home")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={handleNavLinkClick}>
            {t("common.translate-about")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" onClick={handleNavLinkClick}>
            {t("common.translate-work")}
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
