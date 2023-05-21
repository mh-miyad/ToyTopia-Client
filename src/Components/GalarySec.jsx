import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const GalarySec = () => {
  return (
    <div className="container mx-auto ">
      <div className="text-lg md:text-4xl text-center font-bold shadow-lg my-5 p-10 uppercase hover:bg-pink-400 hover:text-white rounded-xl text-gray-700">
        {" "}
        Our Gallery Section from Instagram
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div data-aos="fade-down-left">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/Gn17nsf/Spider-Strike.jpg"
            alt=""
          />
        </div>
        <div data-aos="fade-down-right">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/yqhKMpS/Soundwave-Communications-Specialist.jpg"
            alt=""
          />
        </div>
        <div data-aos="fade-down-left">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/9q2Ly7W/Guardians-of-the-Galaxy.jpg"
            alt=""
          />
        </div>
        <div data-aos="fade-down-right">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/dpYYc4Y/Captain-Starforce.jpg"
            alt=""
          />
        </div>
        <div data-aos="fade-down-left">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/1TDxCG4/avengers-1.jpg"
            alt=""
          />
        </div>
        <div data-aos="fade-down-right">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/rsXN4by/Black-Panther-Vibranium-Warrior.jpg"
            alt=""
          />
        </div>
        <div data-aos="fade-down-left">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/chf7Qk3/Bumblebee-Guardian-of-Earth.jpg"
            alt=""
          />
        </div>
        <div data-aos="fade-down-right">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/M1KDZw6/Thor-Thunderstrike.jpg"
            alt=""
          />
        </div>
        <div data-aos="fade-down-right">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/M1KDZw6/Thor-Thunderstrike.jpg"
            alt=""
          />
        </div>
       
      
      </div>
    </div>
  );
};

export default GalarySec;
