export default function Hero() {
    return (
      <div className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/line-waves.webm"
          autoPlay
          loop
          muted
        ></video>
        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center">
          <div
            className="absolute -top-8 text-center pointer-events-none"
            style={{ filter: 'blur(30px)', opacity: 0.4 }}
          >
            <h1 className="text-[clamp(3rem,10vw,11rem)] font-[410] font-dm-sans opacity-70">
              Crescentes
            </h1>
          </div>

          <h1 className="text-[clamp(3rem,10vw,11.25rem)] font-[410] font-dm-sans bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-amber-100 to-amber-100 mb-4 leading-none">
            Crescentes
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg max-w-[65ch] mx-auto mb-10 font-dm-sans">
            Crescentis Marketing Co. is a full-stack digital agency helping bold brands scale with strategic marketing, design, and digital solutions. Powered by ambition, driven by results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <HeroButton label="Get Started" />
            <HeroButton label="WhatsApp Us" />
          </div>
        </div>
      </div>
    );
  }

  function HeroButton({ label }: { label: string }) {
    return (
      <button className="relative py-3 px-6 border-2 border-white/30 rounded-full backdrop-blur-sm bg-[#000010]/30 group hover:bg-white/10 transition-all duration-300 font-inter">
        <span className="flex items-center bg-clip-text text-transparent bg-gradient-to-t from-white to-white/80 text-sm lg:text-base">
          {label}
          <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.85355 0.146447C6.65829 -0.0488155 6.34171 -0.0488155 6.14645 0.146447C5.95118 0.341709 5.95118 0.658291 6.14645 0.853553L9.29289 4H0.5C0.223858 4 0 4.22386 0 4.5C0 4.77614 0.223858 5 0.5 5H9.29289L6.14645 8.14645C5.95118 8.34171 5.95118 8.65829 6.14645 8.85355C6.34171 9.04882 6.65829 9.04882 6.85355 8.85355L10.8536 4.85355C10.9015 4.80562 10.9377 4.75036 10.9621 4.69139C10.9842 4.63777 10.9967 4.58107 10.9994 4.52399C10.9998 4.516 11 4.508 11 4.5M6.85355 0.146447L10.8534 4.14631L6.85355 0.146447ZM10.8536 4.14645C10.8543 4.14715 10.855 4.14786 10.8557 4.14857L10.8536 4.14645ZM10.8557 4.14857C10.9007 4.19419 10.9371 4.24844 10.9621 4.30861C10.938 4.25051 10.9026 4.19602 10.8557 4.14857Z"
              fill="url(#paint0_linear_305_3982)"
            />
            <defs>
              <linearGradient id="paint0_linear_305_3982" x1="5.5" y1="0.5" y2="8.5" gradientUnits="userSpaceOnUse">
                <stop offset="0.0167409" stopColor="white" stopOpacity="0.4" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </button>
    );
  }
  