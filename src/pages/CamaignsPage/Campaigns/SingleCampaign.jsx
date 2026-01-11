import { Link } from 'react-router-dom';

const SingleCampaign = ({camp}) => {
  const {petImage, targetAmount, donatedAmount,_id, description, created_by, petName} = camp;
  return (
    <div className='bg-white border rounded-4xl shadow-2xl'>
      <div>
        <img className="w-full h-60 object-cover rounded-t-4xl " src={petImage} alt="" />
      </div>
      <div className='font-semibold my-5 text-[#002169]'>
        <div className='text-center text-3xl'>{petName}</div>
        <div className='flex justify-between px-10 pt-4'>
          <h3>Created By : {created_by}</h3>
          <h3>{description}</h3>
        </div>
        <div className='flex justify-between px-10 my-1 mb-5'>
          <h3>Target Amount : {targetAmount} </h3>
          <h3>Get Amount : {donatedAmount} </h3>
        </div>
        <div className='text-center pb-4'>
          <Link to={`/campaigns/${_id}`} className="border rounded-4xl px-6 py-2 bg-[purple] text-white hover:bg-purple-900" >View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCampaign;