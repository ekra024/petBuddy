import { CiLocationOn } from "react-icons/ci";
import { MdOutlineCategory } from "react-icons/md";
import { Link } from "react-router-dom";

const SinglePet = ({pet}) => {
  const { petName, pet_image, location, addedBy, age, category,_id } = pet;
  
  return (
    <div className='bg-white border rounded-4xl shadow-2xl w-full'>
      <div className="w-full">
        <img className="h-60 w-full object-fit rounded-t-4xl " src={pet_image} alt="" />
      </div>
      <div className='font-semibold my-10 text-[#002169] '>
        <div className='flex justify-between px-10 gap-5'>
          <h3 className="text-3xl">{petName}</h3>
          <h3>Age:{age} year</h3>
        </div>
        <div className='flex justify-between px-10 my-1'>
          <h3>{addedBy} </h3>
          <h3><CiLocationOn className="inline text-xl"/> {location} </h3>
        </div>
        <div className='px-10' >  
          <h3 className='flex justify-end items-center gap-2 mt-2 '>
            <MdOutlineCategory className="text-xl"/> 
            {category.label} 
          </h3>
        </div>
        <div className="mt-5">
          <Link to={`/petDetail/${_id}`} className="border rounded-4xl px-6 py-2 bg-[purple] text-white hover:bg-purple-900" >Details</Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePet;