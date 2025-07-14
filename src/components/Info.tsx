export default function Info() {
    return (
      <div className="relative w-full h-fit bg-black px-4 sm:px-6 lg:px-8 pb-20">
        <div className="container mx-auto pt-24 overflow-hidden">
          <div className="mb-16 text-center">
            <h2 className="leading-snug font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F0C78E] to-[#E98F81] font-inter font-semibold mr-1.5">Everything</span>
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F0C78E] to-[#E98F81] font-inter font-semibold mr-1.5">You Need.</span>
              <br className="hidden md:block" />
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F0C78E] to-[#E98F81] font-inter font-semibold">All in One Orbit.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-white/60 px-2">
              Whether you're launching a brand, scaling your marketing, or fixing what isn’t working — we bring deep strategy and clean execution under one roof.
            </p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 text-white">
            <ServiceCard
              title="Branding & Identity"
              description="Your brand is more than a logo — it’s a feeling. We help shape that with:"
              points={[
                "Logo Design & Brand Marks",
                "Brand Naming & Voice Development",
                "Style Guides & Visual Systems",
                "Brand Storytelling & Messaging Frameworks",
                "Rebranding for Evolution or Pivot",
              ]}
            />
            <ServiceCard
              title="Social Media Marketing"
              description="We make your brand scroll-stopping and strategy-driven. Services include:"
              points={[
                "Platform-Specific Strategy (Instagram, LinkedIn, etc.)",
                "Content Calendars, Captions, Hashtag Research",
                "Creative Direction & Campaigns",
                "Reels, Carousels, Static & Motion Posts",
                "Community Engagement & Social Listening",
              ]}
            />
            <ServiceCard
              title="Performance Marketing"
              description="We help you spend smart, not just spend more. What we do:"
              points={[
                "Meta (Facebook & Instagram) Ads",
                "Google Search, Display & YouTube Ads",
                "LinkedIn B2B Ad Campaigns",
                "Funnel Strategy, Pixel Setup, and A/B Testing",
                "Budget Planning, Optimization & Reporting",
              ]}
            />
            <ServiceCard
              title="Website & Landing Page Design"
              description="Your digital storefront should sell even while you sleep. We build:"
              points={[
                "High-converting Landing Pages",
                "Informational & Portfolio Sites",
                "Custom UI/UX for Web & Mobile",
                "Shopify & Webflow Setup",
                "SEO Optimization Basics (Structure, Copy, Meta)",
              ]}
            />
            <ServiceCard
              title="Content & Creative Production"
              description="We make your brand look and feel as good as it is. Services include:"
              points={[
                "Reel Shoots & Short-Form Video Production",
                "Graphic Design for Campaigns",
                "Motion Graphics & Animated Elements",
                "Product Photography & Visual Ads",
                "Scripting & Content Ideation",
              ]}
            />
            <ServiceCard
              title="Strategic Consulting"
              description="When you need clarity, not clutter. We offer:"
              points={[
                "Go-to-Market Strategy",
                "Brand Audits & Marketing Diagnosis",
                "Funnel Mapping & Customer Journey Design",
                "Performance Reviews & Action Plans",
                "Monthly Strategy Calls / On-Demand Mentoring",
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
  
  function ServiceCard({
    title,
    description,
    points,
  }: {
    title: string;
    description: string;
    points: string[];
  }) {
    return (
      <div className="bg-[#111111] p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-[#E98F81]/40 transition duration-300">
        <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-[#F0C78E] to-[#E98F81] bg-clip-text text-transparent mb-3">
          {title}
        </h3>
        <p className="text-white/70 text-sm sm:text-base mb-3">{description}</p>
        <ul className="list-disc pl-4 text-white/60 space-y-2 text-sm sm:text-base">
          {points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    );
  }
  