import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { getAbout } from "./../../store/about/aboutAction";
import Team from "./Team";
const Hero = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const info = useSelector((state) => state.aboutSlicer.info);
  useEffect(() => {
    dispatch(getAbout());
  }, [dispatch]);

  return (
    <Fragment>
      <section className="main-about">
        <div className="container">
          <div className="text-center py-5 top-heading">
            <p className="text-center">
              {t(`${info[0]?.attributes?.desc && info[0]?.attributes.desc}`)}
            </p>
          </div>
        </div>
        <div className="about-main-image">
          <img
            src={`http://localhost:1337${info[0]?.attributes?.image.data.attributes.url}`}
          />
        </div>
      </section>
      <section className="middle-par pt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p>
                {t(`${info[1]?.attributes?.desc && info[1]?.attributes.desc}`)}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section center-about ftco-intro mt-0">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="about-desc col-lg-5 col-12 px-xl-5">
              <p className="py-2 text-justify px-xl-5">
                {t(`${info[2]?.attributes?.desc && info[2]?.attributes.desc}`)}
              </p>
              <h1 className="head px-xl-5 text-uppercase ">{t("about us")}</h1>
            </div>
            <div className="col-lg-7 col-12 py-2" data-aos="zoom-in-up">
              <div className="Interior-img">
                <img
                  className="img-fluid"
                  loading="lazy"
                  src={`http://localhost:1337${info[2]?.attributes?.image.data.attributes.url}`}
                  alt="about-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Team />
      <section className="ftco-section about-bottom ftco-intro mt-0">
        <div className="container">
          <div className="row justify-content-end position-relative">
            <div className="about-desc">
              <span className="py-5">{t("CHAIRMAN'S MESSAGE")} </span>
              <p className="py-2 text-justify px-0">
                {t(`${info[3]?.attributes?.desc && info[3]?.attributes.desc}`)}
              </p>
              <h4 className="head">
                <img
                  loading="lazy"
                  alt="signature"
                  src="./images/about/signature.PNG"
                  style={{ width: "200px", height: "100px" }}
                />
              </h4>
            </div>
            <div className="about-desc-img col-lg-11 col-12  ">
              <img
                className="mx-auto"
                src={`http://localhost:1337${info[3]?.attributes?.image.data.attributes.url}`}
                alt="about-main"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="what-do text-center pt-4 py-5">
        <h2 className="py-5">{t("WHAT WE DO")}</h2>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 text-left">
              <div className="py-4 text">
                <h4 className="py-2">
                  {t(
                    `${info[4]?.attributes?.title && info[4]?.attributes.title}`
                  )}
                </h4>
                <p>
                  {t(
                    `${info[4]?.attributes?.desc && info[4]?.attributes.desc}`
                  )}
                </p>
              </div>
              <div className="text">
                <h4 className="py-2">
                  {t(
                    `${info[5]?.attributes?.title && info[5]?.attributes.title}`
                  )}
                </h4>
                <p>
                  {t(
                    `${info[5]?.attributes?.desc && info[5]?.attributes.desc}`
                  )}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                id="service"
                loading="lazy"
                alt="what-do-image"
                src={`http://localhost:1337${info[4]?.attributes?.image.data.attributes.url}`}
                className="img-fluid what-top-img"
              />
            </div>
          </div>
          <div className="row justify-content-between py-3">
            <div className="col-lg-4">
              <img
                loading="lazy"
                alt="what-do-image-one"
                src={`http://localhost:1337${info[6]?.attributes?.image.data.attributes.url}`}
                className="img-fluid what-bottom-img"
              />
              <img
                loading="lazy"
                alt="what-do-image-two"
                src={`http://localhost:1337${info[8]?.attributes?.image.data.attributes.url}`}
                className="img-fluid what-bottom-img"
              />
            </div>
            <div className="col-lg-6 text-left">
              <div className="py-5 text">
                <h4 className="py-2">
                  {t(
                    `${info[6]?.attributes?.title && info[6]?.attributes.title}`
                  )}
                </h4>
                <p className="text-p">
                  {t(
                    `${info[6]?.attributes?.desc && info[6]?.attributes.desc}`
                  )}
                </p>
              </div>
              <div className="text py-5">
                <h4 className="py-2">
                  {t(
                    `${info[7]?.attributes?.title && info[7]?.attributes.title}`
                  )}
                </h4>
                <p className="text-p">
                  {t(
                    `${info[7]?.attributes?.desc && info[7]?.attributes.desc}`
                  )}
                </p>
              </div>
              <div className="text py-5">
                <h4 className="py-2">
                  {t(
                    `${info[8]?.attributes?.title && info[8]?.attributes.title}`
                  )}
                </h4>
                <p className="text-p">
                  {t(
                    `${info[8]?.attributes?.desc && info[8]?.attributes.desc}`
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
