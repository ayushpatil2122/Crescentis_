"use client"
import Image from "next/image";

export default function Appbar() {
    return (
      <div className="absolute left-1/2 -translate-x-1/2 container flex items-start justify-between py-6 z-50 mx-auto pl-14 pr-14">
        <a href="/" className="flex items-center mt-2 z-50">
          <Image src="/logo.png" alt="Logo" className="mr-2" height={50} width={50}/>
          <span className="text-2xl leading-none mt-1.5">
            crescentis
          </span>
        </a>
        
        <nav className="absolute left-1/2 -translate-x-1/2 transition-all duration-700 z-20 -translate-y-full opacity-0 lg:translate-y-1/2 lg:opacity-100">
          <ul className="flex flex-col lg:flex-row"></ul>
        </nav>
        
        <div className="absolute lg:static bottom-[10vh] left-0 flex items-center justify-center w-full lg:w-auto">
          <div className="-translate-y-full opacity-0 flex items-center lg:translate-y-0 lg:opacity-100 transition-all duration-700 z-20">
            <a href="https://wa.me/919423515112">
              <button 
                className="relative py-2 px-4 lg:py-3 lg:px-5 border-2 rounded-full border-transparent group z-0" 
                style={{
                  fontFamily: "Inter",
                  background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)) padding-box, linear-gradient(87.3deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgb(255, 255, 255)) border-box"
                }}
              >
                <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden -z-10">
                  <img src="/_next/static/media/stars.59971fb3.svg" alt="bg" className="w-full h-full object-cover" />
                  <div 
                    className="absolute inset-0 w-full h-full" 
                    style={{
                      background: "linear-gradient(87.3deg, rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgba(0, 0, 0, 0))"
                    }}
                  ></div>
                  <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-white/10 to-black/0 transition-all duration-1000"></div>
                </div>
                <div className="flex items-center text-sm lg:text-base text-nowrap z-20 bg-clip-text text-transparent bg-gradient-to-t from-white to-white/40">
                  <div className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-white/10 to-black/0 transition-all duration-1000"></div>
                  <p className="bg-clip-text text-transparent bg-gradient-to-t from-white to-white/40 text-sm lg:text-base">
                    contact us
                  </p>  
                </div>
              </button>
            </a>
            
            <div className="w-5"></div>
            
            <a href="/log-in">
              <button 
                className="relative py-2 px-4 lg:py-3 lg:px-5 border-2 rounded-full border-transparent group z-0" 
                style={{
                  fontFamily: "Inter",
                  background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)) padding-box, linear-gradient(87.4deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgb(255, 255, 255)) border-box"
                }}
              >
                <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden -z-10">
                  <img src="/_next/static/media/stars.59971fb3.svg" alt="bg" className="w-full h-full object-cover" />
                  <div 
                    className="absolute inset-0 w-full h-full" 
                    style={{
                      background: "linear-gradient(87.4deg, rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgba(0, 0, 0, 0))"
                    }}
                  ></div>
                  <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-white/10 to-black/0 transition-all duration-1000"></div>
                </div>
                <div className="flex items-center text-sm lg:text-base text-nowrap z-20 bg-clip-text text-transparent bg-gradient-to-t from-white to-white/40">
                  <div className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-white/10 to-black/0 transition-all duration-1000"></div>
                  <p className="bg-clip-text text-transparent bg-gradient-to-t from-white to-white/40 text-sm lg:text-base">
                    Log In
                  </p>
                </div>
              </button>
            </a>
          </div>
          <div className="w-5"></div>
        </div>
        
        <div className="lg:hidden">
          <div className="flex transition-all duration-500 mt-2 opacity-100 scale-100 translate-y-0">
            <button 
              className="relative py-2 px-4 lg:py-3 lg:px-5 border-2 rounded-full border-transparent group z-0" 
              style={{
                fontFamily: "Inter",
                background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)) padding-box, linear-gradient(148.6deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgb(255, 255, 255)) border-box"
              }}
            >
              <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden -z-10">
                <div 
                  className="absolute inset-0 w-full h-full" 
                  style={{
                    background: "linear-gradient(113.6deg, rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgba(0, 0, 0, 0))"
                  }}
                ></div>
                <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-white/10 to-black/0 transition-all duration-1000"></div>
              </div>
              <div className="flex items-center text-sm lg:text-base text-nowrap z-20 bg-clip-text text-transparent bg-gradient-to-t from-white to-white/40">
                Menu
              </div>
            </button>
          </div>
          
          <div className="flex transition-all duration-500 mt-2 opacity-0 scale-0 translate-y-0">
            <button 
              className="relative py-2 px-4 lg:py-3 lg:px-5 border-2 rounded-full border-transparent group z-0" 
              style={{
                fontFamily: "Inter",
                background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)) padding-box, linear-gradient(177.2deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgb(255, 255, 255)) border-box"
              }}
            >
              <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden -z-10">
                <div 
                  className="absolute inset-0 w-full h-full" 
                  style={{
                    background: "linear-gradient(91.1deg, rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgba(0, 0, 0, 0))"
                  }}
                ></div>
                <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-white/10 to-black/0 transition-all duration-1000"></div>
              </div>
              <div className="flex items-center text-sm lg:text-base text-nowrap z-20 bg-clip-text text-transparent bg-gradient-to-t from-white to-white/40">
                Close
              </div>
            </button>
          </div>
        </div>
        
        <div className="absolute top-25 lg:bottom-0 left-0 w-full h-px bg-gradient-to-r from-white/0 via-white/40 to-white/0 z-10"></div>
      </div>
    );
  }