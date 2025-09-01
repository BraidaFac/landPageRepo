import { useEffect, useRef, useState } from "react";
import { FaCalendarAlt, FaChevronDown } from "react-icons/fa";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToRSVP = () => {
    const rsvpSection =
      document.querySelector('[id*="rsvp"]') ||
      document.querySelector("form") ||
      document.querySelector('[data-section="rsvp"]');
    rsvpSection?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen flex pt-16 sm:pt-10 snap-start relative overflow-hidden transition-opacity duration-1500 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative z-10 text-center text-white px-4 sm:px-8 max-w-6xl mx-auto w-full overflow-hidden">
        {/* Badge superior con animación espectacular */}
        <div
          className={`mb-1 spring-transition ${
            isVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "-translate-y-24 opacity-0 scale-50"
          }`}
          style={{
            transitionDelay: "300ms",
          }}
        >
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-lg rounded-full border border-white/10 mb-8 shadow-lg hover:scale-105 animate-pulse-glow transition-transform duration-300 name-float">
            <div style={{ animation: "spin 20s linear infinite" }}>
              <FaCalendarAlt className="text-amber-400 text-lg" />
            </div>
            <span className="text-base font-medium text-gray-200 text-shimmer">
              20 de septiembre • 2024
            </span>
          </div>
        </div>

        {/* Título principal con animación dramática */}
        <div className="relative">
          {" "}
          {/* Padding personalizable */}
          <h1
            className={`text-6xl md:text-7xl lg:text-9xl font-bold leading-tight mb-8 animate-bounce-in ${
              isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
            style={{
              transitionDelay: "600ms",
            }}
          >
            <span
              className={`block text-white/90 mb-4 sm:mb-0 transition-all duration-1200 ease-out name-float ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-48 opacity-0"
              }`}
              style={{
                transitionDelay: "800ms",
                animationDelay: "1s",
              }}
            >
              Celebramos
            </span>
            <span
              className={`block bg-gradient-to-r from-amber-300 via-orange-400 to-red-500 bg-clip-text text-transparent transition-all duration-1200 ease-out text-shimmer name-glow ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-48 opacity-0"
              }`}
              style={{
                transitionDelay: "1000ms",
                animationDelay: "1.5s",
                textShadow:
                  "0 0 20px rgba(251,191,36,0.8), 0 0 30px rgba(249,115,22,0.6), 0 0 40px rgba(239,68,68,0.4)",
              }}
            >
              27 años
            </span>
          </h1>
          {/* Partículas decorativas alrededor del título */}
          <div
            className="absolute -top-4 -left-4 w-3 h-3 bg-amber-400 rounded-full animate-pulse opacity-60"
            style={{ animationDuration: "2s", animationDelay: "0.5s" }}
          />
          <div
            className="absolute -top-2 -right-6 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-70"
            style={{ animationDuration: "2.5s", animationDelay: "1s" }}
          />
          <div
            className="absolute -bottom-2 -left-6 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse opacity-60"
            style={{ animationDuration: "3s", animationDelay: "1.5s" }}
          />
          <div
            className="absolute -bottom-4 -right-4 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse opacity-80"
            style={{ animationDuration: "2.2s", animationDelay: "0.8s" }}
          />
          {/* Efecto de resplandor detrás del título */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-red-500/20 blur-3xl -z-10 animate-pulse"
            style={{ animationDuration: "6s", animationDelay: "2s" }}
          />
        </div>

        {/* Información de cumpleañeros con animación stagger */}
        <div
          className={`mb-2 space-y-6 transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
          }`}
          style={{
            transitionDelay: "1200ms",
          }}
        >
          <div className="text-2xl md:text-3xl text-gray-300 space-y-2">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {["Tomás", "Facundo", "Octavio"].map((name, index) => (
                <span
                  key={name}
                  className={`relative text-white font-bold bg-gradient-to-r from-amber-400/30 via-orange-400/30 to-red-500/30 backdrop-blur-sm rounded-full border border-amber-300/50 hover:scale-110 hover:shadow-[0_0_30px_rgba(251,191,36,0.8)] hover:border-orange-300/80 transition-all duration-500 ease-out group name-hover-effect name-glow name-float ${
                    isVisible
                      ? "scale-100 opacity-100 translate-y-0"
                      : "scale-0 opacity-0 translate-y-12"
                  }`}
                  style={{
                    transitionDelay: `${1400 + index * 200}ms`,
                    padding: "12px 20px",
                    textShadow:
                      "0 0 10px rgba(251,191,36,0.8), 0 0 15px rgba(249,115,22,0.6), 0 0 20px rgba(239,68,68,0.4)",
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  {/* Efecto de brillo interno constante */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent animate-pulse rounded-full"
                    style={{
                      animationDuration: "3s",
                      animationDelay: `${index * 0.3}s`,
                    }}
                  />

                  {/* Efecto de borde brillante constante */}
                  <div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-red-500 opacity-40 blur-sm -z-10 animate-pulse"
                    style={{
                      animationDuration: "4s",
                      animationDelay: `${index * 0.4}s`,
                    }}
                  />

                  {/* Partículas flotantes constantes */}
                  <div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full particle-float"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                  <div
                    className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-orange-400 rounded-full particle-float"
                    style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                  />

                  {/* Texto con gradiente y efecto shimmer */}
                  <span className="relative z-10 text-shimmer font-extrabold">
                    {name}
                  </span>

                  {/* Efecto de resplandor constante */}
                  <div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/0 via-orange-400/30 to-red-500/0 blur-md animate-pulse"
                    style={{
                      animationDuration: "5s",
                      animationDelay: `${index * 0.5}s`,
                    }}
                  />

                  {/* Efecto de partículas adicionales constantes */}
                  <div
                    className="absolute -top-2 -left-2 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
                    style={{
                      animationDelay: `${index * 0.3}s`,
                      animationDuration: "2s",
                    }}
                  />
                  <div
                    className="absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"
                    style={{
                      animationDelay: `${index * 0.3 + 0.3}s`,
                      animationDuration: "2.5s",
                    }}
                  />
                </span>
              ))}
            </div>
          </div>

          <div
            className={`space-y-3 transition-all duration-800 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-7"
            }`}
            style={{
              transitionDelay: "2000ms",
              padding: "0.5rem 0", // Padding personalizable
            }}
          ></div>
        </div>

        {/* CTA Button con animación espectacular */}
        <div
          className={` transition-all duration-1000 ease-out ${
            isVisible
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-0 opacity-0 translate-y-24"
          }`}
          style={{
            transitionDelay: "2200ms",
          }}
        >
          <button
            onClick={scrollToRSVP}
            className="group relative p-3 inline-flex items-center gap-4 bg-gradient-to-r bg-amber-300  text-white font-bold rounded-2xl transition-all duration-300 transform shadow-xl text-xl hover:scale-105 hover:shadow-[0_20px_40px_rgba(16,185,129,0.6)] active:scale-95 animate-float-button"
            style={{}}
          >
            <span>Confirmar Asistencia</span>
            <div
              className="text-2xl"
              style={{
                animation: "wiggle 2s ease-in-out infinite",
              }}
            >
              🎉
            </div>
          </button>
        </div>

        {/* Scroll indicator animado */}
        <div
          className={`relative mt-5 left-1/2 transform -translate-x-1/2 transition-opacity duration-800 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1500ms" }}
        >
          <div
            className="flex flex-col items-center gap-2 text-gray-400 cursor-pointer animate-pulse hover:text-orange-400 transition-colors duration-300"
            onClick={() =>
              document
                .getElementById("info")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-sm">Desliza para ver más</span>
            <FaChevronDown className="text-lg" />
          </div>
        </div>
      </div>

      {/* Elementos decorativos minimalistas */}
      <div
        className="absolute top-1/4 left-4 sm:left-10 w-2 h-2 bg-amber-400 rounded-full opacity-70"
        style={{
          animation: "pulse 3s ease-in-out infinite",
          animationDelay: "0s",
        }}
      />
      <div
        className="absolute top-1/3 right-4 sm:right-20 w-1 h-1 bg-orange-400 rounded-full opacity-90"
        style={{
          animation: "pulse 4s ease-in-out infinite",
          animationDelay: "1s",
        }}
      />
      <div
        className="absolute bottom-1/3 left-4 sm:left-20 w-1.5 h-1.5 bg-red-400 rounded-full opacity-60"
        style={{
          animation: "pulse 5s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />
    </section>
  );
}
