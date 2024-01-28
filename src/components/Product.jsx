import React, { useContext } from "react";
//import links
import { Link } from "react-router-dom";
//import Icons
import { BsEyeFill, BsPlus } from "react-icons/bs";

const Product = ({ product }) => {
  console.log(product);
  //destructure product
  const { id, image, category, title, price, description } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image  */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={image}
              alt={title}
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
            />
          </div>
        </div>
        {/* Button  */}
        <div className="absolute top-6 -right-11 group-hover:right-3  p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button>
            <div className="flex justify-center items-center text-white bg-red-500 w-8 h-8">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-8 h-8 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* Categories, title & price */}
      <div>
        <div className="text-sm capitalize text-gray-400">{category}</div>
        <Link
        to={`/product/${id}`}
        >
        <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
