import React from 'react';
import Image from 'next/image';

import logo from '../public/logo.jpg'
import Link from 'next/link';

export default function Navigation() {
  return (
    <div className='flex position-fixed my-5 items-center justify-between'>
      <Link href='/'>
        <div className='flex items-center gap-1'>
          <Image src={logo} height={50} className='rounded-full' alt="logo" />
          <div className='font-bold text-xl md:text-2xl'>
            <h>Cricket</h><h className="text-red-500 font-extrabold">Hub</h><h>.pro</h>
          </div>
        </div>
      </Link>
      <div className='text-red-300 rounded-md font-bold p-2 bg-gray-500 md:text-sm'>Coming Soon..</div>
    </div>
  )
}
