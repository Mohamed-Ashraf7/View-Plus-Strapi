import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, getcategory } from "../../store/products/productAction";
import { Link } from "react-router-dom";
import img from "../../assets/images/products/1.png";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Products.Products);
  const categories = useSelector((state) => state.Products.category);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getcategory());
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.attributes?.product_category.data.attributes?.name ===
            selectedCategory
        );
  return (
    <Fragment>
      <section className="ftco-section product-page ftco-intro mt-0">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-4 col-12 px-xl-5">
              <h4 className="head">{t("OUR PRODUCTS")}</h4>
              <p className="py-4">
                {t(
                  "We have access to a large and exquisite range of trade, not only fabric houses and furniture suppliers, we tailor our service to suite your project either it's scale is huge or small."
                )}
              </p>
            </div>
            <div className="col-lg-8 col-12" data-aos="zoom-in-up">
              <div className="main-img">
                <img className="img-fluid h-100" src={img} alt="main-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-category">
        <div className="container mt-5">
          <div className="row pb-5">
            <div className="col-md-12 d-flex justify-content-between">
              <div className="dropdown">
                <button className="dropbtn">
                  <span>
                    {t("Filter |")} {selectedCategory}
                    <i className="fas fa-caret-square-down mx-1"></i>
                  </span>
                </button>
                <div className="dropdown-content">
                  <button onClick={() => selectCategory("All")}>
                    {t("All")}
                  </button>
                  {categories.map((category, idx) => (
                    <button
                      key={idx}
                      onClick={() => selectCategory(category.attributes?.name)}
                    >
                      {category.attributes?.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="row product-container">
            {filteredProducts?.map((item, idx) => (
              <div
                className={`col-lg-4 col-6 mb-3" ${item.attributes?.product_category.data.attributes?.name}`}
                key={idx}
              >
                <Link
                  aria-label="image-product"
                  to={`/products/${item.id}`}
                  className="custom-img image-container"
                >
                  <img
                    loading="lazy"
                    src={`${item?.attributes?.main_image.data.attributes.url}`}
                    alt={item?.attributes?.main_image.data.attributes.url}
                    className="img-fluid"
                  />
                  <div className="span-bottom">
                    <span>{item?.attributes?.title}</span>
                    <p>{item?.attributes?.subtitle}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Products;
