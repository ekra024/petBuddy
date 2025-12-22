import { FaQuoteLeft } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import ReviewImage from '/Review.jpeg'

const Review = () => {
  return (
    <div className='mt-20 lg:flex gap-10'>
      <div className='lg:w-1/2 flex justify-center mb-20'>
        <img src={ReviewImage} className="w-full " alt="Review" />
        <div className="bg-blue-900 rounded-full absolute md:mt-60 lg:mt-60 ml-10 p-5 px-10 text-center">
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
        <h2></h2>
        <h1>Don't Just Take It From Us, Hear What Our Clients Say: </h1>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <p>
            "Pet Buddy has been a lifesaver for me and my furry friend. Their
            team is knowledgeable, caring, and always goes above and beyond to
            ensure the health and happiness of my pet. I couldn't be happier
            with the services they provide!"
          </p>
        </div>
        <div>
          <div>
            <FaQuoteLeft />
          </div>
          <div>
            <div>
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
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