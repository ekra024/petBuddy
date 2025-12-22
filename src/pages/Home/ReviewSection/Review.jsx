import { FaQuoteLeft } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import ReviewImage from '/Review.jpeg'
import { MdOutlinePets } from "react-icons/md";
import Person from '/person2.jpeg'

const Review = () => {
  return (
    <div className='w-9/12 lg:w-10/12 mx-auto mt-20 lg:flex gap-10 my-5 mb-30'>
      <div className='lg:w-1/2 flex justify-center mb-20'>
        <img src={ReviewImage} className="w-full " alt="Review" />
        <div className="bg-blue-900 rounded-full absolute hidden md:block md:mt-60 lg:mt-60 ml-10 p-5 px-10 text-center">
          <div className="mb-2">
            <FaStar className="mt-4 text-yellow-500 inline text-l" />
            <FaStar className="text-yellow-500 inline text-2xl" />
            <FaStar className="text-yellow-500 inline mt-4 text-l" />
          </div>
          <h1 className="text-white text-2xl font-bold">1000+</h1>
          <p className="text-white">Reviews</p>
        </div>
      </div>
      <div className="lg:w-1/2">
        <div className="flex items-center mt-5">
          <h2 className="text-[20px] text-[#894B8D] font-semibold my-3">
            TESTIMONIALS
          </h2>
          <MdOutlinePets className="inline text-xl text-[#894B8D] ml-2 mb-2" />
        </div>
        <h1 className="text-4xl font-semibold text-[#002169]">Don't Just Take It From Us, Hear What Our Clients Say: </h1>
        <div className="my-5 md:flex gap-5">
          <div className=" ">
            <img className="object-cover rounded-2xl md:w-50 h-25 " src={Person} alt="" />
          </div>
          <p className="plus text-[18px] text-[#445374]">
            "Pet Buddy has been a lifesaver for me.Their team is knowledgeable, caring, and always goes above and beyond to ensure the health and happiness."
          </p>
        </div>
        <div className="flex gap-5">
          <div>
            <FaQuoteLeft className="text-7xl text-gray-300 " />
          </div>
          <div>
            <div className="space-x-1">
              <FaStar className="text-yellow-500 inline text-xl" />
              <FaStar className="text-yellow-500 inline text-xl" />
              <FaStar className="text-yellow-500 inline text-xl" />
              <FaStar className="text-yellow-500 inline text-xl" />
              <FaStar className="text-yellow-500 inline text-xl" />
            </div>
            <h3 className="font-bold text-xl">Sarah Simon</h3>
            <p className="text-gray-600">Happy Pet Owner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;