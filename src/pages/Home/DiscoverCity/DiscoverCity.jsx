import { MdOutlinePets } from "react-icons/md";
import DhakaCity from "/Dhaka.avif";
import KhulnaCity from "/Khulna.jpeg";
import ChattogramCity from "/Chattagram.jpg";
import RajshashiCity from "/Rajshashi.jpeg";
import BarishalCity from "/Barishal.jpg";

const DiscoverCity = () => {
  return (
    <div className="px-10 my-20">
      <div  data-aos="fade-down" className="text-center mb-10">
        <div className="flex justify-center items-center mx-auto">
          <h2 className="text-[18px] text-[#894B8D] font-semibold">
            DISCOVER OUR CITIES
          </h2>
          <MdOutlinePets className="inline text-xl text-[#894B8D] ml-2 mb-2" />
        </div>
        <h1 className="text-4xl font-semibold my-3 text-[#002169]">
          Find Your Perfect Match
        </h1>
        <p className="text-[#445374] plus px-20">
          Explore our services in different cities and find the best care for
          your beloved pets. We provide best services in all cities.
        </p>
      </div>
      <div>
        <div  data-aos="fade-down-right" className="lg:flex space-y-5 gap-5">
          <div className="lg:w-1/2">
            <img
              src={DhakaCity}
              className="w-full h-70 rounded-4xl"
              alt="Dhaka City"
            />
            <div className="absolute mt-[-90px] ml-5 p-4">
              <p className="text-2xl font-semibold text-white">Dhaka City</p>
              <p className="text-white plus">10 Pets</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src={KhulnaCity}
              className="w-full h-70 rounded-4xl"
              alt="Khulna City"
            />
            <div className="absolute mt-[-90px] ml-5 p-4">
              <p className="text-2xl font-semibold text-white">Khulna City</p>
              <p className="text-white plus">19 Pets</p>
            </div>
          </div>
        </div>
        <div  data-aos="fade-down-left" className="lg:flex gap-5 space-y-5 lg:space-y-0 mt-5">
          <div className="lg:w-1/3">
            <img
              src={ChattogramCity}
              className="w-full h-70 rounded-4xl"
              alt="Chattogram City"
            />
            <div className="absolute mt-[-90px] ml-5 p-4">
              <p className="text-2xl font-semibold text-white">
                Chattogram City
              </p>
              <p className="text-white plus">30 Pets</p>
            </div>
          </div>
          <div className="lg:w-1/3">
            <img
              src={RajshashiCity}
              className="w-full h-70 rounded-4xl"
              alt="Rajshashi City"
            />

            <div className="absolute mt-[-90px] ml-5 p-4">
              <p className="text-2xl font-semibold text-white">
                Rajshashi City
              </p>
              <p className="text-white plus">16 Pets</p>
            </div>
          </div>
          <div className="lg:w-1/3">
            <img
              src={BarishalCity}
              className="w-full h-70 rounded-4xl"
              alt="Barishal City"
            />
            <div className="absolute mt-[-90px] ml-5 p-4">
              <p className="text-2xl font-semibold text-white">Barishal City</p>
              <p className="text-white plus">20 Pets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCity;
