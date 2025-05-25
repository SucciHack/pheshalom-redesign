'use client'
import Faq from '@/components/faq'
import Footer from '@/components/footer'
import HeroSection from '@/components/heroSection'
import MainNav from '@/components/mainNav'
import ProductsCategory from '@/components/products-category-section'
import WorkshopSection from '@/components/work-shop-section'

export default function Page() {

  return (
    <div className='bg-[#F3F4F6] min-h-screen'>
      <div className='relative'>
        <HeroSection/>
      </div>
      <ProductsCategory/>
      <WorkshopSection/>
      <Faq/>
    </div>
  )
}
