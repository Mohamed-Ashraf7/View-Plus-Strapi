import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import img from "../../assets/images/LOGO/BLACK LOGO.png";
const languages = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
  },
];
const SideNav = ({ width, Close }) => {
  const { t, i18n } = useTranslation();
  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    Cookies.set("i18next", languageCode);
  };

  const toggleLanguage = () => {
    const newLanguageCode = currentLanguage.code === "en" ? "ar" : "en";
    changeLanguage(newLanguageCode);
  };

  useEffect(() => {
    if (currentLanguage) {
      document.body.dir = currentLanguage.dir || "ltr";
      document.title = t("app_title");
      const stylesheetLink = document.getElementById("stylesheet");
      if (stylesheetLink) {
        if (currentLanguage.code === "ar") {
          stylesheetLink.href = "../css/style-ar.css";
        } else {
          stylesheetLink.href = "../css/style.css";
        }
      }
    }
  }, [currentLanguage, t]);
  return (
    <div id="mySidenav" className="sidenav" style={{ width: width + "px" }}>
      <a aria-label="close-btn" className="closebtn" onClick={Close}>
        &times;
      </a>
      <Link to={"/"} aria-label="nav-logo" className="p-0" onClick={Close}>
        <img
          alt="logo"
          className="img-fluid "
          style={{ width: "auto", height: "180px" }}
          src={img}
        />
      </Link>
      <Link className="nav-link" onClick={Close} to={"/"}>
        {t("Home")}
      </Link>
      <Link className="nav-link" onClick={Close} to={"/about"}>
        {t("About")}
      </Link>
      <Link className="nav-link" onClick={Close} to={"/portofilio"}>
        {t("Portfolio")}
      </Link>
      <Link className="nav-link" onClick={Close} to={"/products"}>
        {t("Products")}
      </Link>
      <Link className="nav-link" onClick={Close} to={"/contact"}>
        {t("Contact")}
      </Link>
      <ul className="d-flex side-icon p-0">
        <li>
          <a aria-label="facebook" href="https://www.facebook.com/viewplus.eg">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a
            aria-label="instagram"
            href="https://www.instagram.com/viewplus.eg/"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <button className="language" onClick={toggleLanguage}>
          <span className="box">
            <i className="fas fa-globe mx-1"></i> {t("العربية")}
          </span>
        </button>
      </ul>
    </div>
  );
};

export default SideNav;
