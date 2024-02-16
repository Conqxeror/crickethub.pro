import React from 'react';
import Image from 'next/image';

import logo from '../public/logo.jpg'

export default function Navigation() {
  return (
    <div className='flex position-fixed my-5 items-center justify-between'>
        <div className='flex items-center gap-1'>
            <Image src={logo} height={50} className='rounded-full' />
            <div className='font-bold text-2xl'>
                 <h>Cricket</h><h className="text-red-500 font-extrabold">Hub</h>
            </div>
        </div>
        <div className='text-white rounded-md font-bold p-3 bg-red-500'>Coming Soon..</div>
    </div>
  )
}
