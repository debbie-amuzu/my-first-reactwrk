import navimg from "../assets/image/navimg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="prenav">
        <div className="question">
          <p>Have any question?</p>
          <p>icon +233 571 270 912</p>
        </div>
        <div className="prenavv">
          <p>Events /</p>
          <p>News /</p>
          <p>Emergency Call</p>
        </div>
      </div>

      <div className="navbar">
        <div className="imgnav">
        <img src={navimg} alt="" srcset="" />
        </div>
       
        <div >
          <div className="contact">
            <div>
              <h1>icon</h1>
              <p>Phone number</p>
              <p>+233 571 270 912</p>
            </div>
            <div>
              <h1>icon</h1>
              <p>Address</p>
              <p>Bohye, Adolf Valley Estate</p>
            </div>
          </div>

          <div className="nav-item">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">FAQ's</a>
            <a href="#">Blog</a>
            <a href="#">Shop</a>
            <a href="#">Contact Us</a>
            <a href="#"><p><FontAwesomeIcon icon={faFacebookF} /></p></a>
            <a href="#"><p><FontAwesomeIcon icon={faInstagram} /></p></a>
            <a href="#"><p><FontAwesomeIcon icon={faTwitter} /></p></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
