import Image from "next/image";
import React from "react";
import { FaStar, FaPlus } from "react-icons/fa";
import proImg1 from "../../../public/assert/img/product/pro_1.png";
import proImg2 from "../../../public/assert/img/product/pro_2.png";
import proImg3 from "../../../public/assert/img/product/pro_3.png";
import proImg4 from "../../../public/assert/img/product/pro_4.png";
import proImg5 from "../../../public/assert/img/product/pro_5.png";
import proImg6 from "../../../public/assert/img/product/pro_6.png";
import proImg7 from "../../../public/assert/img/product/pro_7.png";
import proImg8 from "../../../public/assert/img/product/pro_8.png";
import ProductSingle from "../Single/ProductSingle";

const FeatureSection = ({ productItems }: { productItems: Product[] }) => {
  return (
    <div className="bg-feature-bg pb-10">
      <div className="container m-auto py-10 md:py-20 lg:py-20 px-5 md:px-0 lg:px-0">
        <h2 className="text-2xl">Home Kitchen</h2>
        <div className="mt-5">
          <ul className="flex">
            <li className="border px-3 lg:px-10 md:px-10 py-2 cursor-pointer text-base font-semibold rounded-l-lg border-filterBorder bg-btn-bg">
              All
            </li>
            <li className="border-y px-3 md:px-10 lg:px-10 py-2 cursor-pointer text-base font-normal text-searchText border-filterBorder ">
              Button
            </li>
            <li className="border-l border-y px-3 md:px-10 lg:px-10 py-2 cursor-pointer text-base font-normal text-searchText border-filterBorder">
              Free delivery
            </li>
            <li className="border-l border-y px-3 md:px-10 lg:px-10 py-2 cursor-pointer text-base font-normal text-searchText border-filterBorder">
              New
            </li>
            <li className="border px-3 md:px-10 lg:px-10 py-2 cursor-pointer text-base rounded-r-lg font-normal text-searchText border-filterBorder">
              Coming
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-base text-searchText rounded-lg block py-3 pr-16 pl-2"
          >
            <option selected>Filters</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-10">
          {productItems?.map((product, index) => (
            <ProductSingle key={index} product={product} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="flex items-center border border-filterBorder py-2 pl-5 pr-10 bg-white rounded-lg text-searchText ">
          <span className="mr-2 text-lg">+</span>
          Lode More...
        </button>
      </div>
    </div>
  );
};

export default FeatureSection;
