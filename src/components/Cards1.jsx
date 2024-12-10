import React from 'react';
import CardDes from './CardDes';

const Cards1 = () => {
    return (
        <div className="scroll-mt-20 my-10 max-w-7xl mx-auto p-8" id='about'>

            <h1 className="text-5xl font-bold mb-5">
                Empowering your <span className="text-orange-500">business with</span>
                <br />
                tailor-made solutions
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                <div className="space-y-8">



                    <CardDes heading="Excellence through innovation" val1="1000+" val2="120K" desc="As a full-service business agency, we specialize in helping companies of all sizes optimize their operations" />
                    <CardDes heading="Trusted partner for business success" val1="5000+" val2="710K" desc=" As a full-service business agency, we specialize in helping companies of all sizes optimize their operations" />


                    

                </div>

                {/* Right Column - Image Placeholder */}
                <div className="bg-gray-200 rounded-[40px] h-[600px] w-full transition-transform duration-300 hover:scale-[1.02]">
                    <img
                        src="https://placehold.co/600x600"
                        alt="placeholder"
                        className="w-full h-full object-cover rounded-[40px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Cards1;