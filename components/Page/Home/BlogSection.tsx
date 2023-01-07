import Image from "next/image";
import React from "react";
import blogimg1 from "../../../public/assert/img/blog/blog_1.png";
import blogimg2 from "../../../public/assert/img/blog/blog_2.png";
import blogimg3 from "../../../public/assert/img/blog/blog_3.png";
import blogimg4 from "../../../public/assert/img/blog/blog_4.png";
const BlogSection = () => {
  return (
    <div className="py-10 md:py-20 bg-white lg:py-20 px-5 md:px-0 lg:px-0">
      <div className="container m-auto">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold">Our Blog</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-10">
          <div className="md:col-span-1 lg:col-span-1">
            <div className="mb-5">
              <Image src={blogimg1} className="w-full" alt="" />
              <div className="p-0 md:p-5 lg:p-5 mt-5 lg:mt-0 md:mt-0">
                <h3 className="text-base text-black font-semibold mb-1 lg:mb-3 md:mb-3">
                  Most Satisfying Cake decorating Cake ideas
                </h3>
                <p className="text-sm text-black font-extralight">
                  Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh
                  mauris sed faucibus.
                </p>
              </div>
            </div>
            <div className="mb-5">
              <Image src={blogimg2} className="w-full" alt="" />
              <div className="p-0 md:p-5 lg:p-5 mt-5 lg:mt-0 md:mt-0">
                <h3 className="text-base font-semibold text-black mb-3">
                  Most Satisfying Cake decorating Cake ideas
                </h3>
                <p className="text-sm text-black font-extralight">
                  Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh
                  mauris sed faucibus.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 lg:col-span-2">
            <div className="mb-5">
              <Image src={blogimg3} className="w-full" alt="" />
              <div className="p-0 md:p-5 lg:p-5 mt-5 lg:mt-0 md:mt-0">
                <h3 className="text-base font-semibold mb-1 lg:mb-3 md:mb-3">
                  Most Satisfying Cake decorating Cake ideas
                </h3>
                <p className="text-sm font-extralight">
                  Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh
                  mauris sed faucibus is sed faucibus.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 lg:col-span-1">
            <div className="mb-5">
              <Image src={blogimg4} className="w-full" alt="" />
              <div className="p-0 md:p-5 lg:p-5 mt-5 lg:mt-0 md:mt-0">
                <h3 className="text-base font-semibold mb-1 lg:mb-3 md:mb-3">
                  Most Satisfying Cake decorating Cake ideas
                </h3>
                <p className="text-sm font-extralight">
                  Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh
                  mauris sed faucibus.
                </p>
              </div>
            </div>
            <div className="mb-5">
              <Image src={blogimg4} className="w-full" alt="" />
              <div className="p-0 md:p-5 lg:p-5 mt-5 lg:mt-0 md:mt-0">
                <h3 className="text-base font-semibold mb-1 lg:mb-3 md:mb-3">
                  Most Satisfying Cake decorating Cake ideas
                </h3>
                <p className="text-sm font-extralight">
                  Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh
                  mauris sed faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
