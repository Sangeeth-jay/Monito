/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMenu, IoClose } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    if (location.pathname === "/") {
      setBgColor("#FFE7BA");
    } else {
      setBgColor("transparent");
    }
  }, [location]);

  return (
    <>
      <nav style={{ backgroundColor: bgColor }} className="p-4">
        <div className="max-w-7xl mx-auto flex gap-16 items-center md:justify-center justify-between">
          {/* hambrger btn   */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <IoClose className="text-3xl text-[#003459]" />
              ) : (
                <IoMenu className="text-3xl text-[#003459]" />
              )}
            </button>
          </div>

          <img src={Logo} alt="" className="md:w-fit w-24 z-10" />
          <div className="hidden md:flex space-x-8 items-center z-10">
            <a href="/" className="text-[#003459] text-lg font-semibold">
              Home
            </a>
            <a
              href="/category"
              className="text-[#003459] text-lg font-semibold"
            >
              Category
            </a>
            <a href="/about" className="text-[#003459] text-lg font-semibold">
              About
            </a>
            <a href="/contact" className="text-[#003459] text-lg font-semibold">
              Contact
            </a>
          </div>
          {/* Search Bar */}
          <div className="md:px-4 md:py-2 p-2  rounded-full border focus:outline-none flex items-center gap-1 md:bg-white">
            <CiSearch className="text-gray-800 text-2xl" />
            <input
              type="text"
              placeholder="Search something here!"
              className="w-full bg-transparent focus:outline-none hidden md:block"
            />
          </div>
          <button className="bg-[#003459] text-white px-6 py-2 rounded-full hidden md:block">
            Join the community
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
            <a href="/" className="text-[#003459] text-lg font-semibold">
              Home
            </a>
            <a
              href="/category"
              className="text-[#003459] text-lg font-semibold"
            >
              Category
            </a>
            <a href="/about" className="text-[#003459] text-lg font-semibold">
              About
            </a>
            <a href="/contact" className="text-[#003459] text-lg font-semibold">
              Contact
            </a>
            <button className="bg-[#003459] text-white px-6 py-2 rounded-full w-fit ">
              Join the community
            </button>
          </div>
        )}
        <div className="w-[200px] h-[150px] md:w-[250px] md:h-[200px] bg-[#F7DBA7] md:rounded-[100px] rounded-[50px] rotate-12 flex justify-center items-center absolute -top-20 md:-top-28 left-24 md:left-36 z-0"></div>
      </nav>
    </>
  );
};

export default NavBar;
