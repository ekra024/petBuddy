import React, { useEffect } from "react";
import bannerImage from "/sidebanner.jpg";
import overlayImage from "/logo.jpg";
import sideBannerImage from "/pet12.avif";
import { FaStar } from "react-icons/fa";
import person1 from "/person2.jpeg";
import person2 from "/person3.jpeg";
import person3 from "/peerson7.jpg";
import person4 from "/person9.jpeg";
import { GoArrowRight } from "react-icons/go";
import { MdOutlinePets } from "react-icons/md";
import Aos from "aos";

const Banner = () => {
  useEffect(() => {
    Aos.init({
      duration: 200,
      once: false,
      offset: 120,
    });
  }, []);
  return (
    <div className="bg-purple-50 pt-5">
      <div className="w-11/12 mx-auto md:flex gap-8 relative">
        <div data-aos="fade-right" className="w-full md:pl-20 max-w-4xl px-10">
          <div className="h-[500px] relative overflow-hidden rounded-full md:mb-0 mb-10">
            <img
              src={bannerImage}
              className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 rounded-full"
            />
            <img src={bannerImage} className="relative mx-auto h-full object-contain" />
          </div>

          <div className="rounded-full w-50 absolute lg:top-1/7 md:top-1/7 md:left-3/4 top-1/10 right-1/5 ">
            <img
              className="rounded-full w-40 hidden md:flex"
              src={overlayImage}
              alt=""
            />
          </div>
          <div className="absolute md:bottom-5 md:left-16 lg:bottom-10">
            <div className="avatar-group w-80 -space-x-6 border border-gray-400 py-1 px-2 relative  rounded-4xl bg-gray-50 hidden  md:flex">
              <div className="avatar">
                <div className="w-12">
                  <img src={person1} />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src={person2} />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src={person3} />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src={person4} />
                </div>
              </div>
              <div className="flex justify-center mt-3 ml-8 text-sm font-semibold text-gray-700">
                <FaStar className="inline  text-xl text-yellow-500" />
                <FaStar className="inline  text-xl text-yellow-500" />
                <FaStar className="inline  text-xl text-yellow-500" />
                <FaStar className="inline  text-xl text-yellow-500" />
                <FaStar className="inline  text-xl text-yellow-500" />
              </div>
              <span className="ml-2 text-gray-800 font-semibold absolute bottom-0 left-40 ">
                5.0 (25k Reviews)
              </span>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="lg:block hidden ml-20 my-10 mb-30">
          <div className="flex items-center">
            <h2 className="text-l text-[#894B8D] font-semibold my-3">
              WE LOVE OUR JOB!
            </h2>
            <MdOutlinePets className="inline text-xl text-[#894B8D] ml-2 mb-2" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-[#002169]">
            Adopt Pets And Save Their Lives
          </h1>
          <p className="plus text-[#445374]">
            We will work with you to develop individualised care plans including
            management chronic diseases. We areommit ted to being the network
            providing healthcare centered care that inspires.
          </p>
          <button className="border my-6  bg-[#894B8D]  text-white font-semibold p-4 px-8 text-[18px] rounded-4xl">
            Contact With Us <GoArrowRight className="inline ml-2 text-2xl " />
          </button>
        </div>
        <div
          data-aos="fade-left"
          className="w-full md:ml-30 lg:ml-5 flex items-center justify-center rounded-4xl pl-4"
        >
          <img
            className="rounded-4xl object-cover "
            src={sideBannerImage}
            alt=""
          />
        </div>
      </div>
      <div data-aos="fade-up" className="text-left lg:hidden w-11/12 mx-auto">
        <div className="flex items-center mt-5">
          <h2 className="text-l text-[#894B8D] font-semibold my-3">
            WE LOVE OUR JOB!
          </h2>
          <MdOutlinePets className="inline text-xl text-[#894B8D] ml-2 mb-2" />
        </div>

        <h1 className="text-4xl font-bold mb-4 text-[#002169]">
          Adopt Pets And Save Their Lives
        </h1>
        <p className="plus text-[#445374]">
          We will work with you to develop individualised care plans including
          management chronic diseases. We areommit ted to being the network
          providing healthcare centered care that inspires.
        </p>
        <div>
          <button className="border my-6  bg-[#894B8D]  text-white font-semibold p-4 px-8 text-[18px] rounded-4xl">
            Contact With Us <GoArrowRight className="inline ml-2 text-2xl " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
