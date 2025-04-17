import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Top Utility Bar */}
        <div className="w-full bg-[#003087] text-white text-[10px] px-4 py-1 flex justify-end items-center gap-4 relative">
          {/* Toll-Free Dropdown */}
          <div className="relative group cursor-pointer z-60">
            <span className="flex items-center gap-1 hover:underline">
              <span>📞</span>
              <span>1-800-USRAD-24</span>
            </span>
            <div className="absolute right-0 mt-2 z-50 opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 min-w-[200px] bg-white text-black shadow-md rounded-md overflow-visible whitespace-nowrap">
              <a href="tel:1-800-USRAD-24" className="block px-4 py-2 hover:bg-[#f9f4e6]">📞 Call Us</a>
              <a href="mailto:hello@usrad.com" className="block px-4 py-2 hover:bg-[#f9f4e6]">✉️ Email Us</a>
              <a href="/locations" className="block px-4 py-2 hover:bg-[#f9f4e6]">🧭 Find a Location</a>
              <a href="/contact" className="block px-4 py-2 hover:bg-[#f9f4e6]">📄 Contact Form</a>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="relative">
            <select
              defaultValue="English"
              className="bg-[#003087] text-white border-none outline-none"
            >
              <option value="English" hidden>🌐 English</option>
              <option value="Spanish">🌐 Spanish</option>
            </select>
          </div>

          {/* Log In Dropdown */}
          <div className="relative group cursor-pointer z-50">
            <span className="flex items-center gap-1">
              <span className="inline-block w-4 h-4 rounded-full bg-white text-black flex items-center justify-center text-[10px]">👤</span>
              Log In ⌄
            </span>
            <div className="absolute right-0 mt-2 z-50 opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 min-w-[200px] bg-white text-black shadow-md rounded-md overflow-visible whitespace-nowrap">
              <div className="block px-4 py-2 hover:bg-[#f9f4e6] whitespace-nowrap">
                <div className="font-semibold">Patient Log In</div>
                <div className="text-[10px] text-gray-500 mt-1">Secure access to your results and records.</div>
              </div>
              <div className="block px-4 py-2 hover:bg-[#f9f4e6] whitespace-nowrap">
                <div className="font-semibold">Imaging Center Log In</div>
                <div className="text-[10px] text-gray-500 mt-1">Access tools, reports, and appointments.</div>
              </div>
              <div className="block px-4 py-2 hover:bg-[#f9f4e6] whitespace-nowrap">
                <div className="font-semibold">Referring Physician Log In</div>
                <div className="text-[10px] text-gray-500 mt-1">Your portal to manage imaging referrals and reports.</div>
              </div>
              <div className="border-t border-gray-200 px-4 py-2 text-[10px] text-gray-600 animate-fade-in-down transition duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] animate-bounce-in delay-500">
                <span className="block mb-1 animate-pulse text-gray-700">Interested in joining the USRadiology network?</span>
                <Link href="/partner" className="text-blue-600 underline text-[11px] font-medium inline-flex items-center transition-transform duration-300 hover:text-blue-800 hover:translate-x-1 hover:scale-105 hover:drop-shadow-[0_0_6px_rgba(0,123,255,0.5)]">
                  <span className="motion-safe:animate-fade-in">🌟 Explore Partnership →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Nav Bar */}
        <header className="relative w-full py-2 px-6 flex items-center text-white sticky top-0 z-40 bg-[#003087] border-b border-[#003087]">
          {/* Logo */}
          <Link href="/" className="flex items-center py-1">
            <Image
              src="/logo/usrad-logo-trans-yell-white.png"
              alt="USRadiology"
              width={160}
              height={38}
              priority
            />
          </Link>

          {/* Nav Centered Absolutely */}
         <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6 text-sm font-medium">
            <Link href="/model" className="text-white/90 hover:text-[#E6C378] transition">Our Model</Link>
            <a href="#pricing" className="text-white/90 hover:text-[#E6C378] transition">Pricing</a>
            <a href="#locations" className="text-white/90 hover:text-[#E6C378] transition">Locations</a>
            <Link href="/about" className="text-white/90 hover:text-[#E6C378] transition">About</Link>

          </nav>

        </header>

        {children}
      </body>
    </html>
  );
}
