import img from "../../images/up-arrow.png";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const BackTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 50);
  };
  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (1000 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {isVisible && (
        <div onClick={scrollToTop} className="btn back-to-top">
          <img alt="backtop" src={img} className="img-fluid w-100" />
        </div>
      )}
    </>
  );
};

export default BackTop;
