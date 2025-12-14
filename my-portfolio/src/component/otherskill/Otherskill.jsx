import React from "react";
import "./otherskill.css";
import { IoLogoNodejs } from "react-icons/io5";
import { DiNodejs } from "react-icons/di";
import { SiReactbootstrap } from "react-icons/si";

const Otherskill = () => {
  return (
    <div className=" otherskill-container container-fluid">

      <div><h2>More Skills</h2></div>
      <br />
      <div className=" skill-box ">
        <div className=" shrink-box">
          <div className="  shrink-box2"><IoLogoNodejs className="full-icon" /></div>
          <div className="  shrink-box2"><DiNodejs className="full-icon2" /></div>
          <div className="  shrink-box2"><img  className="full-icon3" src="/nodejs.svg" alt="" /></div>
          <div className="  shrink-box2"><SiReactbootstrap className="full-icon2" /></div>
          <div className="  shrink-box2">box5</div>
          <div className="  shrink-box2">box6</div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Otherskill;
