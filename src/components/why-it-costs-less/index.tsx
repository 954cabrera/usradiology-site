'use client';

import { ReceiptText, Clock, ShieldCheck, Smile } from "lucide-react";

const features = [
  {
    icon: <ReceiptText size={28} className="text-[#E6C378]" />,
    title: "One Upfront Price",
    text: "Your total price includes everything — the scan and the radiologist report. No hidden fees. No surprise bills.",
  },
  {
    icon: <Clock size={28} className="text-[#E6C378]" />,
    title: "Fast Scheduling",
    text: "We handle everything for you. Most patients get scheduled same or next day — no waiting, no stress.",
  },
  {
    icon: <ShieldCheck size={28} className="text-[#E6C378]" />,
    title: "Guaranteed Quality",
    text: "We carefully vet every imaging center. Your scan is complete, clear, and reviewed by top radiologists. If something’s not right, we fix it.",
  },
  {
    icon: <Smile size={28} className="text-[#E6C378]" />,
    title: "100% Money-Back Guarantee",
    text: "If your scan isn’t completed within 90 days, we’ll refund you — no questions asked.",
  },
];


export default function WhyItCostsLess() {
  return (
    <section className="bg-white py-24 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-[#0E1B2A]">
          Why It Costs Less — and Why It Matters
        </h2>
        <p className="text-lg text-gray-700 mb-16 max-w-2xl mx-auto">
          USRadiology doesn’t cut corners to cut costs. We negotiate volume-based pricing — then build in a layer of care, quality, and confidence you won’t find anywhere else.
        </p>

        <div className="space-y-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-[#FAF5EB] px-8 py-6 rounded-2xl flex flex-col md:flex-row items-center md:items-start text-left shadow-sm border border-[#E6C378]/20"
            >
              <div className="mb-4 md:mb-0 md:mr-6">{f.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-[#0E1B2A] mb-2">{f.title}</h3>
                <p className="text-gray-700 text-sm">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
