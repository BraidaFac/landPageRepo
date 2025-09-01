import { useEffect, useState } from "react";
import { InfoList } from "./InfoList";

export default function EventInfoSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("info");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="info"
      className={`min-h-auto flex mb-12  items-start justify-center snap-start relative transition-opacity duration-1500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl text-white relative z-10 w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Header */}
        <div
          className={`text-center mb-12 flex-col items-center transition-all duration-1200 ease-out mt-10 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{
            transitionDelay: "300ms",
          }}
        >
          <h2 className="text-5xl  lg:text-7xl font-extrabold relative">
            <span className="white-wave-gradient">Información del Evento</span>
          </h2>
        </div>

        <InfoList />
      </div>
    </section>
  );
}
