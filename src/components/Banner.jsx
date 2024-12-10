import React from 'react';

const Banner = () => {
  return (
    <div className="my-10 max-w-7xl mx-auto p-8">
      <div className="relative">
        {/* Background Image Placeholder Section */}
        <div className="bg-gray-300 h-[400px] rounded-[40px] w-full">
          <img 
            src="https://placehold.co/800x400"
            alt="placeholder" 
            className="w-full h-full object-cover rounded-[40px]"
          />
        </div>

        {/* Floating Text Card */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 bg-white p-8 rounded-[20px] shadow-xl max-w-md">
          <h2 className="text-2xl font-bold mb-6">
            Excellence through innovation
          </h2>
          
          <div className="flex gap-8 mb-6">
            <span className="text-4xl font-bold text-custom-red">7000+</span>
            <span className="text-4xl font-bold">120K</span>
          </div>
          
          <p className="text-gray-600">
            As a full-service business agency, we specialize in helping companies of all sizes optimize their operations
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;