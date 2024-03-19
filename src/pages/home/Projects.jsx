import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "../../store/project/projectAction";
import MySwiper from "../../component/Swiper";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { baseUrl } from "../../utils/APi";
const Projects = () => {
  const dispatch = useDispatch();
  const Projects = useSelector((state) => state.projectSlicer.Projects);
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);
  return (
    <Fragment>
      <section className="Interiors mt-0 ">
        <div className="container text-center Projects">
          <h4 className="heading">{t("OUR PROJECTS")}</h4>

          <div className="container">
            <MySwiper slides={3} pag={false} nav={true} space={30}>
              {Projects?.map((item, idx) => (
                <Link
                  to={`/projects/${item.id}`}
                  className="swiper-slide"
                  key={idx}
                >
                  <img
                    alt={item?.attributes?.title}
                    src={`${baseUrl}${item?.attributes?.main_image.data.attributes.url}`}
                  />
                  <h5>{item?.attributes?.title}</h5>
                  <p>{item?.attributes?.subtitle}</p>
                </Link>
              ))}
            </MySwiper>
          </div>
          <Link aria-label="view-projects" to={"/portofilio"}>
            <button className="project-btn">{t("View All Projects")}</button>
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
