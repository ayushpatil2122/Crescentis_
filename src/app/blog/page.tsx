"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BlogSection = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Ramtek Agro Vision: Digital Transformation in Agriculture",
      excerpt: "How we helped an agri-tech startup establish their digital presence and generate qualified leads",
      image: "/case-studies/ramtek-agro.jpg",
      tags: ["Branding", "Digital Strategy", "Lead Generation"],
      date: "March 15, 2025",
      readTime: "5 min read",
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 2,
      title: "Shakoon Milk: Revitalizing a Heritage Dairy Brand",
      excerpt: "Our comprehensive rebranding and digital campaign increased market share by 42%",
      image: "/case-studies/shakoon-milk.jpg",
      tags: ["Rebranding", "Social Media", "Packaging Design"],
      date: "February 2, 2025",
      readTime: "7 min read",
      gradient: "from-amber-400 to-orange-500"
    }
  ];

  return (
    <section className="relative w-full bg-black text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black to-amber-900/30 -z-10"
      />
      
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-amber-100 to-amber-100">
            Our Case Studies
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 h-1 bg-gradient-to-r from-transparent via-[#E98F81] to-transparent mx-auto max-w-md"
          />
          <p className="mt-6 max-w-2xl mx-auto text-white/80 text-lg">
            Explore how we've helped brands transform and achieve measurable results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 hover:border-[#E98F81]/40 transition-all duration-300"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent mix-blend-overlay ${caseStudy.gradient.replace('from-', 'from-')}/20`} />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseStudy.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 bg-gradient-to-r from-[#F0C78E] to-[#E98F81] bg-clip-text text-transparent">
                  {caseStudy.title}
                </h3>
                
                <p className="text-white/80 mb-4">
                  {caseStudy.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span>{caseStudy.date}</span>
                  <span>{caseStudy.readTime}</span>
                </div>
                
                <div className="absolute bottom-6 right-6">
                  <button className="px-4 py-2 rounded-full bg-gradient-to-r from-[#F0C78E] to-[#E98F81] text-black font-medium text-sm hover:opacity-90 transition-opacity">
                    Read Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all text-white/90 font-medium">
            View All Case Studies
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;