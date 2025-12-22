import { MdOutlinePets } from "react-icons/md";
import Image1 from "/Banner.jpg";
import Image2 from "/Banner1.jpg";
import { GoArrowRight } from "react-icons/go";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const ChoosenUs = () => {
  return (
    <div className="w-full bg-blue-50 lg:flex gap-5 p-5 pb-15">
      <div className="lg:w-1/2 flex justify-center items-center">
        <img
          src={Image1}
          alt="Banner"
          className="w-76 rounded-[50px] object-center"
        />
        <img
          src={Image2}
          alt="Banner"
          className="w-76 rounded-[50px] object-center -ml-20 mt-60  "
        />
      </div>
      <div className="lg:w-1/2 mt-20 pr-0 lg:mt-40">
        <div className="flex items-center mt-5">
          <h2 className="text-[18px] text-[#894B8D] font-semibold">
            WHY CHOOSE US
          </h2>
          <MdOutlinePets className="inline text-xl text-[#894B8D] ml-2 mb-2" />
        </div>

        <h1 className="text-4xl font-semibold my-5 text-[#002169] ">
          We Thrive On Building A Healhy Community For All Pets
        </h1>
        <p className="text-[#445374] plus">
          Our commitment to pet wellness and community building sets us apart
          from the rest. We build systems for providing health services for
          individuals, families and populations.
        </p>
        <div className="flex my-5">
          <div>
            <div className="flex">
              <IoCheckmarkDoneSharp className="text-3xl text-[#894B8D] mr-2 mb-2" />
              <h1 className="text-2xl text-[#002169] font-semibold">
                {" "}
                More Experience{" "}
              </h1>
            </div>
            <p className="text-[#445374] plus">
              Be confident in our expertise and years of experience in pet care.
            </p>
          </div>
          <div>
            <div className="flex">
              <IoCheckmarkDoneSharp className="text-3xl text-[#894B8D] mr-2 mb-2" />
              <h1 className="text-2xl text-[#002169] font-semibold ">
                {" "}
                Trusted By Thousands{" "}
              </h1>
            </div>
            <p className="text-[#445374] plus">
              Join a community of satisfied pet owners who trust us for their
              pets' needs.
            </p>
          </div>
        </div>
        <div>
          <button className="border my-6  bg-[#894B8D]  text-white font-semibold p-4 px-8 text-[18px] rounded-4xl">
            Contact With Us <GoArrowRight className="inline ml-2 text-2xl " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChoosenUs;
