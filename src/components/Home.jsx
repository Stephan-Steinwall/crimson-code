import React from 'react';

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto p-8">

            <div className="mb-12">
                <h1 className="text-6xl font-bold">
                    <span className="text-orange-500">Future of your</span>
                    <br />
                    <span className="text-gray-900">business today.</span>
                </h1>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="space-y-8">

                    <div className="flex items-center gap-4">
                        <div className="w-[500px] h-[200px] bg-gray-100 rounded-lg" />
                        <p className="text-gray-700">
                            Where we elevate your business with innovative strategies and expert solutions. As a full-service business agency
                        </p>
                    </div>


                    <div className="grid grid-cols-2 gap-6">

                        <div className="space-y-4 flex items-center gap-4">
                            <div className="w-20 h-20 bg-orange-100 rounded-lg flex items-center justify-center">
                                <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold">20+</h3>
                                <p className="text-gray-600">Projects Completed</p>
                            </div>
                        </div>


                        <div className="space-y-4 flex items-center gap-4">
                            <div className="w-20 h-20 bg-orange-100 rounded-lg flex items-center justify-center">
                                <svg className="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="3" />
                                    <circle cx="19" cy="12" r="2" />
                                    <circle cx="5" cy="12" r="2" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold">50+</h3>
                                <p className="text-gray-600">Satisfied Clients</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="relative">
                    <div className="bg-gray-200 rounded-tr-[100px] rounded-bl-[100px] h-full absolute right-0 w-3/4" />
                    <div className="bg-white p-6 rounded-lg shadow-lg relative z-10 mt-12 mr-12">
                        <div className="space-y-4">
                            <div className="flex gap-6">
                                <div>
                                    <h3 className="text-3xl font-bold text-orange-500">721+</h3>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold">1000+</h3>
                                </div>
                            </div>
                            <h4 className="text-xl font-bold">Growth is our priority.</h4>
                            <p className="text-gray-600">
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