import React from 'react';
import CardDes from './CardDes';

const Cards1 = () => {
    return (
        <div className="scroll-mt-20 my-10 max-w-7xl mx-auto p-8" id='about'>

            <h1 className="text-5xl font-bold mb-5">
                Empowering your <span className="text-custom-red">business with</span>
                <br />
                tailor-made solutions
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                <div className="space-y-8">



                <CardDes 
  heading="Excellence through innovation" 
  val1="20+" 
  val2="50+" 
  desc="As a dynamic startup, we've successfully delivered over 20 innovative projects, transforming businesses through strategic digital solutions" 
/>
<CardDes 
  heading="Trusted partner for growth" 
  val1="96%" 
  val2="4.9" 
  desc="With a 96% client satisfaction rate and 4.9/5 average rating, we take pride in building lasting partnerships and delivering measurable results" 
/>


                    

                </div>

               
                <div className="bg-gray-200 rounded-[40px] h-[600px] w-full transition-transform duration-300 hover:scale-[1.02]">
                    <img
                        src="/img/ac.svg"
                        alt="placeholder"
                        className="w-full h-full object-cover rounded-[40px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Cards1;