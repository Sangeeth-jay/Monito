/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/hero";
import PetCard from "../components/petCard";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
// import Banner from "../components/banner";
import ProductCard from "../components/productCard";
import Sheba from "../assets/Sheba.png";
import Whicks from "../assets/Whiskas.png";
import Backers from "../assets/Bakers.png";
import Felix from "../assets/felix.png";
import GoodBoy from "../assets/GoodBoy.png";
import Butchers from "../assets/Butchers.png";
import Pedigree from "../assets/Pedigree.png";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";


const Home = () => {
  const navigate = useNavigate();

  interface Product {
    name: string;
    image: string;
    price: number;
    product: string;
    size: string;
  }

  interface Pet {
    breed: string;
    image: string;
    price: number;
    gene: string;
    age: number;
  }

  const [pet, setPet] = useState<Pet[]>([]);
  const [products, setProducts] = useState<Product[]>([]);



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

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://monitor-backend-rust.vercel.app/api/products"
      );
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPet();
    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <div className="md:px-32 px-4 py-16">
        <div className="flex justify-between">
          <div>
            <h4>What's new?</h4>
            <h3 className="text-2xl font-semibold text-[#003459]">
              Take a look at some of our pets
            </h3>
          </div>
          <div>
            <button
              onClick={() => navigate("/category")}
              className="hidden md:flex bg-transparent border border-[#003459] text-[#003459] font-semibold px-4 py-2 rounded-full flex items-center justify-center gap-1"
            >
              View More
              <IoIosArrowForward className="text-lg" />
            </button>
          </div>
        </div>

        {/* Pet Card */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {pet.map((item, id) => (
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
      {/* <Banner /> */}

      {/* products */}

      <div className="md:px-32 px-4">
        <div className="flex justify-between my-10">
          <div>
            <h4>Hard to choose right products for your pets?</h4>
            <h3 className="text-2xl font-semibold text-[#003459]">
              Our Products
            </h3>
          </div>
          <div>
            <button
              onClick={() => navigate("/category")}
              className="hidden md:flex bg-transparent border border-[#003459] text-[#003459] font-semibold px-4 py-2 rounded-full flex items-center justify-center gap-1"
            >
              View More
              <IoIosArrowForward className="text-lg" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {products.map((item, id) => (
            <ProductCard
              key={id}
              pname={item.name}
              image={item.image}
              price={item.price}
              product={item.product}
              size={item.size}
            />
          ))}
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

      {/* sellars */}

      <div className="md:px-32 px-4 hidden md:block">
        <div className="flex justify-between my-10">
          <div className="flex items-center gap-2">
            <h4>Proud to be part of</h4>
            <h3 className="text-2xl font-semibold text-[#003459]">
              Useful pet knowledge
            </h3>
          </div>
          <div>
            <button
              onClick={() => navigate("/category")}
              className="hidden md:flex bg-transparent border border-[#003459] text-[#003459] font-semibold px-4 py-2 rounded-full flex items-center justify-center gap-1"
            >
              View More
              <IoIosArrowForward className="text-lg" />
            </button>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-around">
          <img src={Sheba} alt="" className="w-20" />
          <img src={Whicks} alt="" className="w-20" />
          <img src={Backers} alt="" className="w-20" />
          <img src={Felix} alt="" className="w-20" />
          <img src={GoodBoy} alt="" className="w-20" />
          <img src={Butchers} alt="" className="w-20" />
          <img src={Pedigree} alt="" className="w-20" />
        </div>
      </div>

      {/* use full topics */}
      <div className="md:px-32 px-4 my-10">
        <div className="flex justify-between my-10">
          <div className="">
            <h4>You already know ?</h4>
            <h3 className="text-2xl font-semibold text-[#003459]">
              Useful pet knowledge
            </h3>
          </div>
          <div>
            <button
              onClick={() => navigate("/category")}
              className="hidden md:flex bg-transparent border border-[#003459] text-[#003459] font-semibold px-4 py-2 rounded-full flex items-center justify-center gap-1"
            >
              View More
              <IoIosArrowForward className="text-lg" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="md:w-96 w-full h-auto shadow-lg rounded-xl p-2 flex flex-col items-start justify-between gap-3 hover:shadow-2xl transition-shadow">
            <div className="w-full h-80 rounded-2xl">
              <img
                src={Img1}
                alt={`pname image`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <p className="bg-blue-400 px-2 py-1 rounded-full text-sm font-semibold text-white">
              Pet Knowledge
            </p>
            <div className="p-2 flex flex-col gap-1">
              <p className="font-bold text-slate-700">
                What is a Pomeranian? How to Identify Pomeranian Dogs
              </p>
              <p className="text-sm text-slate-700">
                The Pomeranian, also known as the Pomeranian (Pom dog), is
                always in the top of the cutest pets. Not only that, the small,
                lovely, smart, friendly, and skillful circus dog breed.
              </p>
            </div>
          </div>
          <div className="md:w-96 w-full h-auto shadow-lg rounded-xl p-2 flex flex-col items-start justify-between gap-3 hover:shadow-2xl transition-shadow">
            <div className="w-full h-80 rounded-2xl">
              <img
                src={Img2}
                alt={`pname image`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <p className="bg-blue-400 px-2 py-1 rounded-full text-sm font-semibold text-white">
              Pet Knowledge
            </p>
            <div className="p-2 flex flex-col gap-1">
              <p className="font-bold text-slate-700">
                Dog Diet You Need To Know
              </p>
              <p className="text-sm text-slate-700">
                Dividing a dog's diet may seem simple at first, but there are
                some rules you should know so that your dog can easily absorb
                the nutrients in the diet. For those who are just starting to
                raise dogs, especially newborn puppies with relatively weak
                resistance.
              </p>
            </div>
          </div>
          <div className="md:w-96 w-full h-auto shadow-lg rounded-xl p-2 flex flex-col items-start justify-between gap-3 hover:shadow-2xl transition-shadow">
            <div className="w-full h-80 rounded-2xl">
              <img
                src={Img3}
                alt={`pname image`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <p className="bg-blue-400 px-2 py-1 rounded-full text-sm font-semibold text-white">
              Pet Knowledge
            </p>
            <div className="p-2 flex flex-col gap-1">
              <p className="font-bold text-slate-700">
                Why Dogs Bite and Destroy Furniture and How to Prevent It
                Effectively
              </p>
              <p className="text-sm text-slate-700">
                Dog bites are common during development. However, no one wants
                to see their furniture or important items being bitten by a dog.
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
