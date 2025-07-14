"use client";
import Image from "next/image";

export default function Appbar() {
  return (
    <header className=" top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-14 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" height={40} width={40} />
          <span className="ml-2 text-xl font-semibold text-white">crescentis</span>
        </a>

        <nav className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-6 text-white text-sm">
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="flex-shrink-0">
          <a href="/log-in">
            <button
              className="relative py-2 px-4 lg:py-3 lg:px-5 border-2 rounded-full border-transparent group z-0"
              style={{
                fontFamily: "Inter",
                background:
                  "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)) padding-box, linear-gradient(87.4deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgb(255, 255, 255)) border-box",
              }}
            >
              <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden -z-10">
                <img
                  src="/_next/static/media/stars.59971fb3.svg"
                  alt="bg"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    background:
                      "linear-gradient(87.4deg, rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgba(0, 0, 0, 0))",
                  }}
                ></div>
                <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-white/10 to-black/0 transition-all duration-1000"></div>
              </div>
              <div className="flex items-center z-20 bg-clip-text text-transparent bg-gradient-to-t from-white to-white/40 text-sm lg:text-base">
                Log In
              </div>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
