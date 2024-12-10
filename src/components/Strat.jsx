import React from 'react';

const Strat = () => {
  return (
    <div className="my-5 md:my-10 max-w-7xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {/* Left Column */}
        <div className="space-y-4 md:space-y-6 text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">
              TRUSTED PARTNER FOR
            </h2>
            <h2 className="text-2xl md:text-3xl font-bold">
              BUSINESS SUCCESS
            </h2>
          </div>
          <p className="text-gray-600 text-sm md:text-base max-w-xl">
            Where we elevate your business with innovative strategies and expert solutions. 
            As a full-service business agency, we specialize in helping companies of all sizes optimize
          </p>
        </div>

        {/* Right Column */}
        <div className="text-left md:text-right mt-6 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold inline-block">
            <span className="text-orange-500">From strategy</span>
            <br />
            <span className="text-gray-900">to execution</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Strat;