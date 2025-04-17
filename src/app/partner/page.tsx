import React from "react";
import Link from "next/link";

export default function PartnerWithUs() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Join a National Network Transforming Medical Imaging Access</h1>
        <p className="text-lg mb-8">Thousands of self-pay patients. Streamlined scheduling. Rapid reimbursements. 24/7 portal access.</p>
        <a href="#form" className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold py-3 px-6 rounded-full">Submit Your Center</a>
      </section>

      {/* Visitor Warning */}
      <div className="bg-yellow-50 border border-yellow-300 text-yellow-800 text-sm rounded-md p-4 mb-6 max-w-3xl mx-auto mt-8">
        <strong>Note:</strong> This section is for imaging centers interested in partnering with USRadiology. If you’re a patient looking to schedule an exam, <Link href="/" className="underline text-blue-600 hover:text-blue-800">click here</Link>.
      </div>

      {/* Why Join Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Imaging Centers Partner with USRadiology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            title: "High Patient Volume",
            text: "We direct a steady stream of self-pay patients to your center every week, increasing utilization without insurance hassles."
          }, {
            title: "Rapid Reimbursements",
            text: "Receive predictable payments quickly—no more chasing down claims or fighting denials."
          }, {
            title: "Seamless Scheduling",
            text: "Our centralized scheduling system makes it easy for your team and ours to coordinate patient care."
          }, {
            title: "Referring Physician Network",
            text: "Connect with physicians nationwide who refer directly through USRadiology’s platform."
          }, {
            title: "24/7 Portal Access",
            text: "Use our secure web-based portal to manage referrals, upload reports, and view real-time status updates."
          }].map(({ title, text }) => (
            <div key={title} className="bg-gray-50 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="bg-yellow-50 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">A Market Ripe for Transformation</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Over <span className="font-bold">90 million Americans</span> are currently uninsured or underinsured — and they’re seeking better, affordable access to diagnostic imaging. USRadiology is building that bridge.
        </p>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6 bg-white max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Pioneering Experience That Sets Us Apart</h2>
        <p>
          Our founder was one of the earliest innovators to create a dedicated medical imaging carve-out for Workers’ Compensation. This visionary approach helped establish the foundation for national imaging access in a previously underserved market — a legacy we’re proud to expand upon through USRadiology.
        </p>
      </section>

      {/* Workflow Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">How the Partnership Works</h2>
        <ol className="max-w-4xl mx-auto space-y-6 text-gray-800 list-decimal list-inside">
          {[
            "Apply: Submit your center’s info through our quick form.",
            "Review + Onboarding: We review qualifications and discuss a mutually beneficial arrangement.",
            "Agreement Finalized: Once terms are confirmed, onboarding begins.",
            "Referrals Begin: You start receiving patient referrals through USRadiology’s platform.",
            "Care Delivery: Your team performs imaging and uploads results.",
            "Reimbursement: We process payments quickly—usually within days.",
            "Ongoing Growth: As USRadiology scales, partners may access additional patient streams beyond self-pay."
          ].map((step, index) => (
            <li key={index} className="text-lg">{step}</li>
          ))}
        </ol>
      </section>

      {/* Form Section */}
      <section id="form" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Tell Us About Your Center</h2>
        <p className="text-center max-w-2xl mx-auto mb-10">
          We’re growing fast and seeking quality partners who are ready to grow with us. Fill out this quick form and our team will follow up with tailored information.
        </p>
        <form className="max-w-3xl mx-auto grid grid-cols-1 gap-6">
          <input type="text" placeholder="Center Name" className="border p-3 rounded" />
          <input type="text" placeholder="Contact Name + Title" className="border p-3 rounded" />
          <input type="email" placeholder="Email" className="border p-3 rounded" />
          <input type="tel" placeholder="Phone" className="border p-3 rounded" />
          <input type="text" placeholder="City + State" className="border p-3 rounded" />
          <input type="text" placeholder="Imaging Services (MRI, CT, etc.)" className="border p-3 rounded" />
          <input type="text" placeholder="Equipment Brands" className="border p-3 rounded" />
          <input type="text" placeholder="Avg Monthly Volume / Capacity" className="border p-3 rounded" />
          <textarea placeholder="Notes or Questions" className="border p-3 rounded h-28"></textarea>
          <button type="submit" className="bg-blue-800 text-white py-3 px-6 rounded-full hover:bg-blue-700">Request a Partnership Review</button>
        </form>
      </section>
    </div>
  );
}
