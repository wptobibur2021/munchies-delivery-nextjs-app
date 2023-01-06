import Image from "next/image";
import React from "react";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import logoImg from "../../../public/assert/img/logo.png";
import heroImg from "../../../public/assert/img/hero-img.png";
const HeroSection = () => {
  return (
    <div className="bg-hero-section-bg">
      <div className="container m-auto">
        <div className="grid grid-cols-8 gap-5 py-5 px-5 lg:px-0 md:px-0">
          <div className="col-span-1 flex items-center cursor-pointer">
            <Image src={logoImg} alt="Logo Name" />
          </div>
          <div className="col-span-6 items-center md:mt-5 lg:mt-5">
            <div className="flex text-white items-center justify-center">
              <ul className="flex flex-row mr-0 md:mr-6 lg:mr-6 text-base md:text-lg lg:text-lg font-normal cursor-pointer items-center space-x-2 md:space-x-8 lg:space-x-8">
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 lg:mt-0 md:mt-0 mt-2">
            <div className="flex text-white items-center justify-center mt-0 md:mt-6 lg:mt-6">
              <ul className="flex items-center mr-0 md:mr-6 lg:mr-6 text-lg font-normal space-x-3 md:space-x-8 lg:space-x-8 cursor-pointer">
                <li>
                  <FaSearch className="text-xs lg:text-xl md:text-xl" />
                </li>
                <li>
                  <FaShoppingBag className="text-xs lg:text-2xl md:text-xl" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 md:gap-20 lg:gap-20 py-10 md:py-20 lg:py-20 px-5 md:px-10 lg:px-10">
          <div>
            <div className="text-white">
              <h1 className="text-3xl md:text-7xl text-white lg:text-7xl leading-normal">
                Authentic Home food in UK
              </h1>
              <p className="text-base mt-2 text-white md:mt-4 lg:mt-4">
                What2Eat is a courier service in which authentic home cook food
                is delivered to a customer.
              </p>
            </div>
            <div className="mt-5 lg:mt-10 md:mt-10 w-full md:w-80 lg:w-80">
              <div className="relative">
                <input
                  type="search"
                  className="block p-5 w-full text-xs text-searchText bg-white rounded-lg"
                  placeholder="Search food you love"
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-4 text-base font-semibold bg-btn-bg text-white rounded-r-lg"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="md:mt-0 lg:mt-0 mt-5">
            <Image className="w-full" src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
