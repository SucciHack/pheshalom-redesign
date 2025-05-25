'use client'
import MainNav from '@/components/mainNav'
import TopNav from '@/components/topNav'
import { Badge, ChefHat, Stethoscope, Wrench } from 'lucide-react';
import React, { useEffect, useState } from 'react'

export default function page() {
    const [scrolled, setScrolled] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 10);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
      const services = [
        {
            id: "commercial-kitchen",
            title: "Commercial Kitchen Products",
            icon: ChefHat,
            description:"Professional-grade stainless steel kitchen equipment designed for commercial use. From prep tables to custom storage solutions, we deliver durability and functionality.",
            mainImage: "/placeholder.svg?height=400&width=600",
            gallery: [
                "/placeholder.svg?height=200&width=300",
                "/placeholder.svg?height=200&width=300",
                "/placeholder.svg?height=200&width=300",
                "/placeholder.svg?height=200&width=300",
                "/placeholder.svg?height=200&width=300",
                "/placeholder.svg?height=200&width=300",
            ],
            features: ["Custom Design", "Food Grade Steel", "Easy Maintenance", "Hygienic Standards"],
        },{
            id: "medical-equipment",
            title: "Medical & Hospital Equipment",
            icon: Stethoscope,
            description:
                "Medical-grade stainless steel equipment meeting the highest hygiene and safety standards for healthcare facilities and laboratories.",
            mainImage: "/placeholder.svg?height=400&width=600",
            gallery: [
                "/placeholder.svg?height=200&width=300",
                "/placeholder.svg?height=200&width=300",
                "/placeholder.svg?height=200&width=300",
                "/placeholder.svg?height=200&width=300",
                "/placeholder.svg?height=200&width=300",
                "/placeholder.svg?height=200&width=300",
            ],
            features: ["Medical Grade", "Antimicrobial", "Precision Engineering", "Compliance Ready"],
        },{
            id: "steel-fabrication",
            title: "Stainless Steel Fabrication",
            icon: Wrench,
            description:
                "Custom stainless steel fabrication services for industrial, commercial, and architectural applications. From concept to completion.",
            mainImage: "/placeholder.svg?height=400&width=600",
            gallery: [
                "/placeholder.svg?height=200&width=300",
                "/placeholder.svg?height=200&width=300",
                "/placeholder.svg?height=200&width=300",
                "/placeholder.svg?height=200&width=300",
                "/placeholder.svg?height=200&width=300",
                "/placeholder.svg?height=200&width=300",
            ],
            features: ["Custom Welding", "Precision Cutting", "Quality Finishing", "Project Management"],
        }
      ]
  return (
   <div className='bg-[#F3F4F6] min-h-screen'>
         <TopNav/>
         <div className='relative'>
           <div className={`sticky top-0 z-50 ${
           scrolled ? "backdrop-blur-md shadow-md" : "bg-transparent"
         }`}>
             <MainNav/>
           </div>
         </div>
        {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="space-y-32">
                {services.map((service, index) => (
                    <div key={service.id} className="group">
                        <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                    {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{service.title}</h2>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed">{service.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <Badge key={feature} className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {/* You can add an image or gallery here if needed */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
