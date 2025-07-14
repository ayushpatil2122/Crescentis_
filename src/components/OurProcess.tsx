"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const stepVariants = {
  offscreen: {
    y: 20,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export default function OurProcess() {
  return (
    <section className="lg:pt-20 lg:pb-20 bg-black text-white overflow-hidden">
      <div className="max-w mx-auto">
        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
          
          <div className="container mx-auto max-w-7xl text-center px-5.5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mb-16"
            >
              <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-medium font-sans mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-amber-100 to-amber-100">
                Simple. Strategic. Scalable.
              </h2>
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-6 h-1 bg-gradient-to-r from-transparent via-[#E98F81] to-transparent"
                style={{ originX: 0 }}
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5.5 text-left">
              {[
                {
                  title: "Discover",
                  description: "Understanding your goals & audience",
                  number: "1"
                },
                {
                  title: "Design",
                  description: "Crafting content, strategies, and campaigns",
                  number: "2"
                },
                {
                  title: "Deploy",
                  description: "Launch, test, optimize",
                  number: "3"
                },
                {
                  title: "Deliver",
                  description: "Real insights, growth metrics, results",
                  number: "4"
                }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={stepVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative w-full h-52 flex flex-col items-start justify-center p-8 rounded-[1.25rem] overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 hover:border-[#E98F81]/40 transition-all duration-300 group"
                  whileHover={{ 
                    y: -5,
                    borderColor: "rgba(233, 143, 129, 0.4)"
                  }}
                >
                  <img 
                    src="https://www.noon.ai/_next/static/media/partners-bg.338eeed9.png" 
                    alt="bg" 
                    className="absolute top-0 left-0 w-full h-full -z-10 object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                  />
                  
                  <div className="w-16 h-16 rounded-full flex items-center justify-center border border-white/10 group-hover:border-[#E98F81]/40 mb-4 transition-colors">
                    <span className="text-white text-2xl font-bold">
                      {step.number}
                    </span>
                  </div>
                  
                  <h3 className="text-[1.375rem] z-50 font-semibold bg-gradient-to-r from-[#F0C78E] to-[#E98F81] bg-clip-text text-transparent">
                    {step.title}
                  </h3>
                  <p className="text-left font-light text-white/70 z-50 leading-tight text-sm xl:text-base mt-2 group-hover:text-white/90 transition-colors">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
}