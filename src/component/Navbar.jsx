import navimg from "../assets/image/navimg.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF } from "@fortawesome/free-solid-svg-icons";
// import { faInstagram } from "@fortawesome/free-solid-svg-icons";
// import { faTwitter } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="flex flex-col ">
      <div className="prenav text-white">
        <div className="flex justify-between items-center gap-2">
          <p>Have any question?</p>
          <p>icon +233 571 270 912</p>
        </div>
        <div className=" flex justify-between items-center gap-2">
          <p>Events /</p>
          <p>News /</p>
          <p>Emergency Call</p>
        </div>
      </div>

      <div className=" flex justify-between items-center mx-6 -mt-3 border rounded-lg shadow-black  bg-neutral-50 px-5 py-5" >
        <div className="imgnav">
        <img src={navimg} alt="" srcset="" />
        </div>
       
        <div  className="">
          <div className="flex justify-evenly items-center border-b-2 border-b-rose-300 pb-5">
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
            {/* <div className=" flex underline">

            </div> */}
          </div>

          <div className=" flex pt-4 gap-3">
            <a className="text-black" href="#">Home</a>
            <a className="text-black" href="#">About Us</a>
            <a className="text-black" href="#">Services</a>
            <a className="text-black" href="#">FAQ's</a>
            <a className="text-black" href="#">Blog</a>
            <a className="text-black" href="#">Shop</a>
            <a className="text-black" href="#">Contact Us</a>
            {/* <a href="#"><p><FontAwesomeIcon icon={faFacebookF} /></p></a>
            <a href="#"><p><FontAwesomeIcon icon={faInstagram} /></p></a>
            <a href="#"><p><FontAwesomeIcon icon={faTwitter} /></p></a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
