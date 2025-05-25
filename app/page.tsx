'use client'
import Faq from '@/components/faq'
import Footer from '@/components/footer'
import HeroSection from '@/components/heroSection'
import MainNav from '@/components/mainNav'
import ProductsCategory from '@/components/products-category-section'
import TopNav from '@/components/topNav'
import WorkshopSection from '@/components/work-shop-section'
import React, { useEffect, useState } from 'react'

export default function page() {

  return (
    <div className='bg-[#F3F4F6] min-h-screen'>
      <TopNav/>
      <div className='relative'>
        <div className={`sticky top-0 z-50
      }`}>
          <MainNav/>
        </div>
        <HeroSection/>
      </div>
      <ProductsCategory/>
      <WorkshopSection/>
      <Faq/>
      <Footer/>
    </div>
  )
}
