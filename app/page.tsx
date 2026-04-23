"use client";

import Image from "next/image";
import { useState } from "react";

type Category = "All" | "Coupe" | "Sedan" | "MPV" | "SUV" | "Pickup" | "Hatchback";

interface Car {
  name: string;
  src: string;
  alt: string;
  price: string;
  category: Exclude<Category, "All">;
  grBadge?: boolean;
}

const CARS: Car[] = [
  // Coupe
  { name: "GR Supra", src: "/Toyota_GR_Supra_(51984008283crop).jpg", alt: "Toyota GR Supra", price: "Rp 2.237.600.000", category: "Coupe", grBadge: true },
  { name: "GR86", src: "/gr86.jpg", alt: "Toyota GR86", price: "Rp 984.000.000", category: "Coupe", grBadge: true },
  // Sedan
  { name: "Corolla Altis", src: "/toyota-corolla-altis-2015.jpg", alt: "Toyota Corolla Altis", price: "Rp 500.000.000", category: "Sedan" },
  { name: "Camry Hybrid", src: "/Toyota_Camry_2.5_Hybrid_Ascent_Sport_(IX)_–_f_02012026.jpg", alt: "Toyota Camry Hybrid", price: "Rp 945.000.000", category: "Sedan" },
  // MPV
  { name: "Alphard HEV", src: "/Toyota-Alphard-HEV.jpg", alt: "Alphard HEV", price: "Rp 1.680.000.000", category: "MPV" },
  // SUV
  { name: "Land Cruiser", src: "/2024_Toyota_Land_Cruiser_J300_VX_front.jpg", alt: "Toyota Land Cruiser J300", price: "Rp 2.500.000.000", category: "SUV" },
  // Pickup
  { name: "Hilux", src: "/hilux.jpg", alt: "Hilux", price: "Rp 500.000.000", category: "Pickup" },
  // Hatchback
  { name: "GR Yaris", src: "/yaris.jpg", alt: "GR Yaris", price: "Rp 1.150.000.000", category: "Hatchback", grBadge: true },
];

const CATEGORIES: Category[] = ["All", "Coupe", "Sedan", "MPV", "SUV", "Pickup", "Hatchback"];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const filtered = activeCategory === "All" ? CARS : CARS.filter((c) => c.category === activeCategory);
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-geist-sans)]">
      {/* Toyota Header */}
      <header className="flex items-center justify-between pr-6 bg-white border-b border-gray-200 w-full h-[64px]">
        <div className="flex items-center h-full">
          {/* Logo block */}
          <div className="flex items-center justify-center bg-[#eb0a1e] h-full w-[80px] mr-8">
            <Image
              src="/Toyota_logo_(Red).svg.png"
              alt="Toyota Logo"
              width={40}
              height={40}
              priority
              className="brightness-0 invert opacity-80"
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden sm:flex items-center gap-8 text-black font-semibold text-[15px]">
            <a href="#" className="hover:text-gray-600 transition-colors">Vehicles</a>
            <a href="#" className="hover:text-black transition-colors">Shop</a>
            <a href="#" className="hover:text-black transition-colors">Support & Service</a>
          </nav>
        </div>

        {/* Account Link */}
        <div className="flex items-center text-black hover:text-gray-600 font-semibold text-[15px] cursor-pointer transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Account
        </div>
      </header>

      {/* Main Content */}
      <main className="relative w-full h-[calc(100vh-64px)] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/2025-Toyota-Land-Cruiser-250-004-1080.jpg"
          alt="Toyota Land Cruiser"
          fill
          className="object-cover brightness-15 opacity-100"
          priority
        />
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 p-8 sm:px-20 max-w-5xl mx-auto flex flex-col gap-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-md">Toyota - Let's go beyond</h1>
          <section className="flex flex-col gap-6 text-lg leading-relaxed text-gray-100 drop-shadow-sm">
            <p>
              Toyota Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota City, Aichi, Japan. It was founded by Kiichiro Toyoda and incorporated on August 28, 1937. Toyota is one of the largest automobile manufacturers in the world, producing about 10 million vehicles per year.
            </p>
            <p>
              Originally starting as a division of Toyoda Automatic Loom Works, devoted to the production of automobiles, it quickly grew into a global powerhouse. Toyota is well known for its highly reliable vehicles, ranging from affordable commuter cars all the way into luxury and performance cars.
            </p>
          </section>
        </div>
      </main>

      {/* Philosophy Section */}
      <section className="py-24 bg-[#f4f6f8] text-gray-900 w-full border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-8 sm:px-20 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Picture on the left */}
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/1990_Toyota_Corolla_05.jpg"
              alt="1990 Toyota Corolla"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>

          {/* Caption on the right */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <span className="text-sm font-bold tracking-widest uppercase text-[#eb0a1e] mb-3">Philosophy</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black leading-tight">
              Built to last.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We engineer our cars to be <span className="font-bold text-black italic">dependable</span>, so you can focus on driving without worrying about your car breaking down. Don't take our word for it. How many times have you seen an old Toyota on the road?
            </p>
          </div>
        </div>
      </section>

      {/* Precision / Motorsport Section */}
      <section className="py-24 bg-white text-gray-900 w-full border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-8 sm:px-20 flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* Caption on the left */}
          <div className="w-full md:w-1/2 flex flex-col justify-center order-2 md:order-1">
            <span className="text-sm font-bold tracking-widest uppercase text-[#eb0a1e] mb-3">Motorsport</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black leading-tight">
              Engineered with precision.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              To ensure our cars are ready for anything, we test and develop our leading edge technology at the harshest conditions, from the extreme roads of WRC to the long endurance of Le Mans. Yes, even your daily commuter has motorsport DNA!
            </p>
          </div>

          {/* Images on the right */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 order-1 md:order-2">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/RSZ_TGR_0014-1.jpg"
                alt="Toyota Gazoo Racing"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/1_0.jpg"
                alt="Toyota Le Mans"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Explore Models Section */}
      <section className="py-24 bg-[#0a0a0a] text-white w-full border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-8 sm:px-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10">
            <div>
              <span className="text-sm font-bold tracking-widest uppercase text-[#eb0a1e] mb-3 block">Showroom</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Explore our models.
              </h2>
            </div>
            <a href="#" className="mt-6 md:mt-0 text-sm font-semibold text-[#eb0a1e] hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest">
              View All Vehicles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${activeCategory === cat
                  ? "bg-[#eb0a1e] border-[#eb0a1e] text-white"
                  : "bg-transparent border-gray-600 text-gray-400 hover:border-white hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((car) => (
              <div key={car.name} className="group cursor-pointer">
                <div className="rounded-xl overflow-hidden bg-[#1a1a1a] mb-4 relative aspect-video">
                  <Image
                    src={car.src}
                    alt={car.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* GR Badge */}
                  {car.grBadge && (
                    <div className="absolute top-3 left-3 z-10">
                      <Image
                        src="/gr_logo_fix.png"
                        alt="GR Badge"
                        width={44}
                        height={44}
                        className="drop-shadow-lg"
                      />
                    </div>
                  )}
                  {/* Category pill */}
                  <span className="absolute bottom-3 right-3 z-10 bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">
                    {car.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-[#eb0a1e] transition-colors">{car.name}</h3>
                <p className="text-gray-400">Starting from {car.price}</p>
              </div>
            ))}
          </div>

          {/* Dealer CTA */}
          <div className="flex justify-center mt-14">
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-transparent border-2 border-[#eb0a1e] text-white hover:bg-[#eb0a1e] font-bold py-4 px-10 rounded-full transition-all duration-300 uppercase tracking-widest text-sm group"
            >
              <svg
                className="w-5 h-5 shrink-0 group-hover:animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Find Toyota Dealers Near Me
            </a>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-24 bg-white text-gray-900 w-full border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-8 sm:px-20 text-center">
          <span className="text-sm font-bold tracking-widest uppercase text-[#eb0a1e] mb-3 block">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Have questions about our models or need support? Our team is ready to help you.
          </p>

          <form className="flex flex-col gap-6 text-left max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">First Name</label>
                <input type="text" className="border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#eb0a1e] focus:ring-1 focus:ring-[#eb0a1e]" placeholder="John" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Last Name</label>
                <input type="text" className="border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#eb0a1e] focus:ring-1 focus:ring-[#eb0a1e]" placeholder="Doe" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Email Address</label>
              <input type="email" className="border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#eb0a1e] focus:ring-1 focus:ring-[#eb0a1e]" placeholder="john@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Message</label>
              <textarea rows={4} className="border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#eb0a1e] focus:ring-1 focus:ring-[#eb0a1e] resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="mt-4 bg-[#eb0a1e] hover:bg-[#d0091b] text-white font-bold py-4 rounded-md transition-colors uppercase tracking-wider text-sm">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
