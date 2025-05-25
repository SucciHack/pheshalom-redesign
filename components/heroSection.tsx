"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const navigation = [
  { name: "Marketing", href: "#" },
  { name: "Application UI", href: "#" },
  { name: "Ecommerce", href: "#" },
  { name: "Documentation", href: "#" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="min-h-screen bg-white">

      <main>
        <div className="relative pt-24 lg:pt-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 md:pb-24">
              {/* Left column - Content - Now spanning 5 columns on lg screens */}
              <div className="flex flex-col justify-center lg:col-span-5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                  Strength Meets
                  <br className="hidden lg:block" /> Style in Stainless
                  <br className="hidden lg:block" /> Steel
                </h1>

                <p className="text-base sm:text-lg text-gray-600">
                  Combining unmatched strength, modern design, and expert precision — every weld we craft reflects our commitment to quality, durability, and innovation in stainless steel fabrication.
                </p>

                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-x-6">
                  <Link
                    href="#"
                    className="rounded-md bg-[#EE2A7B] px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-red-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 text-center sm:text-left"
                  >
                    View All Services
                  </Link>
                </div>
              </div>

              {/* Right column - Images grid - Now spanning 7 columns on lg screens */}
              <div className="relative lg:col-span-7">
                <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px]">
                  {/* Top right image */}
                  <div className="absolute right-0 top-0 w-[45%] h-[40%] overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="https://pheshalomstainlesssteelfabricators.netlify.app/images/sliders/slide-3.jpg"
                      alt="Person working on laptop"
                      className="h-full w-full object-cover"
                      width={600}
                      height={450}
                      loading="eager"
                    />
                  </div>

                  {/* Middle left image */}
                  <div className="absolute left-0 top-[20%] w-[50%] h-[45%] overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="https://img.freepik.com/premium-photo/commercial-fridge-with-transparent-glass-doors_493806-1354.jpg?ga=GA1.1.1179159415.1746524726&semt=ais_hybrid&w=740"
                      alt="Modern office space"
                      className="h-full w-full object-cover"
                      width={600}
                      height={450}
                    />
                  </div>

                  {/* Bottom right image */}
                  <div className="absolute right-[5%] top-[45%] w-[40%] h-[50%] overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="https://pheshalomstainlesssteelfabricators.netlify.app/images/Workshop/kitchen/kitchen-7.jpg"
                      alt="Analytics dashboard"
                      className="h-full w-full object-cover"
                      width={600}
                      height={400}
                    />
                  </div>

                  {/* Bottom left image */}
                  <div className="absolute left-[10%] bottom-0 w-[35%] h-[30%] overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="https://pheshalomstainlesssteelfabricators.netlify.app/images/Workshop/kitchen/kitchen-9.jpg"
                      alt="Team collaboration"
                      className="h-full w-full object-cover"
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
