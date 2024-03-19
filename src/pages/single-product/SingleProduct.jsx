import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { baseUrl } from "../../utils/APi";
const SingleProduct = () => {
  const products = useSelector((state) => state.Products.Products);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/products/${productId}?populate=*`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      setProduct(response.data.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProduct();
  }, [productId]);

  const [selectedImage, setSelectedImage] = useState();
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  useEffect(() => {
    if (product && product.attributes.sub_image.data.length > 0) {
      setSelectedImage(product.attributes.sub_image.data[0].attributes.url);
    }
  }, [product]);
  return (
    <main className="single-product py-5">
      <div className="container-fluid product-top">
        <div className="row px-xl-5">
          <div className="col-lg-6 mb-30">
            <div className="img-card row">
              <div className="col-md-9 col-12">
                <img
                  src={`${baseUrl}${selectedImage}`}
                  alt="main-product"
                  id="featured-image"
                />
              </div>
              <div className="col-md-3 col-12">
                <div className="small-Card">
                  {product?.attributes.sub_image.data?.map((item, idx) => (
                    <img
                      key={idx}
                      src={`${baseUrl}${item?.attributes?.url}`}
                      alt={item?.attributes?.url}
                      className="small-Img"
                      onClick={() => handleImageClick(item?.attributes?.url)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 px-xl-3 main-text d-flex flex-column justify-content-end">
            <div className="brand-container">
              <img
                alt="brand-name"
                src={`${baseUrl}${product?.attributes.sub_image.data[0]?.attributes?.url}`}
                className="img-fluid top-img"
              />
              <h5>
                {product?.attributes.title}
                <br />
                by
                <a
                  className="brand_name"
                  target="_blank"
                  href="https://agrob-buchtal.de/en"
                >
                  Agroub Buchtal
                  <img
                    src={`${baseUrl}${product?.attributes.sub_image.data[1]?.attributes?.url}`}
                    alt="brand-logo"
                    className="bottom-img"
                  />
                </a>
              </h5>
            </div>
            <p>{product?.attributes.desc}</p>
          </div>
        </div>
        <div className="container shuffle-container">
          <div className="row px-xl-5 py-5">
            <div className="col-12 pb-0">
              <div>
                <div className="nav nav-tabs mb-4 d-flex justify-content-center">
                  <a
                    className="nav-item nav-link text-dark active"
                    data-toggle="tab"
                    href="#tab-pane-1"
                  >
                    OVERVIEW
                  </a>
                  <a
                    className="nav-item nav-link text-dark"
                    data-toggle="tab"
                    href="#tab-pane-2"
                  >
                    DIMENSIONS
                  </a>
                  <a
                    className="nav-item nav-link text-dark"
                    data-toggle="tab"
                    href="#tab-pane-3"
                  >
                    COLORS
                  </a>
                </div>
                <div className="tab-content px-xl-5">
                  <div className="tab-pane fade show active" id="tab-pane-1">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="tab-pane fade" id="tab-pane-2">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, ea
                      commodo consequat.
                    </p>
                  </div>
                  <div className="tab-pane fade" id="tab-pane-3">
                    <div className="row">
                      <div className="col-4 text-center">#eeedee</div>
                      <div className="col-4 text-center">#24de4d</div>
                      <div className="col-4 text-center">#d2d2d2d</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="product-category">
        <div className="container">
          <div className="row pb-5">
            <div className="col-md-12 d-flex justify-content-center">
              <h3>OTHER PRODUCTS</h3>
            </div>
          </div>

          <div className="row product-container">
            {products?.map((item, idx) => (
              <div className="col-lg-4 col-6 mb-3 doors" key={idx}>
                <Link
                  aria-label="image-product"
                  to={`/products/${item.id}`}
                  className="custom-img image-container"
                >
                  <img
                    loading="lazy"
                    src={`${baseUrl}${item?.attributes?.main_image.data.attributes.url}`}
                    alt={item?.attributes?.title}
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
    </main>
  );
};

export default SingleProduct;
