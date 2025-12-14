import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import "./about.css";
import { ProgressBar } from "react-bootstrap";

const About = () => {
  return (
    <div className="container-fluid about-container">
      <div className="about d-flex">
        <div>
          <h2>About Me</h2>
        </div>
       
        <div className="box">
          <div className=" row m-0 p-0">
            <div className="  col-sm-12 col-md-6 p-0">
               <div className=" ">
          <FaCircleUser size={65} />
        </div>
              
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                ad aut ut esse rerum iusto suscipit laborum delectus ratione,
                error corrupti ipsam minima dolorem excepturi tempore laudantium
                fugiat inventore tenetur.
              </p>
            </div>
            <div className=" col-sm-12 col-md-6 p-0 about-skill">
              <div className="skill_box">
                 <div className="skill-tittle">
                <h3 className="skill-name">HTML</h3>
                <ProgressBar variant="danger" now={80} />
              </div>
              <div className="skill-tittle">
                <h3 className="skill-name">CSS</h3>
                <ProgressBar variant="warning" now={60} />
              </div>
              <div className="skill-tittle">
                <h3 className="skill-name">JAVASCRIPT</h3>
                <ProgressBar variant="info" now={20} />
              </div>
              <div className="skill-tittle">
                <h3 className="skill-name">REACT</h3>
                <ProgressBar variant="success" now={40} />
              </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
