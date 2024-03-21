import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getPotrofiloInfo,
  getProjects,
  getProjectCat,
} from "../../store/project/projectAction";
import { useTranslation } from "react-i18next";
import Loader from "./../../component/Loader";

const Portofilio = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [visibleProjects, setVisibleProjects] = useState(6);
  const { Projects, info, categories, loading } = useSelector(
    (state) => state.projectSlicer
  );

  useEffect(() => {
    dispatch(getPotrofiloInfo());
    dispatch(getProjects());
    dispatch(getProjectCat());
  }, [dispatch]);
  const addMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 2);
  };
  const [selectedCategory, setSelectedCategory] = useState("All");

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "All"
      ? Projects
      : Projects.filter(
          (project) =>
            project.attributes?.project_category.data.attributes?.name ===
            selectedCategory
        );
  return loading === "pending" ? (
    <Loader />
  ) : (
    <Fragment>
      <section className="Portfolio">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-12 center-content">
              <img
                src={`${info[0]?.attributes.image.data.attributes.url}`}
                alt="Small Image"
              />
              <h1>{t(`${info[0]?.attributes?.title}`)}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 bottom-left">
              <div className="p-3">
                <p>
                  {t("EXPLORE OUR LATEST PROJECTS,")}
                  <br />
                  {t("THE FUTURE IS NOW.")}
                </p>
                <Link to={`/projects/${Projects[0]?.id}`}>
                  <button className="cta">
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
                    <span
                      className="hover-underline-animation"
                      style={{ color: "#ddd" }}
                    >
                      {t("VIEW Project")}
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portifilio-text">
        <div className="container">
          <div className="row middle-text">
            <div className="col-12 text-center">
              <h6 className="py-3">{t("VIEW PLUS")}</h6>
              <p>{t(`${info[0]?.attributes?.desc}`)}</p>
            </div>
          </div>
        </div>

        <div className="portifilio-images">
          <div className="container mt-5">
            <div className="row mb-4">
              <div className="col-md-7">
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
                        onClick={() =>
                          selectCategory(category.attributes?.name)
                        }
                      >
                        {category.attributes?.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="row" id="main-image-container">
              {filteredProjects?.slice(0, visibleProjects).map((item, idx) => (
                <div
                  className={`col-md-6 mb-4 ${item.attributes?.project_category.data.attributes?.name}`}
                  key={idx}
                  data-aos="zoom-in-up"
                >
                  <div className="image-container">
                    <div className="span-top">
                      <span>{item?.attributes?.title}</span>
                      <p>{item?.attributes?.subtitle}</p>
                    </div>
                    <a
                      href={`${item?.attributes.main_image.data?.attributes?.url}`}
                      className="image-gallery"
                      data-lightbox="roadtrip"
                    >
                      <img
                        src={`${item?.attributes.main_image.data?.attributes?.url}`}
                        alt={item?.attributes.main_image.data?.attributes?.url}
                        className="img-fluid"
                        loading="lazy"
                      />
                    </a>
                    <Link to={`/projects/${item?.id}`}>
                      <button className="cta" style={{ color: "#666" }}>
                        <svg
                          id="arrow-horizontal"
                          fill="black"
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
                        <span
                          className="hover-underline-animation"
                          style={{ fontSize: "0.7rem" }}
                        >
                          {t("VIEW Project")}
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-12 py-5 text-center">
                <button className="More-btn" onClick={addMoreProjects}>
                  {t("More Projects")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Portofilio;
