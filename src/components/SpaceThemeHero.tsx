"use client"
import { useState, useEffect } from 'react';

export default function SpaceThemeHero() {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative pt-24 lg:pt-32 pb-24  overflow-hidden">
      <div className="absolute inset-0 bg-black -z-50" />
      <div className="absolute inset-0 -z-40">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div 
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: "1.093372664340158px",
                height: "1.093372664340158px",
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.8 + 0.2
              }}
            />
          ))}
        </div>
      </div>
      <div className="container max-w-3xl mx-auto px-4 relative z-10 mt-28">
        <div className="text-center">
          <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-white">
            <span className="inline-block">Welcome to the era of</span>
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-rose-300 pr-4">
              {' digital '}
            </span>
            <span className="inline-block">Marketing</span>
          </h2>
          
          <p className="text-gray-400 font-light text-lg max-w-md mb-8 mx-auto">
            we does jobs, not tasks
          </p>
          
          <a href="#talk-to-expert" className="inline-block">
            <button 
              className="relative py-3 px-6 border-2 rounded-full border-white/20 group hover:border-white/30 transition-all duration-300"
              style={{
                background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) padding-box'
              }}
            >
              <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden -z-10 opacity-50">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-900 to-black" />
                <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-white/10 to-black/0 transition-all duration-300" />
              </div>
              <div className="flex items-center text-base">
                <p className="text-white/90 group-hover:text-white transition-colors duration-300">Talk To Us</p>
                <svg 
                  className="ml-2 w-4 h-3" 
                  viewBox="0 0 16 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 1L15 6M15 6L10 11M15 6H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </a>
          <div className="mt-12 flex justify-center">
            <img 
              src="/image.png" 
              alt="Decorative element"
              className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] object-contain animate-float"
            />
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}