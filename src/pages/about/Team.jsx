import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTeams } from "../../store/team/teamAction";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const team = useSelector((state) => state.teamSlice.teams);

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);
  return (
    <Fragment>
      <section className="ftco-section about-team ftco-intro pt-0 mt-0">
        <div className="about-bottom-image"></div>
        <div className="about-members container-fluid">
          <div className="heading col-12 text-center">
            <h3>{t("MEET OUR BOARD MEMBERS")}</h3>
            <p>{t("Elevate Your Space, Elevate Your Life.")}</p>
          </div>
          <div className="row members-team">
            {team?.map((item, idx) => (
              <div className="col-md-4 col-12" key={idx}>
                <div className="member">
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src={`${item?.attributes?.image.data.attributes.url}`}
                    alt={item?.attributes?.name}
                  />
                  <h4 className="py-4"> {t(`${item?.attributes?.name}`)}</h4>
                  <p>{t(`${item?.attributes?.desc}`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Team;
