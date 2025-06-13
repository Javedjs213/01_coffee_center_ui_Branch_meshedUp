import React from 'react';
import bgImage from '../../assets/bg-slate.png'; 
import { FiAlignJustify } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import CupContainer from './CupContainer';

function Hero() {
  return (
    <div style={{backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: "center"}} className='relative min-h-200 w-full text-white'>
        <div className='h-28 mx-10 flex items-center justify-between font-bold text-2xl'>
            <span className='text-amber-500 '>COFFEE<span className='text-white'> CENTER</span></span>
            <FiAlignJustify className='relative z-20 text-4xl hover:cursor-pointer '/>
        </div>


        
            <CupContainer />

            <nav className='hidden flex flex-col gap-3 justify-center items-center bg-amber-600 absolute top-0 right-0 w-40 h-full z-1 text-3xl'>
              <div className='h-20 border-1 mb-5'></div>
              <div className='size-12 border-2 border-amber-50 rounded-full flex justify-center items-center'><FaFacebookF /></div>
              <div className='size-12 border-2 border-amber-50 rounded-full flex justify-center items-center'><FaTwitter /></div>
              <div className='size-12 border-2 border-amber-50 rounded-full flex justify-center items-center'><FaInstagram /></div>
              <div className='h-20 border-1 mt-5'></div>
            </nav>
            
        
    </div>
  )
}

export default Hero;