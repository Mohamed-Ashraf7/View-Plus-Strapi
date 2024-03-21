import { useRef, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useSelector, useDispatch } from "react-redux";
import { getSlides } from "../../store/slider/SliderAction";
import { useTranslation } from "react-i18next";
import Loader from "../../component/Loader";
const HomeSlider = () => {
  const dispatch = useDispatch();
  const { Data, loading } = useSelector((state) => state.slider);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getSlides());
  }, [dispatch]);

  const carouselRef = useRef(null);
  function handleSlideType(event) {
    const currentSlide = event.item.index;

    if (currentSlide === 0) {
      const videoElement = event.target
        .find(".owl-item")
        .eq(currentSlide)
        .find("video")[0];
      event.target.trigger("stop.owl.autoplay");
      videoElement.onended = function () {
        event.target.trigger("next.owl.carousel");
        event.target.trigger("play.owl.autoplay");
      };
      videoElement.play().catch(function (error) {
        console.log("Autoplay was prevented.");
      });
    }
  }

  const options = {
    loop: true,
    margin: 0,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplay: true,
    autoplayHoverPause: false,
    items: 1,
    navText: [
      "<i aria-hidden='true' class='fas fa-angle-left'></i>",
      "<i aria-hidden='true' class='fas fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
    onTranslated: handleSlideType,
  };

  return loading === "pending" ? (
    <Loader />
  ) : (
    <section id="home-section" className="hero" dir="ltr">
      <div className="js-fullheight home-wrap d-flex">
        <div className="half">
          <OwlCarousel
            ref={carouselRef}
            {...options}
            className="home-slider owl-carousel relative"
          >
            <div className="slider-item js-fullheight">
              <div className="container-fluid p-0">
                <div
                  className="row d-flex no-gutters slider-text js-fullheight align-items-center justify-content-end"
                  data-scrollax-parent="true"
                >
                  <div className="one-third img js-fullheight">
                    <video
                      id="video"
                      autoPlay={true}
                      muted
                      style={{ width: "100%", height: "100%" }}
                    >
                      <source
                        id="video"
                        src={`${Data[0]?.attributes?.image.data.attributes.url}`}
                        type="video/mp4"
                      />
                    </video>
                    <div className="vr">
                      <h1 className="text text-center">
                        <span className="top">
                          {t(`${Data[0]?.attributes?.title}`)}
                        </span>
                        <span> {t(`${Data[0]?.attributes?.subtitle}`)}</span>
                      </h1>
                    </div>
                    <div className="overlay"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-item js-fullheight">
              <div className="container-fluid p-0">
                <div
                  className="row d-flex no-gutters slider-text js-fullheight align-items-center justify-content-end"
                  data-scrollax-parent="true"
                >
                  <div
                    className="one-third img js-fullheight"
                    style={{
                      backgroundImage: `url(${Data[1]?.attributes?.image.data.attributes.url})`,
                    }}
                  >
                    <div className="vr">
                      <h1 className="text text-center">
                        <span className="top">
                          {t(`${Data[1]?.attributes?.title}`)}
                        </span>
                        <span> {t(`${Data[1]?.attributes?.subtitle}`)} </span>
                      </h1>
                    </div>
                    <div className="overlay"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-item js-fullheight">
              <div className="container-fluid p-0">
                <div
                  className="row d-flex no-gutters slider-text js-fullheight align-items-center justify-content-end"
                  data-scrollax-parent="true"
                >
                  <div
                    className="one-third img js-fullheight"
                    style={{
                      backgroundImage: `url(${Data[2]?.attributes?.image.data.attributes.url})`,
                    }}
                  >
                    <div className="vr">
                      <h1 className="text text-center">
                        <span className="top">
                          {t(`${Data[2]?.attributes?.title}`)}
                        </span>
                        <span> {t(`${Data[2]?.attributes?.subtitle}`)}</span>
                      </h1>
                    </div>
                    <div className="overlay"></div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
