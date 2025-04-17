'use client';

import { CheckCircle, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const traditional = [
  "Prices can range from $1,200 to $7,000 — even with insurance.",
  "Low transparency. Surprise billing is common.",
  "Outdated equipment at some centers.",
  "Difficult to know who reads your scan.",
  "No help matching you to the right center.",
];

const usradiology = [
  "Pricing starts under $400 — transparent and upfront.",
  "No surprise bills. Know the cost before you book.",
  "Only modern, accredited imaging centers.",
  "Board-certified radiologists. No shortcuts.",
  "SmartMatch™ matches you based on your scan and needs.",
];

export default function OurModel() {
  return (
    <section className="bg-[#0E1B2A] py-24 px-4 text-white text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-[#E6C378]">Our way is simple.</h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Fast scheduling, no surprise bills, and the highest clinical standards — backed by real people who care.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Traditional Model */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-[#1A2736] p-6 rounded-2xl border border-gray-700"
          >
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">The Traditional Way</h3>
            <ul className="space-y-3">
              {traditional.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <AlertTriangle className="mt-1 text-red-500" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* USRadiology Model */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl border border-[#E6C378]/40"
          >
            <h3 className="text-2xl font-semibold text-[#0E1B2A] mb-4 text-center">The USRadiology Way</h3>
            <ul className="space-y-3">
              {usradiology.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-800">
                  <CheckCircle className="mt-1 text-[#E6C378]" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
