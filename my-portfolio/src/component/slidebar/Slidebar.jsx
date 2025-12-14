import React from "react";
import "./slidebar.css";
// import logo from "../../assets/logo.jpg";
import { Nav, Image } from "react-bootstrap";
import {
  FaHome,
  FaUserCircle,
  FaUserGraduate,
  FaLayerGroup,
  FaBlog,
  FaCopyright,
  FaRegUserCircle,
} from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi";
import { MdContactMail } from "react-icons/md";
const Slidebar = () => {
  return (
    <div>
      <aside className="aside">
        <a href="#home" className="nav-logo">
          {/* <Image src={logo} className="img-fluid" style={{ width: "150px" }} /> */}
          <FaRegUserCircle size={50} />
        </a>
        <div>
          <Nav className=" nav-mid flex-column">
            <Nav.Item>
              <Nav.Link href="/home">
                <FaHome color="cyan" size={24} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home">
                <FaUserCircle size={24} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="home">
                <HiBriefcase size={24} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Reaume">
                <FaUserGraduate size={24} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="">
                <FaLayerGroup size={24} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="">
                <FaBlog size={24} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="">
                <FaBlog size={24} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="">
                <MdContactMail size={24} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href=""></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href=""></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href=""></Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className=" copyright nav_footer">
          <div>
            <FaCopyright />
          </div>
          <div>2022-2023</div>
        </div>
      </aside>
    </div>
  );
};

export default Slidebar;
