"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const TeamSection = () => {
  const [activeMember, setActiveMember] = useState(0);

  const teamMembers = [
    {
      name: "Aryan Fulsunge",
      role: "Founder",
      description: "The visionary spark behind Crescentis. A leader driven by growth, scale, and moonshot ideas.",
      image: "https://midnightsolutions.in/assets/Fullu-CwmchVhs.jpeg", 
      accentColor: "from-amber-400 to-amber-600"
    },
    {
      name: "Anirudhh Singh",
      role: "CEO",
      description: "The strategist and executor. With sharp business instincts and a growth mindset, he drives results with clarity and confidence.",
      image: "https://midnightsolutions.in/assets/Anirudh-BY3nLOth.jpeg",
      
      accentColor: "from-amber-400 to-amber-600"
    },
    {
      name: "Tushar Dhurwe",
      role: "COO",
      description: "The operations backbone. From processes to people, he ensures everything runs like a well-oiled spacecraft.",
      image: "https://midnightsolutions.in/assets/Tushar-CV36uXrW.jpg",
      accentColor: "from-amber-400 to-amber-600"
    }
  ];

  return (
    <section className="relative w-full bg-black text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/30 via-black to-amber-900/30 -z-10"
      />
      
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-amber-100 to-amber-100">
            Meet Our Core Team
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 h-1 bg-gradient-to-r from-transparent via-[#E98F81] to-transparent mx-auto max-w-md"
          />
          <p className="mt-6 max-w-2xl mx-auto text-white/80 text-lg">
            At the helm of Crescentis is a team of builders, thinkers, and doers — united by a mission to raise the bar in digital marketing.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex lg:flex-col gap-4 order-2 lg:order-1 w-full lg:w-auto">
            {teamMembers.map((member, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveMember(idx)}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  activeMember === idx 
                    ? `border-transparent bg-gradient-to-br ${member.accentColor} shadow-lg`
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-sm text-white/70">{member.role}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div 
            key={activeMember}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative order-1 lg:order-2 w-full lg:w-2/3"
          >
            <div className="relative aspect-square lg:aspect-video w-full rounded-2xl overflow-hidden border border-white/10">
              <img 
                src={teamMembers[activeMember].image} 
                alt={teamMembers[activeMember].name}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent ${teamMembers[activeMember].accentColor.replace('from-', 'mix-blend-overlay from-')}/20`} />
            </div>

            <div className="mt-6 p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl bg-gradient-to-br ${teamMembers[activeMember].accentColor}`}>
                  {teamMembers[activeMember].name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#F0C78E] to-[#E98F81] bg-clip-text text-transparent">
                    {teamMembers[activeMember].name}
                  </h3>
                  <p className="text-amber-200/80 font-medium">
                    {teamMembers[activeMember].role}
                  </p>
                </div>
              </div>
              <p className="text-white/80 text-lg">
                {teamMembers[activeMember].description}
              </p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-[#F0C78E] to-[#E98F81]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;