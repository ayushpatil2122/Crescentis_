"use client"; 

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const featureVariants = {
  offscreen: {
    y: 20,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
    //   type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function WhyCrescentis() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const features = [
    {
      title: "Built for Scale from Day One",
      description: "We're engineered to grow with you — from your first campaign to your next round of funding.",
      icon: "🚀"
    },
    {
      title: "Hybrid Model = Full Control",
      description: "Branding, marketing, and digital under one roof means faster turnarounds and deeper alignment.",
      icon: "🎛️"
    },
    {
      title: "Small Team, Big Focus",
      description: "You'll never feel like client #17. We only take on what we can fully commit to.",
      icon: "🔍"
    },
    {
      title: "Moonshot Mentality",
      description: "We don't do average. We think big, test fast, and execute smarter.",
      icon: "🌕"
    },
    {
      title: "Transparent, No-Nonsense Workflow",
      description: "You'll always know what's happening, what's next, and how it's performing.",
      icon: "🪟"
    },
    {
      title: "Aesthetic Meets Analytics",
      description: "Beautiful content that actually converts. Because we believe in storytelling and selling.",
      icon: "📊"
    },
    {
      title: "No Buzzwords, Just Results",
      description: "We speak human — not jargon. Everything we do is tied back to business goals.",
      icon: "🎯"
    },
    {
      title: "Real People, Real Passion",
      description: "We're not trying to look bigger than we are. We're just trying to be the best at what we do.",
      icon: "❤️"
    }
  ];

  return (
    <section className="relative w-full bg-black text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      {isMounted && (
        <>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-amber-500 to-pink-500 blur-3xl mix-blend-overlay -z-10"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-blue-500 to-amber-300 blur-3xl mix-blend-overlay -z-10"
          />
        </>
      )}
      
      <div className="container mx-auto max-w-7xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-16"
        >
          <div className="absolute inset-0 text-[clamp(3rem,8vw,7rem)] font-dm-sans font-bold blur-2xl opacity-10">
            CRESCENTIS
          </div>
          <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-medium font-sans bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-amber-100 to-amber-100">
            What Sets Us Light Years Apart.
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 h-1 bg-gradient-to-r from-transparent via-[#E98F81] to-transparent"
            style={{ originX: 0 }}
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={featureVariants}
              className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 hover:border-[#E98F81]/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
              whileHover={{ 
                y: -5,
                borderColor: "rgba(233, 143, 129, 0.4)"
              }}
            >
              <div className="text-2xl mb-3 opacity-80 group-hover:opacity-100 group-hover:text-amber-200 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 bg-gradient-to-r from-[#F0C78E] to-[#E98F81] bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-white/70 text-sm sm:text-base group-hover:text-white/90 transition-colors">
                {feature.description}
              </p>
              <div className="mt-4 h-px w-0 bg-gradient-to-r from-[#F0C78E] to-[#E98F81] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}