"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.h2
          className="text-2xl font-semibold mb-4 text-[#0E1B2A]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>
        <p className="text-gray-600 mb-6">
          We’re here to answer any questions you have about Lumana.
        </p>
        <motion.div
          className="space-y-4 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Input type="text" placeholder="Your Name" className="w-full" />
          <Input type="email" placeholder="Email Address" className="w-full" />
          <Input type="tel" placeholder="Phone Number" className="w-full" />
          <Input type="text" placeholder="Your Message" className="w-full" />
          <Button className="mt-4 w-full">Send Message</Button>
        </motion.div>
      </div>
    </section>
  );
}
