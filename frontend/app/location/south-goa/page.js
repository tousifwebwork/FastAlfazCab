import Footer from "@/app/components/Footer";
import FadeIn from "../../components/Fadein";
import Nav from "@/app/components/Nav";

const PLACES = [
  {
    number: "01",
    name: "Palolem Beach",
    description:
      "A curved, palm-fringed bay with calm waters, wooden beach huts, and a relaxed, laid-back atmosphere.",
  },
  {
    number: "02",
    name: "Colva Beach",
    description:
      "One of South Goa's oldest and most popular beaches, with a lively promenade, shacks, and easy access to Margao.",
  },
  {
    number: "03",
    name: "Benaulim",
    description:
      "A quiet fishing village turned beach town, known for its wide sands, dolphin-spotting trips, and slower pace.",
  },
  {
    number: "04",
    name: "Agonda Beach",
    description:
      "A long, uncrowded stretch of shoreline favoured by those seeking peace, yoga retreats, and turtle nesting season.",
  },
  {
    number: "05",
    name: "Cabo de Rama Fort",
    description:
      "A clifftop fort with panoramic views over the Arabian Sea, steeped in Portuguese and Maratha history.",
  },
  {
    number: "06",
    name: "Cavelossim",
    description:
      "An upscale stretch near the Sal River estuary, home to luxury resorts, golf courses, and watersports.",
  },
  {
    number: "07",
    name: "Betalbatim",
    description:
      "A small, tranquil beach often overlooked by tourists, backed by coconut groves and a handful of quiet shacks.",
  },
  {
    number: "08",
    name: "Majorda",
    description:
      "A serene coastal village known for its bakeries, Portuguese-era churches, and unspoiled sandy shoreline.",
  },
];

export default function SouthGoa() {
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
            Where to go
          </p>
          <h1
            className="font-black uppercase"
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(2.8rem, 11vw, 140px)",
              lineHeight: 1,
            }}
          >
            South Goa
          </h1>
          <p
            className="font-light leading-relaxed max-w-2xl mt-6 sm:mt-8"
            style={{
              color: "#FFFFFF",
              opacity: 0.7,
              fontSize: "clamp(0.95rem, 1.8vw, 1.35rem)",
            }}
          >
            Quieter shores, colonial-era forts, and a slower rhythm — South
            Goa rewards those who want to unwind. Book a cab and
            we&apos;ll take care of the driving so you can spend the day
            exploring instead of navigating.
          </p>
        </FadeIn>
      </section>

      <section
        id="south-goa"
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