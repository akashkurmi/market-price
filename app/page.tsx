// "use client";
import Link from "next/link";
import Context from "./Context/Context";

export default function Home() {
  return (
    <Context>
      <main className="flex flex-col min-h-screen">
        {/* Home Carousel Section */}
        <Link
          href="/Pages/Homepage"
          className="relative w-full h-[50vh] overflow-hidden group border-b border-white/10"
        >
          {/* Background Image - Property themed */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            alt="Home"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

          {/* Heading */}
          <div className="relative h-full flex items-center justify-center">
            <h2 className="text-white text-6xl md:text-8xl font-black uppercase tracking-tighter drop-shadow-2xl">
              Home
            </h2>
          </div>
        </Link>

        {/* About Carousel Section */}
        <Link
          href="/Pages/About"
          className="relative w-full h-[50vh] overflow-hidden group"
        >
          {/* Background Image - Land/Nature themed */}
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            alt="About"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

          {/* Heading */}
          <div className="relative h-full flex items-center justify-center">
            <h2 className="text-white text-6xl md:text-8xl font-black uppercase tracking-tighter drop-shadow-2xl">
              About
            </h2>
          </div>
        </Link>
      </main>
    </Context>
  );
}
