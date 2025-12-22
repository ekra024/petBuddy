import React from 'react';

const SinglePet = ({pet}) => {
  const { petName, petimage, category, location, addedBy } = pet;
  return (
    <div className='bg-white border rounded-2xl'>
      <h1 className='text-3xl font-semibold text-white ' >Available Pets For Adoption</h1>
      <p className='plus text-[#8FA5D6] px-5 '>We will work with you to develop individualised care plans, including management chronic diseases </p>
    </div>
  );
};

export default SinglePet;