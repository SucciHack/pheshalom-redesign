import Image from "next/image"
import { ArrowRight, Award, Users, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function WorkshopSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://pheshalomstainlesssteelfabricators.netlify.app/images/Workshop/kitchen/kitchen-9.jpg"
                alt="Professional welder at work in modern workshop"
                width={600}
                height={400}
                className="aspect-[3/2] object-cover"
                priority
              />

              {/* Experience Badge */}
              <div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur-sm rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="h-6 w-6 text-amber-400" />
                  <span className="text-sm font-medium text-slate-300">Established</span>
                </div>
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm text-slate-300">Years of Excellence</div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 hidden sm:block">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-[#EE2A7B]" />
                    <span className="font-semibold">500+ Projects</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                <Wrench className="h-4 w-4" />
                Welcome to Our Workshop
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Precision Craftsmanship
                <span className="block text-[#EE2A7B]">Since 2014</span>
              </h1>

              <div className="h-1 w-20 bg-[#EE2A7B] rounded-full" />
            </div>

            {/* Description */}
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                With over a decade of expertise in precision welding and metalwork, we deliver exceptional craftsmanship
                that exceeds industry standards. Our state-of-the-art facility combines traditional techniques with
                cutting-edge technology.
              </p>
            </div>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
               Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional click through from Dev Ops. Nanotechnology immersion along the information highway will close the loop on focusing.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#EE2A7B] hover:bg-red-500/50 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                About Our Workshop
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-200 hover:border-emerald-600 hover:text-emerald-600 px-8 py-3 rounded-xl font-semibold transition-all duration-200"
              >
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
