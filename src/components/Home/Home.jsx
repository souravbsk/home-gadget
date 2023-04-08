import React from "react";
import heroImg from "../../assets/hero.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-gray-200">
        <div className="max-w-full md:w-10/12 mx-auto px-5 pt-5 md:pt-16 pb-24 lg:pb-56 flex flex-col gap-4 items-center">
          <h1
            className="text-xl md:text-2xl animate-pulse text-center mx-auto w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl 
        animate-text bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent font-black
        "
          >
            Welcome To HeroGadget
          </h1>
          <p className="md:w-6/12  text-center md:text-xl mx-auto">
            Best E-commerce platform for buying high quality Smart Home
            Appliances at extremely affordable Price.
          </p>
          <div  className="text-center">
            <Link to="/shop">
              <button className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200">
                Shop Now
              </button>
            </Link>
            <Link to="#">
              <button className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full  text-gray-700 hover:bg-cyan-400 hover:border-transparent border-2 border-cyan-200">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img
          className="w-5/6 mx-auto mb-12 -mt-12 lg:-mt-40 rounded-lg shadow-md bg-gray-500"
          src={heroImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
