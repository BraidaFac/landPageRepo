import { useEffect, useState } from "react";

export default function AsadoAnimationSection() {
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

    const section = document.getElementById("asado-animation");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="asado-animation"
      className={`h-screen flex items-center justify-center snap-start relative overflow-hidden transition-opacity duration-1500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ padding: "80px 20px" }} // Padding personalizable
    >
      <div className="text-center text-white relative z-10">
        {/* Título */}
        <div
          className={`mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{
            transitionDelay: "300ms",
            padding: "2rem 0", // Padding personalizable
          }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="white-wave-gradient">Asado a la Estaca</span>
          </h2>
          <p className="text-xl text-gray-300">La tradición que nos une</p>
        </div>

        {/* Animación del asado simplificada */}
        <div
          className={`relative transition-all duration-1200 ease-out ${
            isVisible
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-75 opacity-0 translate-y-12"
          }`}
          style={{
            transitionDelay: "600ms",
            padding: "2rem", // Padding personalizable
          }}
        >
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            className="mx-auto"
            style={{ padding: "1rem" }} // Padding personalizable para SVG
          >
            {/* Base del asador */}
            <rect
              x="140"
              y="250"
              width="20"
              height="40"
              fill="#8B4513"
              className="opacity-90"
            />

            {/* Estaca */}
            <rect
              x="145"
              y="50"
              width="10"
              height="200"
              fill="#654321"
              className="opacity-90"
            />

            {/* Carne */}
            <ellipse
              cx="150"
              cy="150"
              rx="60"
              ry="30"
              fill="#8B0000"
              className={isVisible ? "animate-pulse" : ""}
            />

            {/* Fuego base */}
            <ellipse
              cx="150"
              cy="270"
              rx="40"
              ry="15"
              fill="#FF4500"
              className={isVisible ? "animate-pulse" : ""}
              style={{
                animation: isVisible ? "pulse 2s ease-in-out infinite" : "none",
              }}
            />

            {/* Llamas animadas */}
            <path
              d="M130 270 Q130 250 140 240 Q145 230 150 240 Q155 230 160 240 Q170 250 170 270"
              fill="#FF6B35"
              className={isVisible ? "animate-pulse" : ""}
              style={{
                animation: isVisible
                  ? "wiggle 3s ease-in-out infinite"
                  : "none",
                transformOrigin: "center bottom",
              }}
            />

            {/* Humo */}
            <circle
              cx="150"
              cy="120"
              r="8"
              fill="#e0e0e0"
              className="opacity-60"
              style={{
                animation: isVisible ? "float 4s ease-in-out infinite" : "none",
              }}
            />
            <circle
              cx="155"
              cy="100"
              r="6"
              fill="#d0d0d0"
              className="opacity-40"
              style={{
                animation: isVisible
                  ? "float 4s ease-in-out infinite 0.5s"
                  : "none",
              }}
            />
            <circle
              cx="145"
              cy="80"
              r="4"
              fill="#c0c0c0"
              className="opacity-30"
              style={{
                animation: isVisible
                  ? "float 4s ease-in-out infinite 1s"
                  : "none",
              }}
            />
          </svg>
        </div>

        {/* Texto final */}
        <div
          className={`mt-8 transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            transitionDelay: "1200ms",
            padding: "1rem 0", // Padding personalizable
          }}
        >
          <p className="text-xl md:text-2xl">
            Preparado con amor y fuego lento 🥩
          </p>
        </div>
      </div>
    </section>
  );
}
