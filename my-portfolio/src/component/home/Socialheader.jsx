import React from "react";
import { FaInstagram ,FaTwitter,FaLinkedin, } from "react-icons/fa";

const Socialheader = () => {
  return (
    <div>
      <div className="contatainer-fluid">
        <div className="socialbox d-flex">
           <a href="" className="social_links"> <FaInstagram /></a>
           <a href="" className="social_links"><FaTwitter /></a>
           <a href="" className="social_links"> <FaLinkedin/></a>
        </div>
      </div>
    </div>
  );
};

export default Socialheader;
