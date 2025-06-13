import React from 'react';
import bannerImage from '../../assets/banner.jpg';
import appStore from '../../assets/app_store.png';
import playStore from '../../assets/play_store.png';


function Banner() {
  return (
   <div
  className="mx-20 h-80 my-20 flex justify-end"
  style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
>
  <div className='h-full w-full sm:w-20/21 md:w-18/23 lg:w-1/2 flex flex-col justify-center items-center'>
  <div className='sm:px-20 text-center mt-24'>
    <h3 className='text-3xl font-bold mb-4'>Download the app</h3>
    <p className='px-6'>Lorem ipsum dolor sit amet consectetur adipisicing i wnat know that to found app.</p>
  </div>
  
    <div className='flex justify-center items-start gap-4 mt-5'>
      <img src={appStore} alt="App Store" className='h-1/3'/>
      <img src={playStore} alt="Play Store" className='h-1/3' />
    </div>
  </div>
</div>

  )
}

export default Banner