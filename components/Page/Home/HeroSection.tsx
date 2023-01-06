import Image from "next/image";
import React from "react";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import logoImg from "../../../public/assert/img/logo.png";
import heroImg from "../../../public/assert/img/hero-img.png";
const HeroSection = () => {
  return (
    <div className="bg-hero-section-bg">
      <div className="container m-auto">
        <div className="grid grid-cols-8 gap-5 py-5">
          <div className="col-span-1 cursor-pointer">
            <Image src={logoImg} alt="Logo Name" />
          </div>
          <div className="col-span-6 flex items-center">
            <div className="flex text-white items-center justify-between mx-auto">
              <ul className="flex flex-row mr-6 text-lg font-normal cursor-pointer items-center space-x-8">
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex text-white items-center justify-center mt-6">
              <ul className="flex flex-row mr-6 text-lg font-normal space-x-8 cursor-pointer">
                <li>
                  <FaSearch />
                </li>
                <li>
                  <FaShoppingBag />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 py-20 px-10">
          <div>
            <div className="text-white">
              <h1 className="text-7xl leading-normal">
                Authentic Home food in UK
              </h1>
              <p className="text-base mt-4">
                What2Eat is a courier service in which authentic home cook
                <br></br> food is delivered to a customer.
              </p>
            </div>
            <div className="mt-10 w-80">
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
          <div>
            <Image className="w-full" src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
