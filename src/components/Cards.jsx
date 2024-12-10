import React from 'react';

const Cards = () => {
  return (
    <div className="my-10 max-w-7xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       
        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-xl font-bold max-w-[200px] group-hover:text-custom-red-light transition-colors duration-300">Build the future of your business</h2>
            <svg className="w-6 h-6 text-gray-800 transform rotate-45 group-hover:translate-x-1 group-hover:translate-y--1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
          <p className="text-gray-600 text-sm">
            As a full-service business agency, we specialize in helping companies of all sizes optimize their operations
          </p>
        </div>

        
        <div className="bg-custom-red rounded-3xl p-8 text-white hover:bg-custom-red-light transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-xl font-bold max-w-[200px]">We are here to help your business</h2>
            <svg className="w-6 h-6 text-white transform rotate-45 group-hover:translate-x-1 group-hover:translate-y--1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
          <p className="text-sm opacity-90">
            As a full-service business agency, we specialize in helping companies of all sizes optimize their operations
          </p>
        </div>

    
        <div className="flex flex-col items-center text-center p-8">
          <h2 className="text-2xl font-bold mb-2">
            HELPING <span className="font-extrabold">BUSINESSES</span>
          </h2>
          <h2 className="text-2xl font-bold mb-6">
            <span className="font-extrabold">THRIVE IN A</span> DIGITAL-FIRST WORLD
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            As a full-service business agency, we specialize in helping companies of all sizes optimize their operations
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-orange-500 transition-colors duration-300 transform hover:scale-105">
           Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;