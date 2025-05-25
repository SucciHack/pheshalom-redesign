import Link from 'next/link'
import React from 'react'

export default function MainNav() {
    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact Us', href: '/contact' }
    ]
  return (
    <div className='absolute top-0 left-60 w-full bg-[#1E293B] p-4 px-6 shadow-md mx-16 mt-3 rounded-full flex justify-between max-w-3xl mx-auto'> 
      {
        navItems.map((item,i)=>{
            return(
                <Link key={i} href={item.href} className='text-white font-semibold hover:text-[#EE2A7B] transition-colors duration-300 relative underline-animation' >
                    {item.name}
                </Link>
            )
        })
      }
    </div>
)}
