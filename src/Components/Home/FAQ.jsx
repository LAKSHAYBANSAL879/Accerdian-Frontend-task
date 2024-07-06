import React, { useState } from 'react';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('eligibility'); 

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section id="faq" className='flex flex-col mt-56 w-3/4 mx-auto'>
      <div>
      <h1 className='mx-auto  text-3xl font-bold'>Frequently Asked <span className='text-blue-500'>Questions</span></h1>
      </div>
     
      <div className="flex w-full flex-row mt-5 mx-auto">
       
        <div className="flex flex-col w-1/3 p-4">
          <button
            className={`py-2 px-4 mb-2 rounded shadow-gray-500 ${activeTab === 'eligibility' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 border-black border-2'}`}
            onClick={() => handleTabClick('eligibility')}
          >
            Eligibility
          </button>
          <button
            className={`py-2 px-4 mb-2 rounded ${activeTab === 'terms' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 border-black border-2'}`}
            onClick={() => handleTabClick('terms')}
          >
            Terms & Conditions
          </button>
          <button
            className={`py-2 px-4 mb-2 rounded ${activeTab === 'how-to-use' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 border-black border-2'}`}
            onClick={() => handleTabClick('how-to-use')}
          >
            How to Use
          </button>
        </div>

        
        <div className="flex flex-col text-left justify-center w-full p-4">
          {activeTab === 'eligibility' && (
            <div>
              <h2 className='font-semibold text-blue-500'>Do I need to have prior Product Management and Project Management experience to enroll in the program?</h2>
              <p>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.</p>
            </div>
          )}
          {activeTab === 'terms' && (
            <div>
              <h2 className='font-semibold text-blue-500'>Terms & Conditions</h2>
              <p>Main content for Terms & Conditions goes here...</p>
            </div>
          )}
          {activeTab === 'how-to-use' && (
            <div>
              <h2 className='font-semibold text-blue-500'>How to Use</h2>
              <p>Main content for How to Use goes here...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
