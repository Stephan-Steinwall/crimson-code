import React from 'react';

const Strat = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Left Aligned */}
        <div className="space-y-6 text-left">
          <div>
            <h2 className="text-3xl font-bold mb-2">TRUSTED PARTNER FOR</h2>
            <h2 className="text-3xl font-bold">BUSINESS SUCCESS</h2>
          </div>
          <p className="text-gray-600 max-w-xl">
            Where we elevate your business with innovative strategies and expert solutions. As a full-service business agency, we specialize in helping companies of all sizes optimize
          </p>
        </div>

        {/* Right Column - Right Aligned */}
        <div className="text-right">
          <h1 className="text-7xl font-bold inline-block">
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