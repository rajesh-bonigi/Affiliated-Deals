import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading amazing deals...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;