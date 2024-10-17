import React from "react";
import { BsDot } from "react-icons/bs";
import GiftIcon from "../assets/gifticon.png";

interface ProductCardProps {
  pname: string;
  image: string;
  price: number;
  product: string;
  size: string; 
}

const ProductCard: React.FC<ProductCardProps> = ({ pname, image, price, product, size }) => {
  return (
    <div className="md:w-72 w-44 h-auto shadow-lg rounded-xl p-2 flex flex-col items-start justify-between gap-3 hover:shadow-2xl transition-shadow">
      <div className="w-full h-80 rounded-2xl">
        <img src={image} alt={`${pname} image`} className="w-full h-full object-cover rounded-2xl" />
      </div>
      <div className="p-2 flex flex-col gap-1">
        <p className="font-bold text-slate-700">{pname}</p>
        <div className="flex md:flex-row flex-col gap-1 md:items-center items-start justify-center text-slate-500">
          <p className="text-sm">Product: {product}</p>
          <BsDot className="hidden md:block"/>
          <p className="text-sm">Size: {size}</p>
        </div>
        <p className="font-bold text-sm text-slate-700">{price}</p>
      </div>
      <div className="flex items-center justify-center gap-2 bg-[#FCEED5] w-full p-2 rounded-lg mb-1">
        <img src={GiftIcon} alt="" />
        <p className="font-semibold text-[#003459]">Free Toy & Free Shaker</p>
      </div>
    </div>
  );
};

export default ProductCard;
