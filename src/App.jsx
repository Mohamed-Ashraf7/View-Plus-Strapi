import { Fragment, useEffect } from "react";
import Header from "./component/header/Header";
import BottomBanner from "./component/header/BottomBanner";
import Footer from "./component/Footer/Footer";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Portofilio from "./pages/portofilio/Portofilio";
import Products from "./pages/products/Products";
import Project from "./pages/project/Project";
import SingleProduct from "./pages/single-product/SingleProduct";
import Home from "./pages/home/Home";
import BackTop from "./component/BackTop";

import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route key="home" path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portofilio" element={<Portofilio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects/:projectId" element={<Project />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
      </Routes>
      <BottomBanner />
      <BackTop />
      <Footer />
    </Fragment>
  );
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
