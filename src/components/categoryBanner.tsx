import { IoPlayCircleOutline } from "react-icons/io5";
import puppyImg from "../assets/puppyimg.png";

const CategoryBanner = () => {
  return (
    <>
        <div className="relative flex md:flex-row flex-col items-center md:justify-end justify-end">
          <div className=" w-full h-[50vh] md:h-80 bg-[#F6E7C1] rounded-3xl flex ">
            <img src={puppyImg} alt="" className="z-10 hidden md:block" />
            <div className="flex flex-col gap-2 py-10 px-4 text-[#003459] md:hidden">
              {/* mobile view */}
              <h1 className="text-3xl font-bold">One More Friend</h1>
              <h1 className="text-2xl font-semibold">Thousand More Fun!</h1>
              <p className="">
                Having a pet means you have more joy, a new friend, a happy
                person who will always be with you to have fun. We have 200+
                different pets that can meet your needs!
              </p>
              <div className="flex gap-4 justify-center">
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
          <div className="absolute md:w-6/12 w-full md:p-10 md:h-80 h-[10vh] bg-[#003459] rounded-tl-[70%] rounded-r-3xl flex md:flex-col flex-row md:items-end md:justify-center md:gap-2">
            <div className="flex flex-col gap-2 text-right hidden md:block">
              <h1 className="text-5xl font-bold text-white">One More Friend</h1>
              <h1 className="text-4xl font-semibold text-white">
                Thousand More Fun!
              </h1>
              <p className="text-white text-right">
                Having a pet means you have more joy, a new friend, a happy
                person who will always be with you to have fun. We have 200+
                different pets that can meet your needs!
              </p>
              <div className="flex gap-4 justify-end mt-2">
                <button className="bg-transparent border border-white text-white font-semibold px-4 py-2 rounded-full flex gap-1 w-fit">
                  View Intro
                  <IoPlayCircleOutline className="text-2xl" />
                </button>
                <button className="bg-white text-[#003459] font-semibold px-4 py-2 rounded-full flex gap-1">
                  Explore Now
                </button>
              </div>
            </div>
            {/* mobile view */}
            <img
              src={puppyImg}
              alt=""
              className="z-10 md:hidden w-full h-fit relative -top-20"
            />
          </div>
        </div>
    </>
  )
}

export default CategoryBanner