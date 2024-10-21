import { useNavigate } from "react-router-dom";
import { BsChatLeftDots } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import PetCard from "../components/petCard";
import { useEffect, useState } from "react";
import axios from "axios";
import PetIcon1 from "../assets/lovedogicon.png";
import PetIcon2 from "../assets/peticon.png";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
  IoShareSocial,
} from "react-icons/io5";

const Product = () => {
  const navigate = useNavigate();

  interface Pet {
    breed: string;
    image: string;
    price: number;
    gene: string;
    age: number;
  }

  const [pet, setPet] = useState<Pet[]>([]);

  const fetchPet = async () => {
    try {
      const response = await axios.get(
        "https://monitor-backend-rust.vercel.app/api/pets"
      );
      setPet(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPet();
  }, []);

  return (
    <>
      <div className="md:px-32 px-4 py-16">
        <div className="flex md:flex-row flex-col justify-center gap-16 border px-4 py-6 rounded-lg">
          <div className="flex gap-4 md:w-1/2 items-start justify-center">
            <div className="flex flex-col gap-4 p-4">
              <div className="bg-slate-100 md:w-96 md:h-96 w-full h-80"></div>
              <div className="w-80 md:w-96 flex flex-row gap-4">
                <div className="bg-slate-100 w-20 h-20 rounded-lg"></div>
                <div className="bg-slate-100 w-20 h-20 rounded-lg"></div>
                <div className="bg-slate-100 w-20 h-20 rounded-lg"></div>
                <div className="bg-slate-100 w-20 h-20 rounded-lg"></div>
                <div className="bg-slate-100 w-20 h-20 rounded-lg"></div>
              </div>
              <div className="bg-[#FFE7BA] flex gap-1 items-center justify-around rounded-lg px-2 py-1">
                <img src={PetIcon1} alt="" />
                <h1 className="text-xs font-semibold text-[#003459]">
                  100% health guarantee for pets
                </h1>
                <img src={PetIcon2} alt="" />
                <h1 className="text-xs font-semibold text-[#003459]">
                  100% guarantee of pet identification
                </h1>
              </div>
              <div className="flex flex-row items-center gap-2">
                <IoShareSocial className="text-[#003459] text-xl font-semibold" />
                <h1 className="text-[#003459] text-xl font-semibold">Share</h1>
                <ul className="flex gap-4 text-slate-300">
                  <li>
                    <IoLogoFacebook />
                  </li>
                  <li>
                    <IoLogoInstagram />
                  </li>
                  <li>
                    <IoLogoTwitter />
                  </li>
                  <li>
                    <IoLogoYoutube />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:w-3/5">
            <h1 className="text-3xl text-[#091c2a] font-bold">Product Name</h1>
            <h1 className="text-2xl text-[#003459] font-semibold">Price</h1>
            <div className="flex gap-4">
              <button className="bg-[#003459] text-white font-semibold px-3 py-1 rounded-full">
                Contact Us
              </button>
              <button className="flex gap-2 items-center justify-center bg-transparent border-2 border-[#003459] text-[#003459] font-semibold px-3 py-1 rounded-full">
                <BsChatLeftDots className="text-xl" />
                Chat with Monito
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-1 text-slate-500">
                <label htmlFor="" className="w-1/2">
                  SKU
                </label>
                <label htmlFor="" className="w-1/2">
                  #11111
                </label>
              </div>
              <hr />
              <div className="flex flex-row gap-1 text-slate-500">
                <label htmlFor="" className="w-1/2">
                  Gender
                </label>
                <label htmlFor="" className="w-1/2">
                  Male
                </label>
              </div>
              <hr />
              <div className="flex flex-row gap-1 text-slate-500">
                <label htmlFor="" className="w-1/2">
                  Age
                </label>
                <label htmlFor="" className="w-1/2">
                  2 years
                </label>
              </div>
              <hr />
              <div className="flex flex-row gap-1 text-slate-500">
                <label htmlFor="" className="w-1/2">
                  Size
                </label>
                <label htmlFor="" className="w-1/2">
                  Small
                </label>
              </div>
              <hr />
              <div className="flex flex-row gap-1 text-slate-500">
                <label htmlFor="" className="w-1/2">
                  Color
                </label>
                <label htmlFor="" className="w-1/2">
                  Red
                </label>
              </div>
              <hr />
              <div className="flex flex-row gap-1 text-slate-500">
                <label htmlFor="" className="w-1/2">
                  Vacinated
                </label>
                <label htmlFor="" className="w-1/2">
                  Yes
                </label>
              </div>
              <hr />
              <div className="flex flex-row gap-1 text-slate-500">
                <label htmlFor="" className="w-1/2">
                  Dewormed
                </label>
                <label htmlFor="" className="w-1/2">
                  Yes
                </label>
              </div>
              <hr />
              <div className="flex flex-row gap-1 text-slate-500">
                <label htmlFor="" className="w-1/2">
                  Cert
                </label>
                <label htmlFor="" className="w-1/2">
                  Yes
                </label>
              </div>
              <hr />
              <div className="flex flex-row gap-1 text-slate-500">
                <label htmlFor="" className="w-1/2">
                  Microchip
                </label>
                <label htmlFor="" className="w-1/2">
                  Yes
                </label>
              </div>
              <hr />
              <div className="flex flex-row gap-1 text-slate-500">
                <label htmlFor="" className="w-1/2">
                  Location
                </label>
                <label htmlFor="" className="w-1/2">
                  Vietnam
                </label>
              </div>
              <hr />
              <div className="flex flex-row gap-1 text-slate-500">
                <label htmlFor="" className="w-1/2">
                  Published Date
                </label>
                <label htmlFor="" className="w-1/2">
                  #11111
                </label>
              </div>
              <hr />
              <div className="flex flex-row gap-1 text-slate-500">
                <label htmlFor="" className="w-1/2">
                  Additional Information
                </label>
                <label htmlFor="" className="w-1/2">
                  : Pure breed Shih Tzu. Good body structure. With MKA cert and
                  Microchip. Father from champion lineage.
                </label>
              </div>
              <hr />
            </div>
          </div>
        </div>
        {/* Pet Card */}

        <div>
          <h4>What's new?</h4>
          <h3 className="text-2xl font-semibold text-[#003459]">
            Take a look at some of our pets
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {pet.slice(0, 4).map((item, id) => (
            <PetCard
              key={id}
              bread={item.breed}
              image={item.image}
              price={item.price}
              gene={item.gene}
              age={item.age}
            />
          ))}
        </div>

        {/* View More Button */}

        <div className="flex justify-center  my-6">
          <button
            onClick={() => navigate("/category")}
            className=" w-fit bg-transparent border border-[#003459] text-[#003459] font-semibold px-4 py-2 rounded-full flex items-center justify-center gap-1"
          >
            View More
            <IoIosArrowForward className="text-lg" />
          </button>
        </div>
        <div className="flex justify-center  my-6">
          <button
            onClick={() => navigate("/category")}
            className="md:hidden w-full bg-transparent border border-[#003459] text-[#003459] font-semibold px-4 py-2 rounded-full flex items-center justify-center gap-1"
          >
            View More
            <IoIosArrowForward className="text-lg" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
