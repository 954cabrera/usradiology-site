'use client';

import Image from 'next/image';
import Counter from '@/components/ui/counter';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 px-6 py-16 max-w-5xl mx-auto space-y-20">

      {/* Hero */}
      <section className="space-y-6 text-center animate-fade-in-scroll">
        <h1 className="text-4xl font-semibold">About USRadiology</h1>
        <p className="text-lg text-gray-600">
          We're building a new kind of healthcare — one that puts people first. Rooted in empathy, backed by expertise, and powered by purpose.
        </p>
      </section>

      {/* Founder */}
      <section className="flex flex-col md:flex-row items-center gap-8 animate-fade-in-scroll delay-[100ms]">
        <div className="relative w-48 h-48 rounded-full overflow-hidden border border-gray-300 shadow-md ring-1 ring-white group shrink-0">
          <Image
            src="/images/michael.jpg"
            alt="Founder Photo"
            fill
            sizes="192px"
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-medium">Meet the Founder</h2>
          <p className="text-gray-700 leading-relaxed">
            Michael Cabrera’s entrepreneurial journey began at age 13 on a red Raleigh bicycle, delivering newspapers. That early hustle evolved into two decades of leadership in healthcare, where he’s scaled national companies using a clear operational framework: People, Strategy, Execution, and Cash.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As a graduate of MIT’s Entrepreneurial Masters Program, Michael built a radiology startup that grew 1,236% before being acquired by a public company. But beyond the numbers, he’s known for leading with empathy, cultivating resilient teams, and merging purpose with performance.
          </p>
          <p className="text-gray-700 leading-relaxed">
            His values extend beyond business. Through employee-led philanthropy, he championed causes like Cystic Fibrosis and Autism. Recognized by Inc. Magazine and the South Florida Business Journal, Michael continues to mentor rising leaders while staying anchored in mission.
          </p>
          <blockquote className="border-l-4 border-[#E6C378] pl-4 italic text-gray-600 text-lg mt-4">
            “Healthcare is personal. Let’s treat it that way — with clarity, compassion, and urgency.”
          </blockquote>
        </div>
      </section>

      {/* Recognition */}
      <section className="bg-[#f9f9f6] border border-gray-200 rounded-xl p-6 shadow-sm space-y-4 animate-fade-in-scroll delay-[200ms]">
        <h3 className="text-xl font-semibold text-gray-800">Highlights & Recognition</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li>🏆 Entrepreneur of the Year – South Florida Business Journal</li>
          <li>📈 INC 500 – Fastest Growing Private Companies (#210)</li>
          <li>💼 1,236% Startup Growth → Acquired by Public Company</li>
          <li>🎓 Graduate, MIT Entrepreneurial Masters Program</li>
          <li>🌱 Founder, Employee-Led Philanthropy Initiative</li>
          <li>🎤 Mentor, FIU Inspiring Futures Program</li>
        </ul>
        <div className="text-center pt-4">
          <a
            href="/docs/founder-presskit.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#003087] text-white px-6 py-2 rounded-full hover:bg-[#00256e] transition"
          >
            Download Press Kit
          </a>
        </div>
      </section>

      {/* Mission, Vision, Promise */}
      <section className="space-y-6 animate-fade-in-scroll delay-[300ms]">
        <h2 className="text-2xl font-medium text-center">Our Mission, Vision & Promise</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-[#f9f9f6] p-6 rounded-xl border shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-[#003087] mb-2">Our Mission</h3>
            <p className="text-sm text-gray-700">
              To radically improve access to affordable, high-quality medical imaging — with transparency, empathy, and innovation at the core of every interaction.
            </p>
          </div>
          <div className="bg-[#f9f9f6] p-6 rounded-xl border shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-[#003087] mb-2">Our Vision</h3>
            <p className="text-sm text-gray-700">
              A future where no patient delays care due to confusion, cost, or access — and where imaging centers thrive by aligning around shared values.
            </p>
          </div>
          <div className="bg-[#f9f9f6] p-6 rounded-xl border shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-[#003087] mb-2">Our Promise</h3>
            <p className="text-sm text-gray-700">
              We treat every patient like family, offer honest pricing, and champion a care experience grounded in dignity, trust, and results.
            </p>
          </div>
        </div>
      </section>

      {/* Animated Impact Number */}
      <section className="text-center pt-12 animate-fade-in-scroll delay-[400ms]">
        <Counter title="Procedures Performed Nationwide" end={400000} suffix="+" />
        <p className="text-gray-600 mt-4 mb-6 text-sm">
          From launch to acquisition, we served over 400,000 imaging procedures — one scan, one story at a time.
        </p>
      </section>

      {/* Why Centers Partner */}
      <section className="space-y-6 text-center animate-fade-in-scroll delay-[450ms]">
        <h2 className="text-2xl font-medium">Why Centers Partner with USRadiology</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Imaging centers join USRadiology to unlock volume, operational simplicity, and mission-aligned growth. We send ready-to-schedule, self-pay patients directly to your door — no middlemen, no platform fees.
        </p>
        <p className="text-gray-700 max-w-3xl mx-auto">
          With streamlined workflows, digital scheduling, and full transparency, we remove the friction so centers can focus on what they do best: delivering exceptional imaging care.
        </p>
      </section>

      {/* Final Call to Action */}
      <section className="text-center pt-12 animate-fade-in-scroll delay-[500ms]">
        <h3 className="text-xl font-semibold">Join us in changing healthcare for good.</h3>
        <p className="text-gray-600 mt-2 mb-4">
          Whether you're a center ready to grow or a patient seeking clarity — we're here to connect you to care that works.
        </p>
        <Link href="/contact" passHref legacyBehavior>
          <a className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Contact Us
          </a>
        </Link>
      </section>

    </div>
  );
}
