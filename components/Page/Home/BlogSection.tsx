import Image from "next/image";
import React from "react";
import blogimg1 from "../../../public/assert/img/blog/blog_1.png";
import blogimg2 from "../../../public/assert/img/blog/blog_2.png";
import blogimg3 from "../../../public/assert/img/blog/blog_3.png";
import blogimg4 from "../../../public/assert/img/blog/blog_4.png";
const BlogSection = () => {
  return (
    <div className="py-20">
      <div className="container m-auto">
        <div className="mb-10">
          <h2 className="text-2xl">Our Blog</h2>
        </div>
        <div className="grid grid-cols-4 gap-10">
          <div className="col-span-1">
            <div className="mb-5">
              <Image src={blogimg1} className="w-full" alt="" />
              <div className="p-5">
                <h3 className="text-base font-normal mb-3">
                  Most Satisfying Cake decorating Cake ideas
                </h3>
                <p className="text-sm font-extralight">
                  Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh
                  mauris sed faucibus.
                </p>
              </div>
            </div>
            <div className="mb-5">
              <Image src={blogimg2} className="w-full" alt="" />
              <div className="p-5">
                <h3 className="text-base font-normal mb-3">
                  Most Satisfying Cake decorating Cake ideas
                </h3>
                <p className="text-sm font-extralight">
                  Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh
                  mauris sed faucibus.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-span-2">
            <div className="mb-5">
              <Image src={blogimg3} className="w-full" alt="" />
              <div className="p-5">
                <h3 className="text-base font-normal mb-3">
                  Most Satisfying Cake decorating Cake ideas
                </h3>
                <p className="text-sm font-extralight">
                  Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh
                  mauris sed faucibus is sed faucibus.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-span-1">
            <div className="mb-5">
              <Image src={blogimg4} className="w-full" alt="" />
              <div className="p-5">
                <h3 className="text-base font-normal mb-3">
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
              <div className="p-5">
                <h3 className="text-base font-normal mb-3">
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
