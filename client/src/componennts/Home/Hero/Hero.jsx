import React from 'react'
import Icon_Magnetic from './Icon_Magnetic'

export default function Hero() {
  return (
    <div className='w-full flex flex-col lg:flex-row'>
      <div className='lg:w-2/5 lg:h-screen z-10 mt-[10rem] lg:mt-0 flex items-center justify-center'>
        <div className='ml-10 lg:ml-14'>
        <p className='hero-font-2 text-7xl uppercase'>Better way</p>
        <p className='hero-font text-5xl text-stone-600 uppercase'>of eating</p>
        <button className='bg-blob-color4 p-2 mt-20 rounded-2xl pl-6 pr-6 text-white hero-font-2 font-semibold'>Our Foods & Drinks</button>
        </div>
      </div>
      <div className='lg:w-3/5 -mt-80 lg:mt-0 z-0  h-screen overflow-hidden'>
        <div className='w-full bg-blob-color h-screen lg:-mt-20 ml-10 rota scale rounded-blob-1 '>
            <div className='flex flex-col items-center justify-center h-full relative -ml-14'>
            <div className='w-1/2  bg-red-00 flex items-center justify-end absolute z-10 -mt-24 -ml-12 '>
              <div className='w-36 h-36 rounded-blob-1 bg-blob-color3 rotate-45 ml-5 '>

              </div>
            </div>
            <Icon_Magnetic>
            <img src="https://i.ibb.co/LNmBY5J/one-and-only-rectangular-plate-of-food-vegetable-omlate-chicken-hyper-realistic-4k-smooth-pro-490600.png" alt="one-and-only-rectangular-plate-of-food-vegetable-omlate-chicken-hyper-realistic-4k-smooth-pro-490600" border="0" className='w-80 -ml-10 mt-14 z-20'/>
            </Icon_Magnetic>
            <div className='w-1/2  bg-red-30 flex items- justify- absolute z-10 mt-[16rem]'>
              <div className='w-24 h-24 rounded-blob-1 bg-blob-color2 rotate-45 ml-10 '>

              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}
