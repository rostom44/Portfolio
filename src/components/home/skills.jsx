import { useTranslation } from "react-i18next";
export default function Skills() {
  const { t } = useTranslation();
  return (
    <div className="box-container">
      <h2 style={{ textAlign: "center" }}>{t("home.translate-skills")}</h2>
    </div>
  );
}
