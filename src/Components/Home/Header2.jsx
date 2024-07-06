import React from 'react'
import logo from "../../Images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
const Header2 = () => {
  return (
    <div className='flex flex-row justify-around mt-3'>
        <div className='flex flex-row w-1/4 align-middle  justify-end gap-2 text-center'>
        <img src={logo} alt=""className='w-24 mt-2' />
<button className='bg-blue-500 rounded-xl py-2 px-3 text-white'>Courses <FontAwesomeIcon icon={faChevronDown} /> </button>
        </div>
        <div className='w-1/2 flex flex-row justify-center align-middle text-center gap-6'>
<h1 className='font-semibold mt-2'>Refer & Earn</h1>
<h1 className='font-semibold mt-2'>Resources</h1>
<h1 className='font-semibold mt-2'>About us</h1>
<button className='bg-gray-200 py-2 px-5 rounded-xl font-semibold'>Login</button>
<button className='bg-blue-500 rounded-xl py-2 px-4 text-white'>Try it for free </button>


        </div>
    </div>
  )
}

export default Header2