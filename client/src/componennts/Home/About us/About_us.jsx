import React from 'react'

export default function About_us() {
  return (
    <div className='w-full h-auto lg:mt-[1rem]  flex flex-col'>
      <div className='flex lg:flex-row flex-col w-full p-5 lg:p-20'>
        <div className='lg:w-1/2 flex hero-font items-center justify-center lg:mt-[15rem] mt-[10rem]'>
           <div className='border-[7px] border-[#e66249] p-10 h-96 z-10'>
            <p className='hero-font text-5xl font-semibold text-[#e66249]'>Newsletter</p>
            <p className="hero-font text-stone-500 text-xl mt-5">offers & exclusive sent straight to</p> 
            <p className="hero-font text-stone-500 text-lg">your inbox</p>
            <div className='flex items-center'>
            <input type="text" className='h-8 mt-8 w- border border-b-gray-500 bg-custom-green' placeholder='Your Email' />
            <button className='h-8 bg-blob-color5 text-white mt-8 pl-3 pr-3 rounded-e-xl'>SEND</button>
            </div>
           </div>
        </div>
        <div className='lg:w-1/2 bg-red-00 flex items-center justify-center mt-10 lg:-mt-64'>
        <div>
        <p className='hero-font text-5xl font-bold'>ABOUT US</p>
            <p className='herp-font text-lg text-stone-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet est labore quia nesciunt ipsa iusto sint velit a neque? Molestias ipsa minima architecto nesciunt, in porro exercitationem velit voluptate quas.</p>
            <button className='u h-11 text-xl hero-font uppercase bg-blob-color5 text-white mt-8 pl-3 pr-3 rounded-xl'>Read More</button>
        </div>
        </div>
      </div>
      <div className='flex items-center justify-center w-full'>
        <img src="https://i.ibb.co/C8xZSjZ/restaurant-modern-lighting-realistic-cinematic-extream-details-perfect-composition-beautiful-det-356.png" alt="" className='w-2/3 lg:ml-52 ml-32 rounded-lg lg:rounded-none lg:-mt-40 z-0'/>
      </div>
    </div>
  )
}
