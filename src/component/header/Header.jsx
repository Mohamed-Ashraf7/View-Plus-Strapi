import { useState, useEffect } from "react";
import SideNav from "./SideNav";
import ContactForm from "./ContactForm";
import Logo from "../../../images/LOGO/BLACK LOGO.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
const languages = [
  {
    code: "en",
    name: "English",
    dir: "ltr", // Default direction for English
    stylesheet: "./css/style.css", // Default stylesheet for English
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    stylesheet: "./css/style-ar.css",
  },
];
const Header = () => {
  const { t, i18n } = useTranslation();
  const currentLanguageCode = Cookies.get("i18next") || "ar";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    Cookies.set("i18next", languageCode);
  };

  const toggleLanguage = () => {
    const newLanguageCode = currentLanguage.code === "ar" ? "en" : "ar";
    changeLanguage(newLanguageCode);
  };

  useEffect(() => {
    if (currentLanguage) {
      document.body.dir = currentLanguage.dir || "rtl";
      document.title = t("View - plus");
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

  const [navWidth, setNavWidth] = useState(0);
  const openNav = () => {
    setNavWidth(300);
  };
  const closeNav = () => {
    setNavWidth(0);
  };
  return (
    <>
      <header
        id="main-header"
        className="px-xl-5 navbar navbar-light bg-white sticky-top"
      >
        <div className="container-fluid px-xl-5">
          <button
            className="navbar-toggler"
            type="button"
            onClick={openNav}
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between px-xl-3"
            id="navbarNav"
          >
            <ul className="navbar-nav py-4">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  {t("Home")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>
                  {t("About")}{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/portofilio"}>
                  {t("Portfolio")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/products"}>
                  {t("Products")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/contact"}>
                  {t("Contact")}
                </Link>
              </li>
            </ul>
            <Link to={"/"} aria-label="nav-logo">
              <img
                alt="main-logo"
                className="img-fluid w-100 logo-lg pt-2"
                style={{ width: "auto", height: "100px" }}
                src={Logo}
              />
            </Link>
            <ul className="navbar-nav d-none d-lg-flex">
              <Link
                aria-label="facebook"
                to="https://www.facebook.com/viewplus.eg"
              >
                <li className="icon">
                  <i className="fab fa-facebook-f"></i>
                </li>
              </Link>
              <Link
                aria-label="instagram"
                to="https://www.instagram.com/viewplus.eg/"
              >
                <li className="icon">
                  <i className="fab fa-instagram"></i>
                </li>
              </Link>
              <button className="language" onClick={toggleLanguage}>
                <span className="box">
                  <i className="fas fa-globe mx-1"></i>
                  {t("العربية")}
                </span>
              </button>
            </ul>
          </div>
          <span aria-label="btn-header" className="open-popup">
            <button className="btn-header my-2">{t("BOOK APPOINTMENT")}</button>
          </span>
        </div>
      </header>
      <SideNav width={navWidth} Close={closeNav} />
      <ContactForm />
    </>
  );
};

export default Header;
