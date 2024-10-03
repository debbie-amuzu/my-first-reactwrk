// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image5 from "../assets/image/image5.png";

const Feature = () => {
  return (
    <div className="feature ">
      <div className="p-10 ">
        <img src={image5} alt="" />
      </div>
      <div>
        <h1 className="text-5xl text-center font-bold">
          We are expert elderly Care{" "}
          <span className="underline text-rose-300">in this town</span>
        </h1>
        <p className="text-2xl p-5 pr-70 pl-70">
          Our mission is to provide the best service to your family, care and
          match for you and your family.
        </p>
      </div>
    </div>
  );
};

export default Feature;
