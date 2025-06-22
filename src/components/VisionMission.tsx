export default function VisionMission() {
    return (
      <div className="bg-black">
      <section className="container flex flex-col items-center justify-center mx-auto Articles ">
        <div className="relative w-full flex flex-col items-center justify-center pb-15 pt-12 lg:pt-28 lg:pb-20">
          <img
            src="https://www.noon.ai/assets/img/workforce/bg-mob_1.png"
            alt="bg"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          <div className="max-w-72 md:max-w-none">
            <section
              className="text-center text-balance 2xl:text-[3.625rem] mx-auto z-50"
              style={{ fontSize: 42 }}
            >
              <h2 className="mb-6 leading-snug">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F0C78E] to-[#E98F81] mr-2.5 xl:mr-3" style={{ fontFamily: "Inter" }}>
                  Vision
                </span>
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F0C78E] to-[#E98F81] mr-2.5 xl:mr-3" style={{ fontFamily: "Inter" }}>
                  Mission
                </span>
              </h2>
              <p className="text-[#54565B] 2xl:text-[#fff] font-light text-lg max-w-[344px] mb-5 mx-auto" style={{ fontFamily: "DM Sans" }}>
                A hyper-accurate, elastic recruiting team that scales with your hiring needs
              </p>
            </section>
          </div>
        </div>
  
        <div className="w-full flex flex-col lg:flex-row items-center justify-between">
          {/* Card 1 */}
          <div className="relative lg:mr-5 mb-7.5 lg:mb-0 p-4 sm:p-8 xl:p-11 w-full h-full flex flex-col items-center justify-center overflow-hidden border border-transparent rounded-[1.25rem] lg:rounded-[1.875rem] gradient before:bg-gradient-to-b before:from-[#342C3F]/70 before:to-[#3E3250]/50 before:border-inherit before:border before:rounded-[1.25rem] before:lg:rounded-[1.875rem] before:absolute before:inset-0 before:z-10 before:bg-origin-border before:[mask-composite:exclude]">
            <img
              src="https://eubzkoywhckxuyrjsrje.supabase.co/storage/v1/object/public/website/workforce-block-1.png?t=2024-03-19T22%3A29%3A18.838Z"
              alt="bg"
              className="absolute inset-0 w-full h-full -z-10 object-cover"
            />
            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="text-[1.25rem] xl:text-[1.625rem] text-balance mb-4" style={{ fontFamily: "Inter" }}>
                Clone Your Best Recruiter
              </p>
              <p className="text-[0.875rem] xl:text-lg text-balance opacity-65" style={{ fontFamily: "DM Sans" }}>
                Noon observes and replicates your sourcing process using RLHF (Reinforcement Learning from Human Feedback)
              </p>
            </div>
            <img
              src="https://eubzkoywhckxuyrjsrje.supabase.co/storage/v1/object/public/website/workforce-block-item-1.png"
              className="w-full -mt-[20%] -z-10"
              alt=""
            />
            <img
              src="https://www.noon.ai/_next/static/media/boll.23ebda6a.png"
              alt=""
              className="absolute bottom-[-4%] left-[-2%] w-[54.4%]"
            />
            <div className="absolute bottom-[22%] right-[9%] lg:right-[10.6%] w-[40%] flex flex-col items-end">
              {[1, 2, 3, 4].map((n) => (
                <img
                  key={n}
                  src={`https://www.noon.ai/_next/static/media/btn-${n}.${['3eb26a67', '258a6ae8', 'd0a6d7ec', 'fe167f99'][n - 1]}.png`}
                  alt=""
                  className="mb-[6%] w-auto h-auto cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out z-20"
                />
              ))}
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="relative mb-7.5 lg:mb-0 p-4 sm:p-8 xl:p-11 w-full h-full flex flex-col items-center justify-center overflow-hidden border border-transparent rounded-[1.25rem] lg:rounded-[1.875rem] gradient before:bg-gradient-to-b before:from-[#342C3F]/70 before:to-[#3E3250]/50 before:border-inherit before:border before:rounded-[1.25rem] before:lg:rounded-[1.875rem] before:absolute before:inset-0 before:z-10 before:bg-origin-border before:[mask-composite:exclude]">
            <img
              src="https://eubzkoywhckxuyrjsrje.supabase.co/storage/v1/object/public/website/workforce-block-2.png"
              alt=""
              className="absolute inset-0 w-full h-full -z-10 object-cover"
            />
            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="text-[1.25rem] xl:text-[1.625rem] text-balance mb-4" style={{ fontFamily: "Inter" }}>
                Dynamically Scale Your Recruiting Team
              </p>
              <p className="text-[0.875rem] xl:text-lg opacity-65" style={{ fontFamily: "DM Sans" }}>
                Activate or hibernate your autonomous AI agents based on your hiring needs.
              </p>
            </div>
            <img
              src="https://eubzkoywhckxuyrjsrje.supabase.co/storage/v1/object/public/website/workforce-block-item-2.png"
              alt=""
              className="w-full -mt-[14%] lg:-mt-[20%] -z-10"
            />
            <div className="absolute bottom-[9%] lg:bottom-[12%] left-[23.6%] lg:left-[24%] w-[14.2%] flex flex-col items-end">
              {[1, 2, 3, 4, 5].map((n) => (
                <img
                  key={n}
                  src={`https://www.noon.ai/_next/static/media/btn-${n}.${['2d181f16', 'feb8d47d', '9cdc063f', '3093970b', '7eda3ba8'][n - 1]}.png`}
                  alt=""
                  className="w-auto h-auto mb-[1%] lg:mb-[1.5%] cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out z-20"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
  