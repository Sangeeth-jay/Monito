import React from "react";
import HeroImg from "../assets/petwomen.png";
import { IoPlayCircleOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-[#FCEED5] to-[#FFE7BA]">
        <div className="p-4 flex flex-col md:flex-row items-center justify-center gap-16 h-screen md:px-32 py-16">
          
          {/* Left Side: Text Content */}
          <div className="md:w-1/3 flex flex-col gap-4">
            <div>
              <h1 className="text-5xl font-bold text-[#003459]">
                One More Friend
              </h1>
              <h1 className="text-4xl font-semibold text-[#003459]">
                Thousand More Fun!
              </h1>
            </div>
            <p className="text-[#003459]">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <div className="flex gap-4">
              <button className="bg-transparent border border-[#003459] text-[#003459] font-semibold px-4 py-2 rounded-full flex gap-1 w-fit">
                View Intro
                <IoPlayCircleOutline className="text-2xl" />
              </button>
              <button className="bg-[#003459] text-white font-semibold px-4 py-2 rounded-full flex gap-1">
                Explore Now
              </button>
            </div>
          </div>

          {/* Right Side: Image and Background Shapes */}
          <div className="md:w-1/2">
            <div className="relative px-10">
              <div className="md:w-[400px] md:h-[400px] bg-[#003459] rounded-[50px] top-4 -left-4 rotate-3 absolute"></div>
              <div className="md:w-[550px] md:h-[550px] bg-[#F7DBA7] rounded-[100px] rotate-12 flex justify-center items-center">
                <img 
                  src={HeroImg} 
                  alt="Woman holding pet" 
                  className="w-full md:w-[90%] object-contain scale-110 md:scale-125 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
