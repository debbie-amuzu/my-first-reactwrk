import image1 from "../assets/image/image1.png";

const Footer = () => {
  return (
    <div className="z-1">
      <div className="-mb-10 flex justify-center items-center  ">
        <img  className="" src={image1} alt="" />
      </div>
      <div className="pt-20 bg-[#050505] opacity-80">
       <div className="numbers gap-x-10 pt-20">
       <div className="text-3xl">
          <h1 className="text-rose-300 font-bold text-5xl pb-5">47+</h1>
          Years of experience
        </div>
        <div className="text-3xl">
          <h1 className="text-rose-300 font-bold text-5xl pb-5">25k</h1>
          Happy Families
        </div>
        <div className="text-3xl">
          <h1 className="text-rose-300 font-bold text-5xl pb-5">123</h1>
          Expert Nurses
        </div>
        <div className="text-3xl">
          <h1 className="text-rose-300 font-bold text-5xl pb-5">69+</h1>
         Awards Winnings
        </div>
        <div className="text-3xl">
          <h1 className="text-rose-300 font-bold text-5xl pb-5">37k</h1>
         Happy Seniors
        </div>
      </div>
       </div>
    </div>
  );
};
export default Footer;
