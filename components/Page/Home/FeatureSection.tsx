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

const FeatureSection = () => {
  return (
    <div className="bg-feature-bg pb-10">
      <div className="container m-auto py-20">
        <h2 className="text-2xl">Home Kitchen</h2>
        <div className="mt-5">
          <ul className="flex">
            <li className="border px-10 py-2 cursor-pointer text-base font-semibold rounded-l-lg border-filterBorder bg-btn-bg">
              All
            </li>
            <li className="border-y px-10 py-2 cursor-pointer text-base font-normal text-searchText border-filterBorder ">
              Button
            </li>
            <li className="border-l border-y px-10 py-2 cursor-pointer text-base font-normal text-searchText border-filterBorder">
              Free delivery
            </li>
            <li className="border-l border-y px-10 py-2 cursor-pointer text-base font-normal text-searchText border-filterBorder">
              New
            </li>
            <li className="border px-10 py-2 cursor-pointer text-base rounded-r-lg font-normal text-searchText border-filterBorder">
              Coming
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-base text-searchText rounded-lg block py-3 pr-10 pl-2"
          >
            <option selected>Filters</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-10">
          <div className="rounded-lg shadow-lg bg-white">
            <div>
              <Image className="w-full" src={proImg2} alt="" />
            </div>
            <div className="p-3">
              <div className="flex justify-between mb-5">
                <h4 className="text-base font-normal">Home made pizza</h4>
                <h4 className="text-base font-normal">$19</h4>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between space-x-4">
                  <div className="flex justify-between items-center bg-feature-bg py-1 px-2 rounded">
                    <FaStar className="mr-1" />
                    <p>4.7</p>
                  </div>
                  <div className="bg-feature-bg p-1 px-2 rounded">
                    <p>50-79 min</p>
                  </div>
                </div>
                <div className="bg-btn-bg text-white p-2 rounded-lg">
                  <FaPlus className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow-lg bg-white">
            <div>
              <Image className="w-full" src={proImg3} alt="" />
            </div>
            <div className="p-3">
              <div className="flex justify-between mb-5">
                <h4 className="text-base font-normal">Home made pizza</h4>
                <h4 className="text-base font-normal">$19</h4>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between space-x-4">
                  <div className="flex justify-between items-center bg-feature-bg py-1 px-2 rounded">
                    <FaStar className="mr-1" />
                    <p>4.7</p>
                  </div>
                  <div className="bg-feature-bg p-1 px-2 rounded">
                    <p>50-79 min</p>
                  </div>
                </div>
                <div className="bg-btn-bg text-white p-2 rounded-lg">
                  <FaPlus />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow-lg bg-white">
            <div>
              <Image className="w-full" src={proImg4} alt="" />
            </div>
            <div className="p-3">
              <div className="flex justify-between mb-5">
                <h4 className="text-base font-normal">Home made pizza</h4>
                <h4 className="text-base font-normal">$19</h4>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between space-x-4">
                  <div className="flex justify-between items-center bg-feature-bg py-1 px-2 rounded">
                    <FaStar className="mr-1" />
                    <p>4.7</p>
                  </div>
                  <div className="bg-feature-bg p-1 px-2 rounded">
                    <p>50-79 min</p>
                  </div>
                </div>
                <div className="bg-btn-bg text-white p-2 rounded-lg">
                  <FaPlus />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow-lg bg-white">
            <div>
              <Image className="w-full" src={proImg5} alt="" />
            </div>
            <div className="p-3">
              <div className="flex justify-between mb-5">
                <h4 className="text-base font-normal">Home made pizza</h4>
                <h4 className="text-base font-normal">$19</h4>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between space-x-4">
                  <div className="flex justify-between items-center bg-feature-bg py-1 px-2 rounded">
                    <FaStar />
                    <p>4.7</p>
                  </div>
                  <div className="bg-feature-bg p-1 px-2 rounded">
                    <p>50-79 min</p>
                  </div>
                </div>
                <div className="bg-btn-bg text-white p-2 rounded-lg">
                  <FaPlus />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow-lg bg-white">
            <div>
              <Image className="w-full" src={proImg6} alt="" />
            </div>
            <div className="p-3">
              <div className="flex justify-between mb-5">
                <h4 className="text-base font-normal">Home made pizza</h4>
                <h4 className="text-base font-normal">$19</h4>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between space-x-4">
                  <div className="flex justify-between items-center bg-feature-bg py-1 px-2 rounded">
                    <FaStar />
                    <p>4.7</p>
                  </div>
                  <div className="bg-feature-bg p-1 px-2 rounded">
                    <p>50-79 min</p>
                  </div>
                </div>
                <div className="bg-btn-bg text-white p-2 rounded-lg">
                  <FaPlus />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow-lg bg-white">
            <div>
              <Image className="w-full" src={proImg7} alt="" />
            </div>
            <div className="p-3">
              <div className="flex justify-between mb-5">
                <h4 className="text-base font-normal">Home made pizza</h4>
                <h4 className="text-base font-normal">$19</h4>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between space-x-4">
                  <div className="flex justify-between items-center bg-feature-bg py-1 px-2 rounded">
                    <FaStar />
                    <p>4.7</p>
                  </div>
                  <div className="bg-feature-bg p-1 px-2 rounded">
                    <p>50-79 min</p>
                  </div>
                </div>
                <div className="bg-btn-bg text-white p-2 rounded-lg">
                  <FaPlus />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow-lg bg-white">
            <div>
              <Image className="w-full" src={proImg8} alt="" />
            </div>
            <div className="p-3">
              <div className="flex justify-between mb-5">
                <h4 className="text-base font-normal">Home made pizza</h4>
                <h4 className="text-base font-normal">$19</h4>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between space-x-4">
                  <div className="flex justify-between items-center bg-feature-bg py-1 px-2 rounded">
                    <FaStar />
                    <p>4.7</p>
                  </div>
                  <div className="bg-feature-bg p-1 px-2 rounded">
                    <p>50-79 min</p>
                  </div>
                </div>
                <div className="bg-btn-bg text-white p-2 rounded-lg">
                  <FaPlus />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow-lg bg-white">
            <div>
              <Image className="w-full" src={proImg1} alt="" />
            </div>
            <div className="p-3">
              <div className="flex justify-between mb-5">
                <h4 className="text-base font-normal">Home made pizza</h4>
                <h4 className="text-base font-normal">$19</h4>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between space-x-4">
                  <div className="flex justify-between items-center bg-feature-bg py-1 px-2 rounded">
                    <FaStar className="mr-1" />
                    <p>4.7</p>
                  </div>
                  <div className="bg-feature-bg p-1 px-2 rounded">
                    <p>50-79 min</p>
                  </div>
                </div>
                <div className="bg-btn-bg text-white p-2 rounded-lg">
                  <FaPlus />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="flex items-center border border-filterBorder py-2 px-5 bg-white rounded-lg text-searchText ">
          <span className="mr-2 text-lg">+</span>
          Lode More...
        </button>
      </div>
    </div>
  );
};

export default FeatureSection;
