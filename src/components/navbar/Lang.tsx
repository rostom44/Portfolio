import React, { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Language } from "../../Language";
import "./navbar.css";

const Lang = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<Language>(i18n.language as Language);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setLang(JSON.parse(savedLang));
    } else {
      setLang(Language.FR);
    }
  }, []); // Run this effect only once on component mount

  useEffect(() => {
    localStorage.setItem("lang", JSON.stringify(lang));
  }, [lang]); // Save the lang

  let changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    let language = event.target.value;

    switch (language) {
      case Language.EN:
        setLang(Language.EN);
        i18n.changeLanguage(Language.EN);
        break;
      case Language.FR:
      default:
        setLang(Language.FR);
        i18n.changeLanguage(Language.FR);
        break;
    }
  };

  return (
    <div>
      <div className="select-box">
        <select
          value={lang}
          name="language"
          onChange={changeLanguage}
          className="lang"
        >
          <option value={Language.FR}>FR</option>
          <option value={Language.EN}>EN</option>
        </select>
      </div>
    </div>
  );
};

export default Lang;
