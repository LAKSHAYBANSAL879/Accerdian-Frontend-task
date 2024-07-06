import { faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Contact = () => {
  return (
    <section id='support' className='mb-2 p-2'>
        <div className='w-3/4 mx-auto flex flex-row justify-around align-middle bg-blue-500 p-2 py-8'>
<div className='flex flex-row justify-center align-middle gap-3'>
<FontAwesomeIcon icon={faHeadphonesSimple} className='bg-white w-16 h-16 text-blue-500 p-2'/>
<div className='flex flex-col text-left align-middle justify-center'>
      
      <h1 className='text-white font-bold text-xl'>Want to delve deeper into the program?</h1>
      <h1 className='text-white font-semibold text-lg'>Share your details to receive expert insights from our program team!</h1>


</div>
</div>
<div className='mt-2'>
<button className='bg-white text-blue-500 p-2 px-4 rounded-xl'>Get in touch</button>
</div>
        </div>
    </section>
    

    
  )
}

export default Contact