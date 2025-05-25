import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"

const cases = [
  {
    id: 1,
    title: "Relief Transportation For United Nations",
    subtitle: "Humanitarian Logistics",
    description:
      "Emergency logistics coordination for humanitarian aid delivery across multiple regions with 99.8% on-time delivery rate.",
    image: "https://pheshalomstainlesssteelfabricators.netlify.app/images/Workshop/kitchen/kitchen-9.jpg",
    category: "Emergency Response",
  },
  {
    id: 2,
    title: "200 Metric Ton Grain Freight",
    subtitle: "Agricultural Export",
    description:
      "Large-scale agricultural commodity transportation with specialized handling and temperature-controlled storage solutions.",
    image: "https://img.freepik.com/premium-photo/commercial-fridge-with-transparent-glass-doors_493806-1354.jpg?ga=GA1.1.1179159415.1746524726&semt=ais_hybrid&w=740",
    category: "Agriculture",
  },
  {
    id: 3,
    title: "Container Shipping Network",
    subtitle: "International Trade",
    description:
      "International container shipping with full tracking, customs clearance, and end-to-end supply chain management.",
    image: "https://pheshalomstainlesssteelfabricators.netlify.app/images/sliders/slide-3.jpg",
    category: "Maritime",
  },
  {
    id: 4,
    title: "Automotive Parts Distribution",
    subtitle: "Manufacturing Support",
    description:
      "Just-in-time delivery system for automotive manufacturing with zero-defect logistics and real-time tracking.",
    image: "https://pheshalomstainlesssteelfabricators.netlify.app/images/Workshop/kitchen/kitchen-7.jpg",
    category: "Automotive",
  },
  {
    id: 5,
    title: "Pharmaceutical Cold Chain",
    subtitle: "Healthcare Logistics",
    description:
      "Temperature-controlled pharmaceutical distribution with FDA compliance and real-time monitoring systems.",
    image: "https://pheshalomstainlesssteelfabricators.netlify.app/images/Workshop/kitchen/kitchen-9.jpg",
    category: "Healthcare",
  },
]

export default function ProductsCategory() {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
          <h2 className="text-4xl font-bold text-slate-900 mb-2 mt-2">
            Products <span className="text-[#EE2A7B]">Category</span>
          </h2>

        {/* Carousel */}
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent className="-ml-6">
              {cases.map((caseItem) => (
                <CarouselItem key={caseItem.id} className="pl-6 py-5 md:basis-1/2 lg:basis-1/3">
                  <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden relative h-80 bg-transparent">
                    <CardContent className="p-0 relative h-full">
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${caseItem.image})`,
                        }}
                      />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/20" />

                      {/* Content Overlay */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                        {/* Top Section - Category */}
                        <div className="flex justify-between items-start">
                          <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                            {caseItem.category}
                          </span>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                              <ArrowUpRight className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Bottom Section - Content */}
                        <div className="space-y-3">
                          <div>
                            <p className="text-blue-300 font-semibold text-sm mb-1">{caseItem.subtitle}</p>
                            <h3 className="text-xl font-bold leading-tight mb-3">{caseItem.title}</h3>
                          </div>
                          <p className="text-white/90 text-sm leading-relaxed line-clamp-3">{caseItem.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-slate-50 border border-slate-200 shadow-lg w-12 h-12">
              <ChevronLeft className="h-5 w-5 text-slate-600" />
            </CarouselPrevious>

            <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-slate-50 border border-slate-200 shadow-lg w-12 h-12">
              <ChevronRight className="h-5 w-5 text-slate-600" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
