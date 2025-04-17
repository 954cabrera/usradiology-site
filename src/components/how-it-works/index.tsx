'use client';

import { motion } from "framer-motion";
import { CalendarDays, MapPin, CreditCard, Stethoscope } from "lucide-react";

// 1️⃣ Step data with refined wording
const steps = [
  {
    icon: <Stethoscope size={32} className="text-[#E6C378]" />,
    title: "Tell Us What You Need",
    description: "Pick your scan — like a brain, knee, or spine MRI. No referral needed. A prescription is still required.",
  },
  {
    icon: <MapPin size={32} className="text-[#E6C378]" />,
    title: "Get Matched Instantly",
    description: "SmartMatch™ finds the best nearby imaging center for your scan and diagnosis.",
  },
  {
    icon: <CreditCard size={32} className="text-[#E6C378]" />,
    title: "See Your Price, Lock It In",
    description: "No hidden fees. You’ll know exactly what you’ll pay — often under $400.",
  },
  {
    icon: <CalendarDays size={32} className="text-[#E6C378]" />,
    title: "Go Get Scanned",
    description: "Show up, get scanned, and receive results fast — interpreted by expert radiologists.",
  },
];

// 2️⃣ Component
export default function HowItWorks() {
  return (
    <section className="bg-white py-24 px-4 text-center">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-4 text-[#0E1B2A]">How USRadiology Works</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          From booking to results, we simplify the process without compromising on quality.
        </p>

        {/* Grid of Steps */}
        <div className="grid gap-y-10 gap-x-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const direction = index % 3 === 0 ? -30 : index % 3 === 2 ? 30 : 0;

            return (
              <motion.div
                key={index}
                className="bg-[#FAF5EB] p-6 rounded-2xl shadow-sm border border-[#E6C378]/30"
                initial={{ opacity: 0, x: direction }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#0E1B2A]">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
