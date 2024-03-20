import { useTranslation } from "react-i18next";
import { validationSchema } from "../../utils/Valid";
import { formData } from "../../store/form/FormAction";
import { Toast } from "../toast/Toast";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { sucess, failed } from "../toast/Toast";

const ContactForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    validateOnChange: false,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(formData(values)).then((result) => {
        console.log("hello");
        if (!result.error) {
          sucess("Congrats ... we will contact you soon ");
        } else {
          failed("please try again later ... ");
        }
      });
    },
  });
  return (
    <div className="popup" id="appointmentPopup">
      <div className="popup-content">
        <Toast />
        <span className="close" id="closePopup">
          &times;
        </span>
        <h2>{t("BOOK APPOINTMENT")}</h2>
        <div className="form-container">
          <form className="form" onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t("Your Name")}</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                placeholder={t("Enter your name")}
              />
              {formik.errors.name && formik.touched.name ? (
                <p className="fs-small">{formik.errors.name}</p>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="email">{t("Email")}</label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder={t("Enter your email")}
                required
              />
              {formik.errors.email && formik.touched.email ? (
                <p className="fs-small">{formik.errors.email}</p>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="phone">{t("Phone")}</label>
              <input
                type="number"
                id="phone"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                // value={formik.values.phone}
                placeholder={t("Enter your phone")}
              />
              {formik.errors.phone && formik.touched.phone ? (
                <p className="fs-small">{formik.errors.phone}</p>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="address">{t("Your Address")}</label>
              <input
                type="text"
                id="address"
                name="address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
                placeholder={t("Enter your Address")}
                required
              />
              {formik.errors.address && formik.touched.address ? (
                <p className="fs-small">{formik.errors.address}</p>
              ) : null}
            </div>
            <button
              // disabled={!(formik.isValid && formik.dirty)}
              className="form-submit-btn"
              type="submit"
            >
              {t("Send Email")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
