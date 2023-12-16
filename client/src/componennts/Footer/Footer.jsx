import React from 'react'
import { FaFacebookF,FaInstagram,FaYoutube } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className='h-auto pl-32 pr-32 pt-32 mt-20 hero-font uppercase text-stone-800'>
      <div className='w-full border-b-2 border-gray-950'></div>
      <div className='w-full flex flex-col items-center justify-center'>
        <p className='mt-10 w-96'><img src="https://i.ibb.co/TP8bczH/logo-removebg-preview.png" alt="logo-removebg-preview" border="0"/></p>
        <div className=' flex gap-5 mt-10 mb-10'>
            <div className='w- h- bg-red- border-b-2 border-b-black'>Home</div>
            <div className='w- h- bg-red- border-b-2 border-b-black'>Food & Drinks</div>
            <div className='w- h- bg-red- border-b-2 border-b-black'>About</div>
            <div className='w- h- bg-red- border-b-2 border-b-black'>Location</div>
            <div className='w- h- bg-red- border-b-2 border-b-black'>Jobs</div>
            <div className='w- h- bg-red- border-b-2 border-b-black'>Contact</div>
        </div><div className=' flex gap-5 mt- mb-5'>
            <div className='w- h- bg-rd-00 text-3xl'><FaFacebookF/></div>
            <div className='w- h- bg-rd-00 text-4xl'><FaInstagram/></div>
            <div className='w- h- bg-rd-00 text-4xl'><FaYoutube/></div>
            
        </div>
      </div>
    </div>
  )
}
