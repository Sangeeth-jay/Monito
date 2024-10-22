// import React from "react";
import Img from "../assets/bannerimg.png";
import { IoPlayCircleOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <>
      <div className="md:px-32 px-4">
        <div className="bg-[#003459] w-full md:h-80 h-[70vh] rounded-3xl flex md:flex-row flex-col-reverse justify-between">
          <div className="relative bg-[#002A48] md:w-2/5 md:h-80 h-40 md:rounded-tr-[100%] rounded-tr-[100%] md:rounded-l-3xl rounded-b-3xl">
            <img
              src={Img}
              alt=""
              className="absolute md:top-0 -top-20 md:left-1/4 left-20 w-fit md:h-80 h-60 object-cover"
            />
          </div>
          <div className="bg-[#FCEED5] md:w-3/5 md:h-80 h-3/5 md:rounded-bl-[100%] rounded-bl-[20%] md:rounded-r-3xl rounded-t-3xl">
            {/* <div className="flex flex-row items-center justify-center"> */}
              <div className=" flex flex-col h-full items-center justify-center md:items-end gap-2 p-4 md:p-10">
                <h1 className="md:text-5xl text-4xl font-bold text-[#003459]">
                  One More Friend
                </h1>
                <h1 className="md:text-4xl text-3xl font-semibold md:text-right text-center text-[#003459]">
                  Thousand More Fun!
                </h1>
                <p className="text-[#003459] md:text-right text-center w-3/4">
                  Having a pet means you have more joy, a new friend, a happy
                  person who will always be with you to have fun. We have 200+
                  different pets that can meet your needs!
                </p>
                <div className="flex gap-4 justify-end mt-2">
                  <button className="bg-transparent border border-[#003459] text-[#003459] font-semibold px-4 py-2 rounded-full flex gap-1 w-fit">
                    View Intro
                    <IoPlayCircleOutline className="text-2xl" />
                  </button>
                  <button className="bg-[#003459] text-white font-semibold px-4 py-2 rounded-full flex gap-1">
                    Explore Now
                  </button>
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
