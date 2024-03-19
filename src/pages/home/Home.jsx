import { Fragment } from "react";
import Banner from "./Banner";
import About from "./AboutUs";
import Projects from "./Projects";
import Arrivals from "./Arrivals";

const Index = () => {
   
  return (
    <Fragment>
      <Banner />
      <About />
      <Projects />
      <Arrivals />
    </Fragment>
  );
};

export default Index;
