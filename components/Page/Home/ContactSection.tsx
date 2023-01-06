import React from "react";
import contactImg from "../../../public/assert/img/contact-img.png";
import Image from "next/image";
const ContactSection = () => {
  return (
    <div className="py-10 md:py-20 lg:py-20 px-5 md:px-0 lg:px-0 bg-feature-bg">
      <div className="container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="mb-10">
              <h2 className="text-2xl text-black mb-3 font-semibold">
                Do you have a question <br></br> or want to become a seller?
              </h2>
              <p className="text-xs text-black">
                Fill this form and our manager will contact you next 48 hours.
              </p>
            </div>
            <form>
              <div className="flex justify-between space-x-10 mb-10">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="rounded-lg bg-white w-full text-searchText block shadow-sm py-3 px-5"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="block bg-white rounded-lg text-searchText shadow-sm w-full py-3 px-5"
                  />
                </div>
              </div>
              <div className="w-full">
                <textarea
                  rows={10}
                  placeholder="Your message"
                  className="w-full bg-white shadow-sm p-5 text-searchText rounded-lg"
                />
              </div>
              <div className="mt-5 md:mt-10 lg:mt-10">
                <button
                  type="submit"
                  className="rounded-lg font-semibold text-white bg-btn-bg py-3 px-5 "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="lg:flex hidden md:flex items-center justify-center">
            <Image src={contactImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
