import Image from 'next/image'
import React from 'react'
import { Clock, Headset, Mail } from 'lucide-react'

export default function TopNav() {
  return (
    <div className='bg-[#1E293B] text-white p-4 flex justify-between items-center'>
        <div className='flex items-center gap-2'>
            <Image
            className='w-20'
            src='/pssf-logo.png' alt='logo' width={100} height={100}/>
            <div className='flex flex-col'>
                <span className='text-2xl font-bold'>Pheshalom</span>
                <span className='text-sm font-bold text-[#EE2A7B]'>Stainless Steel Fabricators</span>
            </div>
        </div>
        <div className='flex items-center gap-2'>
            <Headset/>
            <div className='flex flex-col'>
                <span className='text-sm text-[#EE2A7B]'>Call us 7:00am - 6:00pm</span>
                <span className='text-sm font-bold'>0713-411-817</span>
            </div>
        </div>
        <div className='flex items-center gap-2'>
            <Clock/>
            <div className='flex flex-col'>
                <span className='text-sm text-[#EE2A7B]'>Open:Monday-Friday</span>
                <span className='text-sm font-bold'>7:00am - 6:00pm</span>
            </div>
        </div>
            <div className='flex items-center gap-2'>
                <Mail/>
                <div className='flex flex-col'>
                    <span className='text-sm text-[#EE2A7B]'>Send Us Email</span>
                    <span className='text-sm font-bold'>pheshalomfabricators@gmail.com</span>
                </div>
            </div>
    </div>
  )
}
