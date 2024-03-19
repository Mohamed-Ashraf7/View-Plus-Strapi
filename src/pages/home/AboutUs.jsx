import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHomeInfo } from "../../store/home/homeAction";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { baseUrl } from "../../utils/APi";
const About = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const info = useSelector((state) => state.homeSlicer.info);

  useEffect(() => {
    dispatch(getHomeInfo());
  }, [dispatch]);
  return (
    <Fragment>
      <section className="about-top" id="about">
        <div className="container">
          <div className="row flex-column align-items-center">
            <h4 className="head">{t("WHAT WE DO")}</h4>
            <p className="text">
              {t(`${info[0]?.attributes?.desc && info[0].attributes?.desc}`)}
            </p>
            <Link to={"/about##service"}>
              <button className="cta">
                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="10"
                  viewBox="0 0 46 16"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"
                  ></path>
                </svg>
                <span className="hover-underline-animation">
                  {t("KNOW MORE")}{" "}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="ftco-section about-bottom ftco-intro mt-0" id="next">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 px-xl-5">
              <h3 className="head text-uppercase ">{t("about us")}</h3>
              <p className="py-2 text-justify">
                {t(`${info[1]?.attributes?.desc && info[1].attributes?.desc}`)}
              </p>
              <Link aria-label="main-btn" to={"/about"}>
                <button className="cta">
                  <svg
                    id="arrow-horizontal"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="10"
                    viewBox="0 0 46 16"
                  >
                    <path
                      id="Path_10"
                      data-name="Path 10"
                      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                      transform="translate(30)"
                    ></path>
                  </svg>
                  <span className="hover-underline-animation">
                    {" "}
                    {t("KNOW MORE")}{" "}
                  </span>
                </button>
              </Link>
            </div>
            <div className="col-lg-6 col-12" data-aos="zoom-in-up">
              <div className="about-img">
                <img
                  className="img-fluid top"
                  src={`${baseUrl}${info[1]?.attributes?.image.data[0].attributes.url}`}
                  alt="about-top"
                  loading="lazy"
                />
                <img
                  className="img-fluid"
                  src={`${baseUrl}${info[1]?.attributes?.image.data[1].attributes.url}`}
                  alt="about-bottom"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section Interiors ftco-intro mt-0">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12" data-aos="zoom-in-up">
              <div className="Interior-img">
                <img
                  className="img-fluid"
                  src={`${baseUrl}${info[2]?.attributes?.image.data[0].attributes.url}`}
                  alt="about-content"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 px-xl-5">
              <h4 className="head px-xl-5">{t("INTERIORS")}</h4>
              <p className="py-2 text-justify interior-p px-xl-5">
                {t(`${info[2]?.attributes?.desc && info[2].attributes?.desc}`)}
              </p>
              <Link
                aria-label="portofilio"
                className="px-xl-5"
                to={"/portofilio"}
              >
                <button className="cta">
                  <svg
                    id="arrow-horizontal"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="10"
                    viewBox="0 0 46 16"
                  >
                    <path
                      id="Path_10"
                      data-name="Path 10"
                      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                      transform="translate(30)"
                    ></path>
                  </svg>
                  <span className="hover-underline-animation">
                    {t("VIEW PORTFOLIO")}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
