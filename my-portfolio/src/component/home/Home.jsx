import "./home.css"
import Me from "../../assets/Me.jpg"
import Socialheader from "./Socialheader"; 
import { LuMouse } from "react-icons/lu";
function Home(){
    return<>
    <div className="container-fluid home-container">
        <div className="intro">
            <img src={Me} className="intro-image" width="120" height="120"  alt="" />
            <h1 className="home-name">Harsh yadav</h1>
            <span className="home-education">I'm a Front-End Developer</span>
            <Socialheader/>
        </div>
        <div className=" mouse-scroll d-flex">
            <h5>Scroll Down</h5><LuMouse size={40}/>
        </div>
       

    </div>
    </>
}export default Home;