'use client';

import { ShieldCheck, HeartHandshake, Clock4 } from "lucide-react";

export default function PromiseBanner() {
  return (
    <section className="bg-[#0E1B2A] text-white py-14 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-4xl font-semibold mb-4 text-[#E6C378]">
          Our Promise to You
        </div>
        <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
          You’ll get scheduled quickly. You’ll know exactly what you’re paying. Your scan will be done right — or we’ll make it right. Guaranteed.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-left max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <ShieldCheck className="text-[#E6C378]" size={28} />
            <div>
              <p className="text-white font-semibold">100% Quality Guarantee</p>
              <p className="text-sm text-gray-400">We vet every scan. If it’s not right, we’ll fix it — no cost to you.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock4 className="text-[#E6C378]" size={28} />
            <div>
              <p className="text-white font-semibold">Fast Turnaround</p>
              <p className="text-sm text-gray-400">Most appointments happen same or next day, with results in 24–48 hours.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <HeartHandshake className="text-[#E6C378]" size={28} />
            <div>
              <p className="text-white font-semibold">We’re With You</p>
              <p className="text-sm text-gray-400">Real people, real support — at every step, with your best interest first.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
