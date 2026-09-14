import Footer from "@/app/components/Footer";
import FadeIn from "../../components/Fadein";
import Nav from "@/app/components/Nav";

export const metadata = {
  title: "Cab in dabolim Goa | Taxi Service in dabolim",
  description:
    "Book a reliable cab in dabolim with Alfaz. Taxi services available for local travel, airport transfers, sightseeing, and outstation journeys.",
  alternates: {
    canonical: "https://yourdomain.com/location/dabolim",
  },
  keywords: [
    "cab in Dabolim Goa",
    "taxi in Dabolim",
    "Dabolim cab service",
    "Dabolim taxi service",
    "Dabolim airport taxi",
    "Dabolim cab booking",
    "Dabolim local taxi",
    "Dabolim sightseeing cab",
    "reliable cab Dabolim",
    "24/7 taxi Dabolim",
  ],
};



const PLACES = [
  {
    number: "01",
    name: "Dabolim Airport",
    description:
      "Goa's historic international airport, located near Dabolim in South Goa and serving travellers arriving from across India and overseas.",
  },
  {
    number: "02",
    name: "Vasco da Gama",
    description:
      "The closest major city to Dabolim Airport, known for its port, local markets, restaurants, and easy access to Goa's southern coastline.",
  },
  {
    number: "03",
    name: "Bogmalo Beach",
    description:
      "A peaceful beach just a short drive from the airport, making it a convenient first or last stop for travellers flying into Goa.",
  },
  {
    number: "04",
    name: "INS Hansa",
    description:
      "The Indian Naval Air Station located at Dabolim, sharing the airfield area with Goa's civilian airport and forming an important part of the region.",
  },
];

export default function Dabolim() {
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
            Airport guide
          </p>
          <h1
            className="font-black uppercase"
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(2.8rem, 11vw, 140px)",
              lineHeight: 1,
            }}
          >
            Dabolim
          </h1>
          <p
            className="font-light leading-relaxed max-w-2xl mt-6 sm:mt-8"
            style={{
              color: "#FFFFFF",
              opacity: 0.7,
              fontSize: "clamp(0.95rem, 1.8vw, 1.35rem)",
            }}
          >
            Dabolim Airport, officially Goa International Airport, is one
            of Goa&apos;s major gateways for travellers arriving in South
            Goa. Book a cab and we&apos;ll take care of the driving so you
            can spend the day exploring instead of navigating.
          </p>
        </FadeIn>
      </section>

      <section
        id="dabolim"
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