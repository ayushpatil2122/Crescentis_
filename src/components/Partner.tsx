"use client"
import { useState, useEffect, useRef } from 'react';

export default function Partner() {
  const partners = [
    {
      name: "Ramtek Agro Vision",
      description: "Empowering Sustainable Farming"
    },
    {
      name: "Shakoon Milk",
      description: "Freshness Delivered Daily"
    },
    {
      name: "Appetite",
      description: "Your Everyday Food Partner"
    },
  ];
  
  const getInitial = (name :any) => {
    return name.charAt(0).toUpperCase();
  };

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const cardWidth = 330; 
  const cardGap = 22;
  const slideWidth = cardWidth + cardGap;
  
  const allPartners = [...partners, ...partners, ...partners];
  
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let animationFrameId = 0;
    let currentPosition = 0;
    
    const resetPosition = () => {
      if (carouselRef.current) {
        setIsAnimating(false);
        carouselRef.current.style.transition = 'none';
        currentPosition = partners.length * slideWidth;
        carouselRef.current.style.transform = `translateX(-${currentPosition}px)`;
        
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'transform 800ms ease-in-out';
            setIsAnimating(true);
          }
        }, 50);
      }
    };
    
    const startAnimation = () => {
      interval = setInterval(() => {
        if (!carouselRef.current) return;
        
        currentPosition += slideWidth;
        carouselRef.current.style.transform = `translateX(-${currentPosition}px)`;
        
        if (currentPosition >= (partners.length * 2 * slideWidth)) {
          setTimeout(resetPosition, 800);
        }
      }, 3000);
    };
    
    if (carouselRef.current) {
      currentPosition = partners.length * slideWidth;
      carouselRef.current.style.transform = `translateX(-${currentPosition}px)`;
    }
    
    startAnimation();
    
    return () => {
      clearInterval(interval);
      cancelAnimationFrame(animationFrameId);
    };
  }, [partners.length, slideWidth]);
  
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = isAnimating 
        ? 'transform 800ms ease-in-out' 
        : 'none';
    }
  }, [isAnimating]);

  return (
    <section className="lg:pt-20 lg:pb-9 bg-black">
      <div className="max-w mx-auto mb-10 overflow-hidden">
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="overflow-hidden">
            <div 
              ref={carouselRef}
              className="flex" 
              style={{ 
                transition: 'transform 800ms ease-in-out'
              }}
            >
              {allPartners.map((partner, index) => (
                <div key={index} className="ml-5.5 flex-shrink-0" style={{width: cardWidth + "px"}}>
                  <div className="relative w-full h-52 flex flex-col items-center justify-center p-8 rounded-[1.25rem] overflow-hidden border border-transparent ">
                    <img src="https://www.noon.ai/_next/static/media/partners-bg.338eeed9.png" alt="bg" className="absolute top-0 left-0 w-full h-full -z-10 object-cover"/>
                    
                    <div className="w-16 h-16 rounded-full  flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-bold">
                        {getInitial(partner.name)}
                      </span>
                    </div>
                    
                    <p className="text-[1.375rem] mt-5 z-50 text-white font-medium">{partner.name}</p>
                    <p className="text-center font-light text-[#54565B] z-50 leading-tight text-sm xl:text-base">
                      {partner.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
}