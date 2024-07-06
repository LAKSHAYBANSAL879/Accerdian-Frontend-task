import React from 'react';
import {Link} from 'react-scroll';
import './Home.css'
const Header3 = () => {
  return (
    <div className='flex flex-row bg-blue-200 font-semibold justify-center w-fit rounded-xl text-center align-middle gap-20 mx-auto p-2 mt-4 mb-3'>
      <Link  activeClass='active' to="refer" spy={true} offset={-90} duration={500} smooth  activeClassName="text-blue-600 border-b-2 border-blue-600" className="text-black cursor-pointer">
        Refer
      </Link>
      <Link activeClass='active' to="benefits" spy={true} offset={-90} duration={500} smooth activeClassName="text-blue-600 border-b-2 border-blue-600" className="text-black cursor-pointer">
        Benefits
      </Link>
      <Link activeClass='active' to="faq" spy={true} offset={-90} duration={500} smooth activeClassName="text-blue-600 border-b-2 border-blue-600" className="text-black cursor-pointer">
        FAQs
      </Link>
      <Link activeClass='active' to="support" spy={true} offset={-90} duration={500} smooth activeClassName="text-blue-600 border-b-2 border-blue-600" className="text-black cursor-pointer">
        Support
      </Link>
    </div>
  );
};

export default Header3;
