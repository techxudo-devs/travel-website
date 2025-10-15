import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm transition-shadow duration-300 border border-gray-100">
      <div className="relative w-full h-64 overflow-hidden bg-gray-200 animate-pulse"></div>
      <div className="p-5 space-y-4">
        <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
        <div className="flex items-center justify-between">
          <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
        </div>
        <div className="pt-2 border-t border-gray-100">
          <div className="h-8 bg-gray-200 rounded w-1/2 animate-pulse"></div>
        </div>
        <div className="h-10 bg-gray-200 rounded-xl w-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
