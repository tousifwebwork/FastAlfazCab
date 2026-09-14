import FadeIn from "../components/Fadein";

const PORTRAIT_URL2 = "../../public/profile.jpg";
const PORTRAIT_URL =
  "https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png";

export default function Hero() {
  return (
    <>
     <section
        id="home"
        className="relative flex flex-col pt-14 pb-10 sm:pb-0 md:pt-16 sm:min-h-screen space-y-13 sm:space-y-0"
        style={{ overflowX: "clip" }}   >
        {/* Mobile-only intro badge */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0">
          <FadeIn delay={0.1} y={15}>
            <span className="inline-flex items-center gap-2 whitespace-nowrap border border-[#D7E2EA]/25 rounded-full px-4 py-1.5 text-[#D7E2EA] uppercase tracking-widest text-[0.6rem] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D7E2EA] animate-pulse" />
              Cab Service &middot; Available 24/7
            </span>
          </FadeIn>
        </div>

        {/* Banner Text */}
        <div className="overflow-hidden mt-4 sm:mt-4 md:-mt-5">
          <FadeIn delay={0.15} y={40}>
             <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[13vw] xs:text-[12vw] sm:text-[11vw] md:text-[12vw] lg:text-[14vw]">
                 Hi, i&apos;m Alfaz
             </h1>
          </FadeIn>
        </div>

        {/* Mobile-only supporting line under the heading */}
        <div className="px-6 mt-2">
          <FadeIn delay={0.25} y={15}>
            <p className="text-[#D7E2EA]/70 text-center text-[0.9rem] uppercase tracking-wider leading-relaxed">
              Your driver, your ride, your schedule &mdash; anywhere in the city
            </p>
            <span className="text-center block mt-2 text-gray-500">
                 Reliable cab service in Goa for airport transfers, local rides,
                 sightseeing and outstation journeys.
           </span>
          </FadeIn> 
        </div>

        {/* Boy Animation */}
        {/* <div className="relative mx-auto mt-4 z-10 sm:absolute sm:mx-0 sm:mt-0 sm:left-1/2 sm:-translate-x-1/2 sm:bottom-40 w-[230px] xs:w-[250px] sm:w-[240px] md:w-[300px] lg:w-[360px]">
        <FadeIn delay={0.6} y={30} className="">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"   >
            <img
              src={PORTRAIT_URL}
              alt="Jack portrait"
              className="w-full h-auto"
            />
          </Magnet>
        </FadeIn>
      </div> */}

        <div className="mt-6 px-6 md:mt-30  ">
          <FadeIn delay={0.45} y={20}>
            <div className="flex items-stretch justify-center gap-3 mb-5">
              <div className="flex-1 border border-[#D7E2EA]/20 rounded-xl py-2.5 text-center">
                <p className="text-[#D7E2EA] font-bold text-base leading-none">
                  5+
                </p>
                <p className="text-[#D7E2EA]/60 uppercase tracking-wider text-[0.55rem] mt-1">
                  Years Driving
                </p>
              </div>
              <div className="flex-1 border border-[#D7E2EA]/20 rounded-xl py-2.5 text-center">
                <p className="text-[#D7E2EA] font-bold text-base leading-none">
                  1K+
                </p>
                <p className="text-[#D7E2EA]/60 uppercase tracking-wider text-[0.55rem] mt-1">
                  Happy Riders
                </p>
              </div>
              <div className="flex-1 border border-[#D7E2EA]/20 rounded-xl py-2.5 text-center">
                <p className="text-[#D7E2EA] font-bold text-base leading-none">
                  4.9
                </p>
                <p className="text-[#D7E2EA]/60 uppercase tracking-wider text-[0.55rem] mt-1">
                  Avg Rating
                </p>
              </div>
            </div>
            <div className="md:flex md:justify-center">
              <a 
  href="#contact"
  aria-label="Book a cab ride in Goa with Alfaz"
  className="block w-full text-center bg-[#D7E2EA] text-[#0C0C0C] font-bold uppercase
  tracking-widest text-xs rounded-full py-3.5 active:scale-[0.98] transition-transform
  md:w-fit md:px-20 lg:mt-7" 
              >
                Book a Ride
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Footer text */}
        <div className="mt-5 lg:mt-10 sm:mt-auto flex justify-center items-end sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-10">
          <FadeIn delay={0.35} y={20}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug w-full text-center sm:text-left"
              style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
            >
              A trusted cab service driven by safe, comfortable and reliable
              journeys
            </p>
          </FadeIn>
        </div>
        
      </section>
    </>
  );
}