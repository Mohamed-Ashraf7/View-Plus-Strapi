import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContactInfo } from "../../store/contact/contactAction";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const info = useSelector((state) => state.contactSlice.info);
  useEffect(() => {
    dispatch(getContactInfo());
  }, [dispatch]);
  console.log(info);
  return (
    <Fragment>
      <section className="ftco-section contact-top ftco-intro mt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12" data-aos="zoom-in-up">
              <div className="contact-img">
                <div>
                  <img
                    className="img-fluid top"
                    src={`${info[0]?.attributes?.image.data[1].attributes.url}`}
                    alt="contant-top"
                  />
                  <p className="bottom-text px-xl-0 px-3">
                    {t(
                      `${info[0]?.attributes?.desc && info[0]?.attributes.desc}`
                    )}
                  </p>
                </div>
                <div>
                  <p className="top-text text-dark top-text">GET IN TOUCH .</p>
                  <img
                    className="img-fluid"
                    src={`${info[0]?.attributes?.image.data[0].attributes.url}`}
                    alt="contact-bottom"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-form pb-4">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 wow fadeInUp">
              <h3 className="py-4">CONTACT US</h3>
              <div className="d-flex flex-column justify-content-between">
                <div className="d-flex align-items-center w-100 mb-3">
                  <div className="ms-4">
                    <h4 className="mb-1">
                      {" "}
                      {t(
                        `${
                          info[1]?.attributes?.name && info[1]?.attributes.name
                        }`
                      )}
                    </h4>
                    <p className="mb-0" style={{ maxWidth: "300px" }}>
                      {t(
                        `${
                          info[1]?.attributes?.desc && info[1]?.attributes.desc
                        }`
                      )}
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center w-100 mb-3">
                  <div className="ms-4">
                    <h4 className="mb-1">
                      {t(
                        `${
                          info[2]?.attributes?.name && info[2]?.attributes.name
                        }`
                      )}
                    </h4>
                    <p className="mb-0">
                      {" "}
                      {t(
                        `${
                          info[2]?.attributes?.desc && info[2]?.attributes.desc
                        }`
                      )}
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center w-100">
                  <div className="ms-4">
                    <h4 className="mb-1">
                      {t(
                        `${
                          info[3]?.attributes?.name && info[3]?.attributes.name
                        }`
                      )}
                    </h4>
                    <p className="mb-0">
                      {" "}
                      {t(
                        `${
                          info[3]?.attributes?.desc && info[3]?.attributes.desc
                        }`
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 fadeInUp">
              <div className="container-xxl text-center pt-5 px-0 fadeIn">
                <iframe
                  className="map-frame"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.3858272315406!2d30.9613702!3d30.0544732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145859df42e8fa71%3A0x1a220ecb669238d1!2sView%20Plus%20-%20design%20%26%20build!5e0!3m2!1sen!2seg!4v1708867708769!5m2!1sen!2seg"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
