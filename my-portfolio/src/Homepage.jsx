import React from "react";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Portfolio from "./component/Portfolio/Portfolio";
import Slidebar from "./component/slidebar/slidebar";
import Otherskill from "./component/otherskill/Otherskill";
const Homepage = () => {
  return (
    <>
    
      <Slidebar />
      <div className="main">
        <div>
          <Home />
        </div>

        <div style={{ marginTop: "12rem" }} className="">
          <About />
        </div>
        <div>
          <Otherskill />
        </div>
        <div>
          <Portfolio />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Homepage;
