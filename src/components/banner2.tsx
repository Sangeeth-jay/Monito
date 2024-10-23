import { IoPlayCircleOutline } from "react-icons/io5";
import Img1 from "../assets/hands.png";
import { FaPaw } from "react-icons/fa";
const Banner2 = () => {
  return (
    <>
      <section className="md:px-32 px-4 my-4">
        <div className="bg-[#FFB775] w-full md:h-80 h-[70vh] rounded-3xl flex md:flex-row flex-col justify-between md:overflow-hidden">
          <div className="bg-[#FCEED5] md:w-6/12 w-full md:h-80 h-3/5 md:rounded-br-[80%] rounded-br-[40%]  rounded-l-3xl">
            <div className=" flex flex-col h-full items-center justify-center md:items-start gap-2 p-4 md:p-10">
              <h1 className="md:text-5xl text-4xl font-bold text-[#003459] flex gap-2">
                Adoption <FaPaw/>
              </h1>
              <h1 className="md:text-4xl text-3xl font-semibold md:text-right text-center text-[#003459]">
                We need help. so do they.
              </h1>
              <p className="text-[#003459] md:text-left text-center w-3/4">
                Adopt a pet and give it a home, it will be love you back
                unconditionally.
              </p>
              <div className="flex flex-row-reverse gap-4 justify-end mt-2">
                <button className="bg-transparent border border-[#003459] text-[#003459] font-semibold px-4 py-2 rounded-full flex gap-1 w-fit">
                  View Intro
                  <IoPlayCircleOutline className="text-2xl" />
                </button>
                <button className="bg-[#003459] text-white font-semibold px-4 py-2 rounded-full flex gap-1">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
          <div className="relative bg-[#FFE7BA] md:w-2/5 w-full md:h-80 h-60 rounded-tl-[100%] rounded-r-3xl ">
            <img
              src={Img1}
              alt=""
              className="absolute top-10 md:rotate-45 md:w-fit w-full md:h-80 h-60 object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner2;
