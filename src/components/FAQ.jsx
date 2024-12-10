import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I schedule a consultation?",
      answer: "You can schedule a consultation by filling out the contact form on our website",
      bgColor: "bg-white"
    },
    {
      question: "Different from other agencies?",
      answer: "We take the time to understand your unique challenges and provide strategies",
      bgColor: "bg-custom-red",
      textColor: "text-white"
    },
    {
      question: "How do you measure the success of your services?",
      answer: "We measure success through key performance indicators (KPIs) such as revenue growth, customer engagement, lead generation, brand visibility",
      bgColor: "bg-white"
    },
    {
      question: "Do you work with businesses in all industries?",
      answer: "Yes, we work with businesses across various industries, adapting our strategies to meet specific sector requirements.",
      bgColor: "bg-white"
    },
    {
      question: "What is the process for starting a project?",
      answer: "We begin with an initial consultation to understand your needs, followed by a detailed proposal and project timeline.",
      bgColor: "bg-white"
    },
    {
      question: "How long does it take to see results?",
      answer: "The timeline for results varies depending on the scope of the project. For digital marketing efforts, you may start seeing improvements within a few months. Larger projects like business consulting or brand development",
      bgColor: "bg-white"
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing varies based on project scope and requirements. Contact us for a custom quote.",
      bgColor: "bg-white"
    },
    {
      question: "Can you help with rebranding or repositioning our business?",
      answer: "Yes, we offer comprehensive rebranding and repositioning services tailored to your business goals.",
      bgColor: "bg-white"
    }
  ];

  return (
    <div className="scroll-mt-[125px] my-5 md:my-10 max-w-7xl mx-auto p-4 md:p-8" id='faq'>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-12 text-center">
        Frequently Asked Questions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {/* Left Column */}
        <div className="space-y-4 md:space-y-6">
          {faqs.slice(0, 3).map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer ${faq.bgColor}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="p-4 md:p-6">
                <div className="flex justify-between items-center gap-3 md:gap-4">
                  <h3 className={`font-bold text-base md:text-xl ${faq.textColor || 'text-black'}`}>{faq.question}</h3>
                  <div className={`${faq.bgColor === 'bg-custom-red' ? 'bg-white' : 'bg-orange-50'} p-2 rounded-lg flex-shrink-0`}>
                    <svg 
                      className={`w-3 h-3 md:w-4 md:h-4 transform transition-transform duration-300 ${
                        activeIndex === index ? 'rotate-180' : 'rotate-45'
                      } ${faq.bgColor === 'bg-custom-red' ? 'text-custom-red' : 'text-custom-red'}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-48 md:max-h-40 mt-3 md:mt-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className={`${faq.textColor || 'text-gray-600'} text-sm md:text-base`}>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-4 md:space-y-6">
          {faqs.slice(3).map((faq, index) => (
            <div
              key={index + 3}
              className={`rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer ${faq.bgColor} hover:shadow-lg`}
              onClick={() => toggleFaq(index + 3)}
            >
              <div className="p-4 md:p-6">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-base md:text-xl">{faq.question}</h3>
                  <svg 
                    className={`w-5 h-5 md:w-6 md:h-6 transform transition-transform duration-300 ${
                      activeIndex === index + 3 ? 'rotate-180' : 'rotate-0'
                    } text-custom-red flex-shrink-0`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index + 3 ? 'max-h-48 md:max-h-40 mt-3 md:mt-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 text-sm md:text-base">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;