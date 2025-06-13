import React from 'react';
import cardImage from '../assets/credit-cards.webp';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";


function Footer() {
  return (
    <div className='bg-gray-800 text-white mt-10 pt-10'>
        
        <div className='grid grid-cols-3 justify-between items-center mx-20'>
            <div className='pe-20 '>
                <h2 className='text-3xl font-bold font-sans'>CAFE CENTER</h2>
                <p className='mt-4 mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio et architecto nihil ipsah.</p>
                <h4 className='my-1 flex items-center gap-2'><FaPhone />+91 9670716508</h4>
                <h4 className='flex items-center gap-2'><FaMapMarkerAlt />Azamgarh, Uttar Pradesh</h4>
            </div>



            <div className='mx-10'>
                <h3 className='text-3xl font-bold font-sans'>Quick Liknks</h3>
                <div className='grid grid-cols-2'>
                    <div>
                        <ul>
                            <li className='my-2'>Home</li>
                            <li className='my-2'>About</li>
                            <li className='my-2'>Contact Us</li>
                            <li className='my-2'>Privacy Policy</li>
                            <li className='my-2'>Help Center</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='my-2'>Info</li>
                            <li className='my-2'>Order</li>
                            <li className='my-2'>Testimonials</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div>
                <h3 className='text-3xl font-bold'>Follow Us</h3>
                <div className='flex text-3xl my-5'>
                    <FaFacebook />
                    <FaInstagram className='mx-2' />
                    <FaTwitter className='mx-2' />
                    <FaGoogle className='mx-2' />
                </div>
                <h3 className='text-xl font-semibold my-3'>Payment Methods</h3>
                <img src={cardImage} alt="" />
            </div>
        </div>


        <div className='flex justify-center items-center h-25 mt-10 mx-20 border-t-3'>Copyright<AiOutlineCopyrightCircle />2025 The Qalb. All rights reserved!</div>
    </div>
  )
}

export default Footer;