export default function Footer() {
  return (
    <footer 
      className="relative flex flex-col items-center justify-center pt-14 lg:pt-20 pb-3 lg:pb-8 mx-auto z-40 overflow-hidden bg-black"
      style={{ fontFamily: "DM Sans" }}
    >
      
      <div 
        className="container w-full flex justify-around text-xs text-white font-light mb-4 lg:hidden z-40"
      >
        <a href="/blog">Blog</a>
        <a href="/terms">Terms and Conditions</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
      
      <div className="relative container max-w-screen-lg flex items-center justify-between mb-3 lg:mb-6 z-40">
        <a href="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="w-3 h-3 lg:w-5 lg:h-5 mr-0.5 lg:mr-1"
          />
          <span 
            className="text-xs lg:text-sm leading-none mt-px text-white"
          >
            crescentis
          </span>
        </a>
        <a 
          href="" 
          className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 text-xs lg:text-sm text-white font-light"
        >
          crescentis
        </a>
        <div 
          className="hidden lg:flex text-sm text-white font-light"
        >
          <a href="/blog" className="mr-7">Blog</a>
          <a href="/terms" className="mr-7">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
      
      <div className="container max-w-screen-lg flex flex-col items-center mb-3 lg:mb-4 z-10">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mb-3 lg:mb-4"></div>
        <p 
          className="text-center text-xs lg:text-sm text-white/50 font-light"
        >
          All rights reserved | Portal 2025 
        </p>
      </div>
      
      {/* Glowing circle - fixed shadow styling */}
      <div 
        className="absolute top-20 lg:top-24 left-1/2 -translate-x-1/2 w-300 h-300  rounded-full border border-orange-500"
        style={{ 
          boxShadow: "0 0 40px 20px rgba(254, 123, 30, 0.3)",
          opacity: 1 
        }}
      ></div>
    </footer>
  );
}