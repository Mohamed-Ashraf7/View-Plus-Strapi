import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../store/products/productAction";
import MySwiper from "../../component/Swiper";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { baseUrl } from "../../utils/APi";
const Arrivals = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Products.Products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <Fragment>
      <section className="product">
        <div className="product-intro">
          <h4>{t("OUR PRODUCTS")}</h4>
          <p className="py-3">
            {t("Explore our one of a kind home finishing products collection.")}
          </p>
          <Link to={"/products"}>
            <button
              className="cta"
              style={{ backgroundColor: "#444", color: "white" }}
            >
              <span
                className="hover-underline-animation"
                style={{ color: "white" }}
              >
                {t("VIEW Products")}
              </span>
              <svg
                id="arrow-horizontal"
                fill="white"
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
            </button>
          </Link>
        </div>
      </section>
      <section className="ftco-section ftco-intro mt-0">
        <div className="container">
          <div className="products-container d-flex align-items-center">
            <div className="col-lg-3 pt-lg-0 pt-2 new-arrivals">
              <h4>{t("CHECK NEW ARRIVALS")}</h4>
              <Link to={"/products"}>
                <button className="project-btn "> {t("VIEW Products")} </button>
              </Link>
            </div>
            <div className="col-lg-12 px-0">
              <div className="container px-0 relative">
                <MySwiper
                  pag={{ clickable: true, type: "progressbar" }}
                  slides={4}
                  nav={false}
                  space={20}
                >
                  {products?.map((item, idx) => (
                    <Link
                      className="swiper-slide text-center"
                      to={`/products/${item.id}`}
                      key={idx}
                    >
                      <img
                        src={`${baseUrl}${item?.attributes?.main_image.data.attributes.url}`}
                        alt={item?.attributes?.title}
                      />
                      <h6 className="text-center mt-2">
                        {item?.attributes?.title}
                      </h6>
                      <p className="text-center ">
                        {item?.attributes?.subtitle}
                      </p>
                    </Link>
                  ))}
                </MySwiper>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Arrivals;
