"use client"
import { useState, useEffect, useRef } from 'react';

export default function Partner() {
  const partners = [
    {
      logo: "https://www.noon.ai/_next/static/media/partners-logo-1.3e54dc1d.png",
      name: "Warner Bros",
      description: "How To Build Diverse Teams"
    },
    {
      logo: "/api/placeholder/120/60",
      name: "Netflix",
      description: "Creating Engaging Content"
    },
    {
      logo: "/api/placeholder/120/60",
      name: "Google",
      description: "Innovation at Scale"
    },
    {
      logo: "/api/placeholder/120/60",
      name: "Adobe",
      description: "Creative Solutions for All"
    },
    {
      logo: "/api/placeholder/120/60",
      name: "Amazon",
      description: "Global Supply Chain Management"
    },
    {
      logo: "/api/placeholder/120/60",
      name: "Microsoft",
      description: "Enterprise Cloud Solutions"
    },
    {
      logo: "/api/placeholder/120/60",
      name: "Apple",
      description: "Design Excellence"
    }
  ];

  // Triple the array for infinite scroll effect
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const cardWidth = 330; // Width of each card in pixels
  const cardGap = 22; // Gap between cards (from ml-5.5 which is 22px)
  const slideWidth = cardWidth + cardGap;
  
  // Create three copies of partners for smooth infinite sliding
  const allPartners = [...partners, ...partners, ...partners];
  
  // Auto-scroll logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    let animationFrameId: number = 0;
    let currentPosition = 0;
    
    // Function to reset position without animation when reaching the end
    const resetPosition = () => {
      if (carouselRef.current) {
        setIsAnimating(false);
        carouselRef.current.style.transition = 'none';
        currentPosition = partners.length * slideWidth;
        carouselRef.current.style.transform = `translateX(-${currentPosition}px)`;
        
        // Force browser to acknowledge the style change before re-enabling transitions
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'transform 800ms ease-in-out';
            setIsAnimating(true);
          }
        }, 50);
      }
    };
    
    // Start animation
    const startAnimation = () => {
      interval = setInterval(() => {
        if (!carouselRef.current) return;
        
        currentPosition += slideWidth;
        carouselRef.current.style.transform = `translateX(-${currentPosition}px)`;
        
        // Check if we need to reset position
        if (currentPosition >= (partners.length * 2 * slideWidth)) {
          setTimeout(resetPosition, 800); // Reset after transition completes
        }
      }, 3000);
    };
    
    // Initialize position at the middle set of cards
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
  
  // Handle transition enabling/disabling
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = isAnimating 
        ? 'transform 800ms ease-in-out' 
        : 'none';
    }
  }, [isAnimating]);

  return (
    <section className=" lg:pt-20 lg:pb-9 bg-black">
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
                    <img src={partner.logo} alt={partner.name} className="h-16 object-contain" />
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