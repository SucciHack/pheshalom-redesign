"use client"

import type React from "react"

import { useState } from "react"
import { Send, Phone, Mail, User, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    id: "item-1",
    question: "What is Stainless steel Grade Used?",
    answer:
      "Grade 304. Grade 304 stainless steel is generally regarded as the most common austenitic stainless steel. It contains high nickel content that is typically between 8 and 10.5 percent by weight and a high amount of chromium at approximately 18 to 20 percent by weight. Other major alloying elements include manganese, silicon, and carbon. The high amounts of chromium and nickel give 304 stainless steel excellent corrosion resistance. Common applications of 304 stainless steel include:Appliances such as refrigerators and dishwashers, Commercial food processing equipment, Fasteners, Piping, Heat exchangers, Structures in environments that would corrode standard carbon steel.",
  },
  {
    id: "item-2",
    question: "Do you install the Product?",
    answer:
      "Yes We Install the Product at a cost of 20% of the total Product cost.",
  },
  {
    id: "item-3",
    question: "How many types of Stainless steel are there?",
    answer:
      "Stainless steel (or Inox steel) can be divided into three main types; austenitic, ferritic and martensitic. The major difference between the three types being the level of Nickel used in its production. The most commonly used is austenitic, grades 304, 316 and 317 as they are the most resistant to corrosion.",
  },
]

export default function Faq() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    productList: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* FAQ Section */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-[#EE2A7B] mx-auto lg:mx-0 rounded-full"></div>
              <p className="mt-4 text-slate-600 text-lg">
                Find answers to common questions about our stainless steel products
              </p>
            </div>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
                  {faqData.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id} className="border-slate-200">
                      <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-blue-600 transition-colors duration-200 py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 leading-relaxed pb-4">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Quote Request Section */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-[#EE2A7B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Request a{" "}
                  <span className="text-transparent bg-clip-text bg-[#EE2A7B] to-purple-600">
                    Quote
                  </span>
                </CardTitle>
                <p className="text-slate-600 mt-2">Fill in your details and we'll get back to you shortly</p>
              </CardHeader>

              <CardContent className="p-6 pt-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      WhatsApp Number
                    </Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      placeholder="Enter your WhatsApp number"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                      className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="productList" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <Package className="w-4 h-4" />
                      List of Product(s) you want
                    </Label>
                    <Textarea
                      id="productList"
                      placeholder="Briefly outline the list of product(s) that you're interested in"
                      value={formData.productList}
                      onChange={(e) => handleInputChange("productList", e.target.value)}
                      className="min-h-[120px] border-slate-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-[#EE2A7B] hover:bg-red-500/50 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Request Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
