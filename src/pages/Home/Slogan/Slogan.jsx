import React from "react";
import { GoArrowRight } from "react-icons/go";
import SloganImage from '/Slogan.webp';

const Slogan = () => {
  return (
    <div className="bg-[#894B8D] pt-10 px-16 lg:flex justify-between items-center gap-10">
      <div data-aos="flip-left" className="text-center">
        <h1 className="text-4xl text-white font-bold px-16 lg:px-0">
          Pets Are Not Just Animals, They Are A Part of Our Family
        </h1>
        <p className="text-white mt-4 plus">
          This pets help us to live a better life. They are our companions and
          bring joy into our lives.They are our friend.We should love and care
          for them.
        </p>
        <div>
          <button className="border mt-8 bg-white text-[#894B8D] font-semibold p-3 px-8 text-[20px] rounded-4xl">
            Read More <GoArrowRight className="inline ml-2 text-2xl " />
          </button>
        </div>
      </div>
      <div data-aos="flip-right" className="mt-10">
        <img src={SloganImage} alt="Slogan" />
      </div>
    </div>
  );
};

export default Slogan;
