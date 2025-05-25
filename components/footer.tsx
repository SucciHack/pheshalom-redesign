import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Headset, Instagram, Linkedin, Mail, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1E293B] text-white">
      <div className="container px-4 py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className='flex items-center gap-2'>
                        <Image
                        className='w-20'
                        src='/pssf-logo.png' alt='logo' width={100} height={100}/>
                        <div className='flex flex-col'>
                            <span className='text-2xl font-bold'>Pheshalom</span>
                            <span className='text-sm font-bold text-[#EE2A7B]'>Stainless Steel Fabricators</span>
                        </div>
                    </div>
            <p className="text-sm text-white/90">
              Trusted in more than 100 countries & 5 million customers. Have any
              query? contact us we are here for you.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="rounded-full bg-white p-2 hover:bg-white/90"
              >
                <Twitter className="h-4 w-4 text-[#6366F1]" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-white p-2 hover:bg-white/90"
              >
                <Instagram className="h-4 w-4 text-[#6366F1]" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-white p-2 hover:bg-white/90"
              >
                <Linkedin className="h-4 w-4 text-[#6366F1]" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-white p-2 hover:bg-white/90"
              >
                <Youtube className="h-4 w-4 text-[#6366F1]" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Get In Touch</h3>
            <div className="space-y-2 text-sm">
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
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link className="hover:underline" href="/">
                  Home
                </Link>
                <Link className="hover:underline" href="/about">
                    About Us
                </Link>
                <Link className="hover:underline" href="/services">
                    Services
                </Link>
                <Link className="hover:underline" href="/contact us">
                    Contact Us
                </Link>
              </nav>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <form className="space-y-2">
              <Input
                className="bg-white/10 border-white/20 placeholder:text-white/50"
                placeholder="Enter email.."
                type="email"
              />
              <Button
                className="w-full bg-white text-[#6366F1] hover:bg-white/90"
                type="submit"
              >
                Subscribe
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-center gap-4 py-6 text-center text-sm md:h-16 md:flex-row md:py-0">
          <div className="text-white/60">
            Copyright@2023 All Right Reserved Pagedone.
          </div>
        </div>
      </div>
    </footer>
  );
}
