import React, { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Language } from "../../lang/Language";
import "./navbar.css";

const Lang = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<Language>(i18n.language as Language);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setLang(JSON.parse(savedLang));
    } else {
      setLang(Language.FR); // Default to French if no lang is saved
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", JSON.stringify(lang)); // Save language selection to localStorage
    i18n.changeLanguage(lang); // Change the language using i18n
  }, [lang, i18n]);

  const handleLangChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value as Language;
    setLang(selectedLang);
  };

  return (
    <div className="select-container">
      <select
        value={lang}
        onChange={handleLangChange}
        aria-label="Select Language"
      >
        <option value={Language.FR}>FR</option>
        <option value={Language.EN}>EN</option>
      </select>
    </div>
  );
};

export default Lang;
