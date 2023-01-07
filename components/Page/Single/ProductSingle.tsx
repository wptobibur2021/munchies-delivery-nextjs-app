import Image from "next/image";
import React from "react";
import { FaStar, FaPlus } from "react-icons/fa";
import proImg2 from "../../../public/assert/img/product/pro_2.png";
const ProductSingle = ({ product }: { product: Product }) => {
  const { name, image, price } = product;
  console.log("product: ", product);
  return (
    <div className="rounded-lg shadow-lg bg-white">
      <div>
        <Image className="w-full" src={proImg2} alt="" />
      </div>
      <div className="p-3">
        <div className="flex justify-between mb-5">
          <h4 className="text-base font-semibold">{name}</h4>
          <h4 className="text-base font-semibold">${price}</h4>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-between space-x-4">
            <div className="flex justify-between items-center text-black bg-feature-bg py-1 px-2 rounded">
              <FaStar className="mr-1" />
              <p>4.7</p>
            </div>
            <div className="bg-feature-bg text-black p-1 px-2 rounded">
              <p>50-79 min</p>
            </div>
          </div>
          <div className="bg-btn-bg text-white p-1 rounded-lg">
            <FaPlus className="cursor-pointer text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSingle;
