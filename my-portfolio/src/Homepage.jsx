import React from "react";
import Home from "./component/home/home";
import About from "./component/about/about";
import Contact from "./component/contact/Contact";
import Mywork from "./component/mywork/mywork";
import Blogs from "./component/Blogs/Blogs";
import Footer from "./component/Footer/Footer";
import Portfolio from "./component/Portfolio/Portfolio";
import Resume from "./component/Resume/Resume";
import Slidebar from "./component/slidebar/slidebar";
import Otherskill from "./component/otherskill/otherskill";
const Homepage = () => {
  return (
    <>  <Slidebar />
      <div className="main">
        <div>
          <Home />
        </div>

        <div style={{marginTop:"12rem"}} className="">
           <About/>
        </div>
        <div>
          <Otherskill/>
        </div>
         <div>
          <Portfolio/>
        </div>
        <div>
          <Contact/>
        </div>
       
      </div>
    </>
  );
};

export default Homepage;
