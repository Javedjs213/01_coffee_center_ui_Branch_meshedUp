import React from 'react';
import coldCoffee from '../../assets/coldCoffee.png';
import capchino from '../../assets/capchino.png';
import Contact from './Contact.jsx';
import Banner from './Banner.jsx';

function Section() {
  return (
    <div>
        <div className='flex flex-col justify-center items-center h-50'>
            <h2 className='text-4xl font-bold'>Fresh and <span className='text-amber-500'>Tasty Coffee</span></h2>
            <p>Lorem, ipsum dolor sit amet dolor sed dicta quo voluptatem recusandae autem, totam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, mollitia.</p>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  px-10 mt-5'>
            <div className='flex flex-col justify-center items-center h-full text-center px-8'>
                <img className='h-65' src={coldCoffee} alt="" />
                <h2 className='text-2xl font-bold text-amber-400'>Black Coffee</h2>
                <p className='px-5'>Lorem ipsum dolor sit amet consectetur . Hic beatae.</p>
            </div>
            <div className='flex flex-col justify-center items-center h-full text-center px-8'>
                <img className='h-65' src={capchino} alt="" />
                <h2 className='text-2xl font-bold text-amber-400'>Hot Coffee</h2>
                <p className='px-5'>Lorem ipsum dolor sit adipisicing elit. Hic beatae.</p>
            </div>
            <div className='flex flex-col justify-center items-center h-full text-center px-8'>
                <img className='h-65' src={coldCoffee} alt="" />
                <h2 className='text-2xl font-bold text-amber-400'>Black Coffee</h2>
                <p className='px-5'>Amet hello text consectetur adipisicing elit. Hic beatae.</p>
            </div>
        </div>



        <Contact />


        <Banner />

    </div>
  )
}

export default Section;