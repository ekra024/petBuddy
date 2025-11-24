import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/Logo2.jpeg'

const PetLogo = () => {
  return (
    <Link to='/' className='flex justify-center gap-2 items-center'>
      <div className='w-15 overflow-hidden rounded-full'>
        <img className='w-full h-full object-cover scale-200' src={logo} alt="" />
      </div>
      <h1 className="font-bold text-3xl">PetBuddy</h1>
    </Link>
  );
};

export default PetLogo;