import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "../../store/project/projectAction";
import { useTranslation } from "react-i18next";
import { baseUrl } from "../../utils/APi";
import MySwiper from "../../component/Swiper";
const Project = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const Projects = useSelector((state) => state.projectSlicer.Projects);
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const fetchProject = useMemo(
    () => async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/projects/${projectId}?populate=*`,
          {
            headers: {
              "content-type": "application/json",
            },
          }
        );
        setProject(response.data.data);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    },
    [projectId]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProjects());
    fetchProject();
  }, [projectId, fetchProject, t, dispatch]);

  return (
    <section className="project-page mt-0">
      <div className="container-fluid main-project">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-12">
            <h4 className="head">{project?.attributes.title}</h4>
          </div>
          <div className="col-lg-6 col-11 mx-auto text-center">
            <img
              className="img-top"
              src={`${baseUrl}${project?.attributes.main_image.data?.attributes?.url}`}
              alt="main-project"
            />
          </div>
        </div>
        <div className="row justify-content-center py-5">
          <div className="col-lg-8 col-12">
            <p>{t(`${project?.attributes.desc}`)}</p>
          </div>
        </div>
        <div className="gallery container">
          <div className="row position-relative">
            {project?.attributes.images.data?.map((item, idx) => (
              <div className="col-6 category" key={idx}>
                <img
                  loading="lazy"
                  className="img-fluid w-100"
                  src={`${baseUrl}${item?.attributes?.url}`}
                  alt={`${baseUrl}${item?.attributes?.url}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="row py-4 justify-content-center">
          <div className="col-md-8 col-12 py-4">
            <p className="py-4 text-bottom">
              {t(
                "We bring an unparalleled level of professionalism to interior design, ensuring that every surface, material, and detail is curated with precision, resulting in a seamless and polished final product."
              )}
            </p>
          </div>
          <div className="col-12">
            <div className="container position-relative">
              <div className="swiper-container-projects">
                <div className="swiper-wrapper">
                  <MySwiper pag={false} slides={2} nav={true} space={20}>
                    {Projects?.map((item, idx) => (
                      <Link to={`/projects/${item?.id}`} key={idx}>
                        <div className="swiper-slide">
                          <img
                            alt={item?.attributes?.title}
                            src={`${baseUrl}${item?.attributes?.main_image.data.attributes.url}`}
                            loading="lazy"
                            className="img-fluid w-100 h-100"
                          />

                          <div className="project-overlay">
                            {item?.attributes?.title}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </MySwiper>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 py-5 text-center">
            <Link to={"/Portofilio"}>
              <button className="More-btn">{t("More Projects")}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
