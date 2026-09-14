import Footer from "@/app/components/Footer";
import FadeIn from "../../components/Fadein";
import Nav from "@/app/components/Nav";


export const metadata = {
  title: "Cab in Margao Goa | Taxi Service in Margao",
  description:
    "Book a reliable cab in Margao with Alfaz. Taxi services available for local travel, airport transfers, sightseeing, and outstation journeys.",
  alternates: {
    canonical: "https://yourdomain.com/location/margao",
  },
  keywords: [
    "cab in Margao Goa",
    "taxi in Margao",
    "Margao cab service",
    "Margao taxi service",
    "Margao airport taxi",
    "Margao cab booking",
    "Margao local taxi",
    "Margao sightseeing cab",
    "reliable cab Margao",
    "24/7 taxi Margao",
  ],
};


const PLACES = [
  {
    number: "01",
    name: "Margao Municipal Market",
    description:
      "A dense, covered market at the heart of the city — spice stalls, fish sellers, and tailors packed into narrow lanes since the 1900s.",
  },
  {
    number: "02",
    name: "Church of the Holy Spirit",
    description:
      "A whitewashed 17th-century church facing Margao's largest square, still the anchor of the city's Feast of the Holy Spirit each May.",
  },
  {
    number: "03",
    name: "Monte Hill Chapel",
    description:
      "A small chapel on a hilltop above the city, best visited near sunset for a wide, quiet view over Margao's rooftops.",
  },
  {
    number: "04",
    name: "Sat Burnzam Ghor",
    description:
      "The 'Seven Gabled House' — one of the last surviving fragments of a much larger 18th-century mansion, now a protected heritage site.",
  },
];

export default function Margao() {
  return (
    <>
      <Nav />
      <section
        className="px-4 sm:px-8 md:px-10 pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24"
        style={{ backgroundColor: "#0C0C0C" }}
      >
        <FadeIn>
          <p
            className="font-light"
            style={{
              color: "#FFFFFF",
              opacity: 0.6,
              fontSize: "clamp(0.9rem, 1.6vw, 1.1rem)",
            }}
          >
            City guide
          </p>
          <h1
            className="font-black uppercase"
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(2.8rem, 11vw, 140px)",
              lineHeight: 1,
            }}
          >
            Margao
          </h1>
          <p
            className="font-light leading-relaxed max-w-2xl mt-6 sm:mt-8"
            style={{
              color: "#FFFFFF",
              opacity: 0.7,
              fontSize: "clamp(0.95rem, 1.8vw, 1.35rem)",
            }}
          >
            Known locally as Madgaon, this is where South Goa actually runs
            its errands — markets, churches, old merchant houses, and the
            train station that connects the state to the rest of India.
            Book a cab and we&apos;ll take care of the driving so you can
            spend the day exploring instead of navigating.
          </p>
        </FadeIn>
      </section>

      <section
        id="margao"
        className="px-4 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="max-w-5xl mx-auto">
          {PLACES.map((place, i) => (
            <FadeIn key={place.number} delay={i * 0.1}>
              <div
                className="flex items-start gap-4 sm:gap-10 py-6 sm:py-10 md:py-12"
                style={{ borderBottom: "1px solid rgba(12, 12, 12, 0.15)" }}
              >
                <span
                  className="font-black flex-shrink-0"
                  style={{
                    color: "#0C0C0C",
                    fontSize: "clamp(2.5rem, 10vw, 140px)",
                    lineHeight: 1,
                  }}
                >
                  {place.number}
                </span>
                <div className="flex flex-col gap-2 sm:gap-4 pt-1 sm:pt-4">
                  <h3
                    className="font-medium uppercase"
                    style={{
                      color: "#0C0C0C",
                      fontSize: "clamp(1rem, 2.2vw, 2.1rem)",
                    }}
                  >
                    {place.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl"
                    style={{
                      color: "#0C0C0C",
                      opacity: 0.6,
                      fontSize: "clamp(0.9rem, 1.6vw, 1.25rem)",
                    }}
                  >
                    {place.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}