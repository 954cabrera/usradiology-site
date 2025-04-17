'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import SmartMatch from "@/components/smartmatch";
import HowItWorks from "@/components/how-it-works";
import OurModel from "@/components/our-model";
import WhyItCostsLess from "@/components/why-it-costs-less";
import PromiseBanner from "@/components/promise-banner";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800 pb-15">
      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-blue-900 text-white py-2 px-4 flex justify-between items-center z-50 shadow-md">
        <span className="text-sm font-medium">Need an MRI? Book today and save.</span>
        <Button className="bg-white text-blue-600 hover:bg-gray-100">Schedule Now</Button>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-[#0E1B2A] text-[#E6C378]">
        <Image
          src="/images/patient-smiling.jpg"
          alt="Smiling patient"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0E1B2A]/30 z-0" />
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-end px-6 md:px-12 text-right z-10 max-w-4xl ml-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Affordable Imaging.<br />
            Trusted Care.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-md text-[#F1D8A1]">
            High-quality MRIs without the high price. No insurance required. Transparent pricing and fast results.
          </p>

          {/* Glowing SmartMatch Badge */}
          <div className="mt-4">
            <span className="inline-block bg-white text-[#0E1B2A] text-sm font-semibold px-4 py-2 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.5)] animate-pulse">
              Powered by <span className="italic">SmartMatch<sup className="text-[10px] align-super">™</sup></span>
            </span>
          </div>


          <div className="mt-10 flex flex-wrap gap-4 justify-end">
            <Button className="bg-[#E6C378] text-[#0E1B2A] hover:bg-[#CFA85E] px-6 py-3">
              Get Started
            </Button>
            <Button
              variant="ghost"
              className="text-[#F1D8A1] border border-[#E6C378] bg-transparent hover:bg-[#f1d8a118] hover:text-[#E6C378] px-6 py-3 transition"
            >
              View Pricing
            </Button>
          </div>
        </motion.div>
      </section>

      {/* SmartMatch Section */}
      <SmartMatch />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Our Model */}
      <OurModel />

      {/* Why It Costs Less */}
      <WhyItCostsLess />

      {/* Promise Banner */}
      <PromiseBanner />

      {/* Pricing Transparency Section */}
      <section id="pricing" className="py-20 bg-[#F1D8A1] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4 text-[#0E1B2A]">Transparent Pricing</h2>
          <p className="text-[#3b3b3b] mb-6">Know what you’ll pay. No hidden fees. Ever.</p>
          <Card className="shadow-lg border border-[#E6C378]">
            <CardContent className="p-6">
              <p className="text-lg font-medium text-[#0E1B2A]">MRI Scan</p>
              <p className="text-4xl font-bold text-[#0E1B2A] mt-2 mb-2">$599</p>
              <p className="text-sm text-[#333]">All-inclusive: includes scan, radiologist report, and digital access.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="text-left">
            <AccordionItem value="item-1">
              <AccordionTrigger>Do I need a referral?</AccordionTrigger>
              <AccordionContent>No, you can book directly with us without a referral.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How soon can I get scanned?</AccordionTrigger>
              <AccordionContent>Most appointments are available within 1-3 days.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Are radiologist reports included?</AccordionTrigger>
              <AccordionContent>Yes, all scans include expert interpretation and results.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">We’re here to answer any questions you have about USRadiology.</p>
          <div className="space-y-4 text-left">
            <Input type="text" placeholder="Your Name" className="w-full" />
            <Input type="email" placeholder="Email Address" className="w-full" />
            <Input type="tel" placeholder="Phone Number" className="w-full" />
            <Input type="text" placeholder="Your Message" className="w-full" />
            <Button className="mt-4 w-full">Send Message</Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12">News & Insights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">USRadiology Expands to Dallas</h3>
                <p className="text-sm text-gray-600">We’re proud to open a new center in Dallas, bringing affordable imaging to even more people.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Understanding Your MRI</h3>
                <p className="text-sm text-gray-600">Learn how MRIs work and why our technology is trusted across the country.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-10 text-center text-sm text-gray-600">
        <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
          <p>&copy; {new Date().getFullYear()} USRadiology. All rights reserved.</p>
          <div className="flex justify-center gap-4 text-gray-400">
            <a href="#" className="hover:text-blue-600"><Facebook size={20} /></a>
            <a href="#" className="hover:text-blue-600"><Twitter size={20} /></a>
            <a href="#" className="hover:text-blue-600"><Instagram size={20} /></a>
            <a href="#" className="hover:text-blue-600"><Linkedin size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
