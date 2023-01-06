import React from "react";
import footerLogo from "../../public/assert/img/footer-logo.png";
import Image from "next/image";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-footer-bg py-5 md:py-10 lg:py-10 px-5 md:px-0 lg:px-0">
      <div className="container m-auto">
        <div className="grid grid-cols-8 gap-2 md:gap-5 lg:gap-5 py-5 border-b">
          <div className="col-span-1 flex items-center cursor-pointer">
            <Image src={footerLogo} alt="Logo Name" />
          </div>
          <div className="col-span-6 flex items-center">
            <div className="flex text-white items-center justify-between mx-auto">
              <ul className="flex mr-0 md:mr-6 lg:mr-6 text-base md:text-lg lg:text-lg font-normal cursor-pointer items-center space-x-2 md:space-x-8 lg:space-x-8">
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex text-white items-center justify-end">
              <ul className="flex items-center font-normal space-x-2 md:space-x-8 lg:space-x-8 cursor-pointer">
                <li>
                  <FaFacebookSquare className="text-xl lg:text-3xl md:text-3xl" />
                </li>
                <li>
                  <FaInstagramSquare className="text-xl md:text-3xl lg:text-3xl" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-white mt-5">
          <p>
            Design & Development by{" "}
            <a target="_blank" href="https://www.tobibur.me" rel="noreferrer">
              Tobibur Rohman
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
