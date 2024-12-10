import React from 'react';

const Home = () => {
    return (
        <div className="scroll-mt-[145px] mt-10 md:mt-[100px] max-w-7xl mx-auto p-4 md:p-8" id='home'>
           
            <div className="mb-8 md:mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                    <span className="text-custom-red">Future of your</span>
                    <br />
                    <span className="text-gray-900">business is today.</span>
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
                <div className="space-y-6 md:space-y-8">
                 
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                        <img src="/img/ad.svg" alt="" className="w-full md:w-[500px] h-[150px] md:h-[200px] bg-gray-100 rounded-lg"/>
                        <p className="text-gray-700 text-sm md:text-base">
                            Where we elevate your business with innovative strategies and expert solutions. As a full-service business agency
                        </p>
                    </div>

                
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                      
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-100 rounded-lg flex items-center justify-center">
                                <svg className="w-8 h-8 md:w-12 md:h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold">20+</h3>
                                <p className="text-gray-600 text-sm md:text-base">Projects Completed</p>
                            </div>
                        </div>

                      
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-100 rounded-lg flex items-center justify-center">
                                <svg className="w-8 h-8 md:w-12 md:h-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="3" />
                                    <circle cx="19" cy="12" r="2" />
                                    <circle cx="5" cy="12" r="2" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold">50+</h3>
                                <p className="text-gray-600 text-sm md:text-base">Satisfied Clients</p>
                            </div>
                        </div>
                    </div>
                </div>

             
                <div className="relative mt-8 md:mt-0">
                    <div className="bg-gray-200 rounded-tr-[50px] md:rounded-tr-[100px] rounded-bl-[50px] md:rounded-bl-[100px] h-full absolute right-0 w-3/4" />
                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg relative z-10 mt-6 md:mt-12 mr-4 md:mr-12">
                        <div className="space-y-3 md:space-y-4">
                            <div className="flex gap-4 md:gap-6">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-custom-red">96%</h3>
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold">4.9</h3>
                                </div>
                            </div>
                            <h4 className="text-lg md:text-xl font-bold">Growth is our priority.</h4>
                            <p className="text-gray-600 text-sm md:text-base">
                                As a full-service business agency, we specialize in helping companies of all sizes optimize their operations
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;