'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ModelPage() {
  return (
    <div className="bg-white text-gray-800 pb-20">

      {/* Header Section */}
      <section className="relative">
        <div className="w-full h-[400px] relative">
          <Image
            src="/images/model/hero.jpg"
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">A Smarter Model for Imaging Care</h1>
          <p className="text-lg text-gray-600">
            At USRadiology, we believe diagnostic imaging should be precise, affordable, and accessible to everyone — not just the insured or well-connected.
            We combine clinical excellence with operational efficiency to ensure that every scan delivers value to the patient, provider, and payor.
          </p>
        </div>
      </section>

      {/* Pillars of Impact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-12">Our Pillars of Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Affordability */}
            <div className="text-center">
              <Image
                src="/images/model/pillars1.jpg"
                alt="Affordability"
                width={112}
                height={112}
                className="mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold mb-2">Affordability</h3>
              <p className="text-sm text-gray-600">
                Transparent, all-in pricing. No hidden fees. Accessible to self-pay and underinsured patients.
              </p>
            </div>

            {/* Precision */}
            <div className="text-center">
              <Image
                src="/images/model/pillars2.jpg"
                alt="Precision"
                width={112}
                height={112}
                className="mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold mb-2">Precision</h3>
              <p className="text-sm text-gray-600">
                Board-certified radiologists. Industry-standard imaging protocols. Quality care, always.
              </p>
            </div>

            {/* Access */}
            <div className="text-center">
              <Image
                src="/images/model/pillars3.jpg"
                alt="Access"
                width={112}
                height={112}
                className="mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold mb-2">Access</h3>
              <p className="text-sm text-gray-600">
                Centers across metro and underserved areas. Mobile imaging extends our reach into rural communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-10">Who We Serve</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            
            {/* Patients */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <Image
                src="/images/model/audience_card_1.jpg"
                alt="Patient"
                width={112}
                height={112}
                className="mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold mb-2">Patients</h3>
              <p className="text-sm text-gray-600">
                USRadiology exists to serve patients who are too often left behind by the current system. Whether uninsured, underinsured, or simply priced out of traditional facilities, our model offers a path to timely and trustworthy diagnostics.
              </p>
            </div>

            {/* Employers & Health Plans */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <Image
                src="/images/model/audience_card_2.jpg"
                alt="Employers"
                width={112}
                height={112}
                className="mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold mb-2">Employers & Health Plans</h3>
              <p className="text-sm text-gray-600">
                We reduce imaging costs for self-funded plans and high-utilization populations by offering rate transparency and measurable quality. Our model improves outcomes while lowering financial risk.
              </p>
            </div>

            {/* Community Health Providers */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <Image
                src="/images/model/audience_card_3.jpg"
                alt="Community Providers"
                width={112}
                height={112}
                className="mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold mb-2">Community Health Providers</h3>
              <p className="text-sm text-gray-600">
                FQHCs, rural clinics, and nonprofit systems benefit from streamlined referrals, collaborative reporting, and improved access for their patients. USRadiology strengthens the frontlines of care.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <Image
            src="/images/model/difference.jpg"
            alt="What Makes Us Different"
            width={1200}
            height={400}
            className="rounded-xl mb-10 object-cover w-full"
          />
          <h2 className="text-2xl font-semibold text-center mb-10">What Makes Us Different</h2>
          <ul className="space-y-4 text-sm text-gray-700 list-disc list-inside">
            <li><strong>Mission-driven</strong>, independent from hospitals and referral conflicts.</li>
            <li><strong>Value-based imaging</strong> — high-quality, cost-effective scans that support better outcomes.</li>
            <li><strong>Invested in underserved markets</strong>, not just high-income zip codes.</li>
            <li><strong>Imaging as a front door to equity</strong> — not a barrier to it.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Image
            src="/images/model/cta.jpg"
            alt="CTA"
            width={1200}
            height={400}
            className="rounded-xl mb-10 object-cover w-full"
          />
          <h2 className="text-2xl font-bold mb-4">Ready to partner with a smarter model of care?</h2>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Button className="text-base px-6 py-3">Connect With USRadiolgy</Button>
            <Button variant="outline" className="text-base px-6 py-3">Refer Patients</Button>
            <Button variant="ghost" className="text-base px-6 py-3">Explore Partnership Options</Button>
          </div>
        </div>
      </section>

    </div>
  );
}

