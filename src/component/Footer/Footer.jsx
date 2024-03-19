import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Footer = () => {

     const {t} = useTranslation();
  return (
    <footer className="ftco-footer ftco-section">
      <div className="container p-4 pb-0">
        <div className="row mb-1 justify-content-between">
          <div className="col-md-4 col-12">
            <div className="ftco-footer-widget">
              <h2 className="ftco-heading-2">{t("VIEW PLUS")}</h2>
              <p>
               {t("We believe that believe an interior space is a reflection of theyour character, that's where we collaborate with our hard-working engineers to ensure the most optimum plan andselection of interior elements that portray comfort, style, and function.")} 
              </p>
              <ul className="ftco-footer-social list-unstyled  mt-1">
                <li className="icon">
                  <Link
                    aria-label="facebook"
                    href="https://www.facebook.com/viewplus.eg"
                  >
                    <i className="fab fa-facebook-f text-white"></i>
                  </Link>
                </li>
                <li className="icon">
                  <Link
                    aria-label="instagram"
                    href="https://www.instagram.com/viewplus.eg/"
                  >
                    <i className="fab fa-instagram text-white"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-12 text-left text-md-center">
            <div className="ftco-footer-widget mb-1">
              <h2 className="ftco-heading-2">{t("Links")}</h2>
              <ul className="list-unstyled">
                <li>
                  <Link to={"/about"} className="py-1 d-block">
                   {t("about us")} 
                  </Link>
                </li>
                <li>
                  <Link to={"/products"} className="py-1 d-block">
                     {t("our services")} 
                  </Link>
                </li>
                <li>
                  <Link to={"/portofilio"} className="py-1 d-block">
                   {t("Portfolio")}  
                  </Link>
                </li>
                <li>
                  <Link to={"/products"} className="py-1 d-block">
                  {t("Products")}  
                  </Link>
                </li>
                <li>
                  <Link to={"/contact"} className="py-1 d-block">
                   {t("Contact")}   
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-12 ">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2 px-xl-5 px-0">
                { t("HAVE A QUESTION ?")}
              </h2>
              <div className="block-23 mb-2">
                <ul className="px-xl-5 px-0">
                  <li className="footer-list">
                    <i
                      style={{ color: "#aaa" }}
                      className="fas fa-map-marker-alt"
                    ></i>
                    <span className="text-white">
                      190 Al Bostan Street, 6th District, Al Sheikh Zayed City,
                      12588 Giza, Egypt
                    </span>
                  </li>
                  <li className="footer-list">
                    <i
                      style={{ color: "#aaa" }}
                      className="fas fa-envelope"
                    ></i>
                    <span className="text-white">info@viewplus-eg.com</span>
                  </li>
                  <li className="footer-list">
                    <i
                      style={{ color: "#aaa" }}
                      className="fas fa-phone-volume"
                    ></i>
                    <span className="text-white">+20 100 4289 934</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy; 2024 All rights reserved | made with
              <Link href="https://pioneers-solutions.com/" target="_blank">
                pioneers-solutions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
