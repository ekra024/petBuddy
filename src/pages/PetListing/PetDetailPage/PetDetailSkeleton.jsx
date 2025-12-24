import React from 'react';

const PetDetailSkeleton = () => {
  return (
    <div className="bg-[#f9eadc] min-h-screen px-6 py-12 animate-pulse">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Image Skeleton */}
          <div className="h-[350px] bg-gray-300"></div>

          {/* Info Skeleton */}
          <div className="p-8 space-y-4">
            <div className="w-24 h-6 bg-gray-300 rounded-full"></div>
            <div className="w-3/4 h-10 bg-gray-300 rounded"></div>
            <div className="w-full h-4 bg-gray-300 rounded"></div>
            <div className="w-full h-4 bg-gray-300 rounded"></div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
            </div>

            <div className="w-32 h-10 bg-gray-300 rounded mt-6"></div>
          </div>
        </div>
      </div>

      {/* Description Skeleton */}
      <div className="max-w-6xl mx-auto mt-10 bg-white rounded-xl p-8 shadow-md">
        <div className="w-48 h-6 bg-gray-300 rounded mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
};

export default PetDetailSkeleton;