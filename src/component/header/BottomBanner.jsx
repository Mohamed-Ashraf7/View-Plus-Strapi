import { useTranslation } from "react-i18next";
const BottomBanner = () => {
   const { t} = useTranslation();
  return (
    <div className="banner-bottom">
      <p>{t("WANT TO START YOUR PROJECT NOW ?")}</p>
      <a aria-label="btn-header" className="open-popup">
        <button className="btn-header">{t("BOOK APPOINTMENT")}</button>
      </a>
    </div>
  );
}

export default BottomBanner
