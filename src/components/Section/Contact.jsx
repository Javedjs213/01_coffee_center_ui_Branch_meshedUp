import React from 'react';
import worldMap from '../../assets/world-map.png';


function Contact() {
  return (
            <div className='mt-20 grid md:grid-cols-2 mx-20 min-h-80 justify-between items-center'>
            <div className=' w-2/3'>
                <h2 className='font-bold text-4xl font-serif'>Buy out poducts <br /> from anywhere</h2>
                <div className='grid grid-cols-6 gap-3 mt-5'>

                <input type="text" name="Name" placeholder='Name' className='border-1 border-gray-400 rounded-lg p-2 col-span-3' />
                <input type="email" name="email" placeholder='Email' className='border-1 border-gray-400 rounded-lg p-2 col-span-3' />
                
                <input type="text" name="country" placeholder='Country' className='border-1 border-gray-400 rounded-lg p-2 col-span-4' />
                <input type="number" name="zip" placeholder='Zip Code' className='border-1 border-gray-400 rounded-lg p-2 col-span-2' />
            
                <button type="submit" className='col-span-6 bg-amber-500 mt-2 p-2 rounded-lg'>Order Now</button>
                </div>
            </div>
            <div className='h-full mt-10'>
                <img src={worldMap} alt="map"  className=' h-full'/>
            </div>
        </div>
  )
}

export default Contact