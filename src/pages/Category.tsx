import axios from "axios";
import Banner from "../components/categoryBanner";
import PetCard from "../components/petCard";
import { useEffect, useState } from "react";
import { BiFilterAlt } from "react-icons/bi";

const Category = () => {
  const [pet, setPet] = useState<Pet[]>([]); // Pet type for useState

  interface Pet {
    breed: string;
    image: string;
    price: number;
    gene: string;
    age: number;
  }

  // Fetch data only once after the initial render
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
  }, []); // Empty dependency array to avoid infinite loop

  return (
    <>
      <div className="md:px-32 px-4 py-16">
        <Banner />
        <div className="flex items-start justify-between py-16 gap-4">
          {/* Filter Section */}
          <div className="w-2/12 hidden md:block">
            <h1 className="text-3xl font-semibold text-[#003459]">Filter</h1>

            {/* Gender Filter */}
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold">Gender</h1>
              <div className="flex gap-4">
                <input type="checkbox" name="male" id="male" />
                <label htmlFor="male">Male</label>
              </div>
              <div className="flex gap-4">
                <input type="checkbox" name="female" id="female" />
                <label htmlFor="female">Female</label>
              </div>
              <hr />
            </div>

            {/* Color Filter */}
            <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold">Color</h1>
              <div className="flex gap-4 items-center ">
                <input type="checkbox" name="red" id="" />
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <label htmlFor="male">Red</label>
              </div>
              <div className="flex gap-4 items-center ">
                <input type="checkbox" name="apricot" id="" />
                <div className="w-4 h-4 bg-amber-600 rounded-full"></div>
                <label htmlFor="male">Apricot</label>
              </div>
              <div className="flex gap-4 items-center ">
                <input type="checkbox" name="black" id="" />
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <label htmlFor="male">Black</label>
              </div>
              <div className="flex gap-4 items-center ">
                <input type="checkbox" name="red" id="" />
                <div className="w-4 h-4 bg-gradient-to-r from-black to-white rounded-full"></div>
                <label htmlFor="male">Black & White</label>
              </div>
              <div className="flex gap-4 items-center ">
                <input type="checkbox" name="silver" id="" />
                <div className="w-4 h-4 bg-gradient-to-br from-slate-400 to-slate-200 rounded-full"></div>
                <label htmlFor="male">Silver</label>
              </div>
              <div className="flex gap-4 items-center ">
                <input type="checkbox" name="tan" id="" />
                <div className="w-4 h-4 bg-yellow-100 rounded-full"></div>
                <label htmlFor="male">Tan</label>
              </div>
              <hr />
            </div>

            {/* Price Filter */}
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold">Price</h1>
              <div className="flex gap-4">
                <input
                  type="number"
                  name="min"
                  id="min"
                  placeholder="Min"
                  className="border px-2 py-1 rounded-lg outline-none w-1/2"
                />
                <input
                  type="number"
                  name="max"
                  id="max"
                  placeholder="Max"
                  className="border px-2 py-1 rounded-lg outline-none w-1/2"
                />
              </div>
              <hr />
            </div>

            {/* Breed Filter */}
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold">Breed</h1>
              <div className="flex gap-4">
                <input type="checkbox" name="small" id="small" />
                <label htmlFor="small">Small</label>
              </div>
              <div className="flex gap-4">
                <input type="checkbox" name="medium" id="medium" />
                <label htmlFor="medium">Medium</label>
              </div>
              <div className="flex gap-4">
                <input type="checkbox" name="large" id="large" />
                <label htmlFor="large">Large</label>
              </div>
              <hr />
            </div>
          </div>

          {/* Pet Cards Section */}
          <div className="w-full">
            <div className="flex items-center justify-between m-2 md:hidden">
              <select
                name="sort"
                id="sort"
                className="border px-4 py-1 rounded-full w-32 outline-none"
              >
                <option value="popular">Popular</option>
                <option value="newest">Newest</option>
                <option value="rating">Rating</option>
              </select>
              <button className="flex flex-row-reverse items-center justify-center gap-2">
                <h1 className="text-xl font-semibold text-[#003459]">Filter</h1>
                <BiFilterAlt className="text-3xl text-[#003459]" />
              </button>
            </div>

            <div className="flex items-center justify-between gap-2">
              <div className="flex items-end justify-center gap-2">
                <h1 className="text-3xl font-semibold text-[#003459]">Breed</h1>
                <h1 className="text-lg font-thin text-[#003459]">Result</h1>
              </div>
              <select
                name="sort"
                id="sort"
                className="border px-4 py-1 rounded-full w-32 outline-none hidden md:block"
              >
                <option value="popular">Popular</option>
                <option value="newest">Newest</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            {/* Display Pet Cards */}
            <div className="py-10 flex items-start justify-center">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                {pet.map((item, id) => (
                  <PetCard
                    key={id}
                    bread={item.breed} // Fixed typo from 'bread'
                    image={item.image}
                    price={item.price}
                    gene={item.gene}
                    age={item.age}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
