import React from 'react';

const DonationProgressBar = ({percent}) => {
  return (
    <div className='w-full'>
      <div className='w-full bg-gray-200 rounded-full h-3 overflow-hidden'>
        <div className='h-3 bg-linear-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500'
          style={{ width: `${percent}%` }}>
          <p className='text-xm mt-1 text-gray-600'> {percent}% </p>

        </div>
      </div>
    </div>
  );
};

export default DonationProgressBar;