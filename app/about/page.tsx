import { ChefHat, Utensils, Stethoscope, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ServicesPage() {
  const services = [
    {
      id: "commercial-kitchen",
      title: "Commercial Kitchen Products",
      icon: ChefHat,
      description:
        "Professional-grade stainless steel kitchen equipment designed for commercial use. From prep tables to custom storage solutions, we deliver durability and functionality.",
      mainImage: "https://pheshalomstainlesssteelfabricators.netlify.app/images/Workshop/workshop.jpg",
      gallery: [
        "https://pheshalomstainlesssteelfabricators.netlify.app/images/Workshop/Stainless-Steel-Welding.jpg",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
      features: ["Custom Design", "Food Grade Steel", "Easy Maintenance", "Hygienic Standards"],
    },
    {
      id: "commercial-bakery",
      title: "Commercial Bakery Products",
      icon: Utensils,
      description:
        "Specialized bakery equipment and fixtures crafted from premium stainless steel. Perfect for bakeries, patisseries, and food production facilities.",
      mainImage: "/placeholder.svg?height=400&width=600",
      gallery: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
      features: ["Temperature Resistant", "Custom Sizing", "Professional Grade", "Easy Cleaning"],
    },
    {
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
    },
    {
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
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">   

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
                        <service.icon className="w-6 h-6 text-[#EE2A7B]" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{service.title}</h2>
                    </div>

                    <p className="text-lg text-slate-600 leading-relaxed">{service.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="bg-blue-50 text-[#EE2A7B] hover:bg-blue-100">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button size="lg" className="bg-[#EE2A7B] hover:bg-red-500/50">
                        View Details
                      </Button>
                      <Button size="lg" variant="outline" className="border-[#EE2A7B] text-[#EE2A7B] hover:bg-red-500/50">
                        Request Quote
                      </Button>
                    </div>
                  </div>

                  {/* Images */}
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    {/* Main Image */}
                    <Card className="overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                      <CardContent className="p-0">
                        <img
                          src={service.mainImage || "/placeholder.svg"}
                          alt={service.title}
                          className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </CardContent>
                    </Card>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      {service.gallery.map((image, imgIndex) => (
                        <Card
                          key={imgIndex}
                          className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
                        >
                          <CardContent className="p-0">
                            <img
                              src={image || "/placeholder.svg"}
                              alt={`${service.title} ${imgIndex + 1}`}
                              className="w-full h-24 md:h-32 object-cover hover:scale-110 transition-transform duration-300"
                            />
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
