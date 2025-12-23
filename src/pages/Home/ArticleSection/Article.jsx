import React, { useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import { MdOutlinePets } from "react-icons/md";
import Article1 from '/pet10.avif'
import Article2 from '/pet8.avif'
import Article3 from '/pet11.avif'
import { CiCalendarDate } from "react-icons/ci";
import { BsPersonCircle } from "react-icons/bs";
import Aos from "aos";

const Article = () => {
   useEffect(() => {
    Aos.init({
      duration: 3000,
    })
   },[])


  return (
    <div className="bg-purple-100 p-16  lg:p-20 lg:pb-40 pb-20 mt-10">
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center mt-5">
            <h2 className="text-[20px] text-[#894B8D] font-semibold my-3">
              NEWS & ARTICLES
            </h2>
            <MdOutlinePets className="inline text-xl text-[#894B8D] ml-2 mb-2" />
          </div>
          <h1 className="text-2xl md:text-5xl font-bold text-[#002169]">
            Our Recent Articles
          </h1>
        </div>
        <div>
          <button className="border my-6  bg-[#894B8D]  text-white font-semibold p-4 md:px-8 md:text-[18px] rounded-4xl">
            See All Posts <GoArrowRight className="inline ml-2 text-2xl " />
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8 mt-5">
        <div data-aos="zoom-in" className="bg-white rounded-2xl pb-10 shadow-xl">
          <img
            src={Article1} 
            alt="Article 1"
            className="rounded-t-2xl h-55 w-full object-cover"
          />
          <div className="flex mt-5 justify-between pr-5">
            <p className="text-[#445374] text-xl mt-3 ml-5"><CiCalendarDate className="inline mr-1 text-[30px] text-[#894B8D]" /> 25th Jan, 2026</p>
            <p className="text-[#445374] text-xl mt-3 ml-5"><BsPersonCircle className="inline mr-1 text-[25px] text-[#894B8D]" /> By Admin</p>
            
          </div>
          <h2 className="text-2xl font-semibold my-3 text-[#002169] px-5 pt-2"> 
            10 Tips for Keeping Your Pet Healthy and Happy
          </h2>
          <p className="text-[#445374] plus px-5">
            Discover essential tips to ensure your pet's well-being and happiness
            with our comprehensive guide.
          </p>
        </div>
        <div data-aos="zoom-in" className="bg-white rounded-2xl shadow-xl pb-5">
          <img
            src={Article2} 
            alt="Article 2"
            className="rounded-t-2xl round border border-gray-300 h-55 w-full object-cover"
          />
          <div className="flex mt-5 justify-between pr-5">
            <p className="text-[#445374] text-xl mt-3 ml-5"><CiCalendarDate className="inline mr-1 text-[30px] text-[#894B8D]" /> 25th Jan, 2026</p>
            <p className="text-[#445374] text-xl mt-3 ml-5"><BsPersonCircle className="inline mr-1 text-[25px] text-[#894B8D]" /> By Admin</p>
            
          </div>
          <h2 className="text-2xl font-semibold my-3 text-[#002169] px-5">
            The Ultimate Guide to Pet Nutrition: What You Need to Know
          </h2>
          <p className="text-[#445374] plus px-5">
            Learn about the best nutrition practices for your pet to ensure a
            long and healthy life.
          </p>
        </div>
        <div data-aos="zoom-in" className="bg-white rounded-2xl shadow-xl pb-5 w-full lg:w-auto lg:ml-0  md:ml-50 ">
          <img
            src={Article3} 
            alt="Article 3"
            className="rounded-2xl h-55 w-full object-cover"
          />
          <div className="flex mt-5 justify-between pr-5">
            <p className="text-[#445374] text-xl mt-3 ml-5"><CiCalendarDate className="inline mr-1 text-[30px] text-[#894B8D]" /> 25th Jan, 2026</p>
            <p className="text-[#445374] text-xl mt-3 ml-5"><BsPersonCircle className="inline mr-1 text-[25px] text-[#894B8D]" /> By Admin</p>    
          </div>
          <h2 className="text-2xl font-semibold my-3 text-[#002169] px-5">
            Understanding Pet Behavior: A Comprehensive Overview
          </h2>
          <p className="text-[#445374] plus px-5">
            Gain insights into common pet behaviors and learn how to address them
            effectively.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Article;
