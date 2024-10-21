import React from "react";
import { BsDot } from "react-icons/bs";

interface PetCardProps {
  bread: string;
  image: string;
  price: number;
  gene: string;
  age: number; 
}

const PetCard: React.FC<PetCardProps> = ({ bread, image, price, gene, age }) => {
  return (
    <div className="md:w-72 w-44 h-80 shadow-[0px_0px_16px_5px_rgba(166,_84,_145,_0.06)] rounded-xl p-2 flex flex-col items-start justify-between gap-3 hover:shadow-xl transition-shadow cursor-pointer">
      <div className="w-full h-40 bg-slate-300 rounded-2xl">
        <img src={image} alt={`${bread} image`} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="p-2 flex flex-col gap-1">
        <p className="font-bold text-slate-700">{bread}</p>
        <div className="flex md:flex-row flex-col gap-1 md:items-center items-start justify-center  text-slate-500">
          <p className="text-sm">Gene: {gene}</p>
          <BsDot className="hidden md:block"/>
          <p className="text-sm">Age: {age}</p>
        </div>
        <p className="font-bold text-sm text-slate-700 mb-4">{price}</p>
      </div>
    </div>
  );
};

export default PetCard;
