const Hero = () => {
    return(
        <div className="hero flex flex-col items-start justify-center pl-20 h-screen w-screen text-white">
        <h1 className="text-2xl  pb-6">Safety care for your family</h1>
        <p className="text-4xl font-bold  pb-2">Elderly at Home</p>
        <p className="text-2xl">The Premier Program For Wellness & Regenrative Medicine</p>

        <div className="px-6 py-6 ">
        <button className=" bg-rose-300 my-auto mx-auto text-2xl">Our services</button>
        <button className=" opacity-50 bg-black my-auto mx-auto text-2xl ml-10">About Us</button>
        </div>
      </div>
    )
}

export default Hero;