import React from 'react';
import bgImage from '../../assets/bg-slate.png'; 
import { FiAlignJustify } from "react-icons/fi";
import CupContainer from './CupContainer';

function Hero() {
  return (
    <div style={{backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: "center"}} className='min-h-200 w-full text-white'>
        <div className='h-28 mx-10 flex items-center justify-between font-bold text-2xl'>
            <span className='text-amber-500 '>COFFEE<span className='text-white'> CENTER</span></span>
            <FiAlignJustify className='text-4xl hover:cursor-pointer'/>
        </div>


        
            <CupContainer />
        
    </div>
  )
}

export default Hero;