import { useEffect, useRef, useState } from "react";

export default function MapSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`min-h-auto  snap-start relative  flex flex-col items-center justify-center  transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto pt-10 text-white relative z-10 w-full">
        {/* Header mejorado */}
        <div
          className={`text-center  transition-all duration-1000 ease-out ${
            inView ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
          style={{
            transitionDelay: "200ms",
            padding: "2rem", // Padding personalizable
          }}
        >
          <div
            className="inline-block mb-6 animate-pulse"
            style={{
              animation: "wiggle 6s ease-in-out infinite",
            }}
          >
            <span className="text-5xl">🗺️</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 relative hover:scale-105 transition-transform duration-300 ease-out">
            <span className="white-wave-gradient">¿Cómo llegar?</span>

            {/* Efecto de brillo animado */}
            <div
              className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-white/30 to-gray-200/30 rounded-full blur-xl"
              style={{
                animation: "shimmer 4s ease-in-out infinite",
              }}
            />
          </h2>
        </div>

        {/* Mapa con animación espectacular */}
        <div
          className={`bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl hover:scale-[1.01] hover:shadow-[0_30px_60px_rgba(52,211,153,0.2)] transition-all duration-700 ease-out ${
            inView
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-80 opacity-0 translate-y-24"
          }`}
          style={{
            transitionDelay: "400ms",
            padding: "2rem", // Padding totalmente personalizable!
            margin: "1rem 0", // Margin también personalizable
          }}
        >
          {/* Mapa embebido más grande */}
          <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gray-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.0021272803506!2d-59.65635732407407!3d-29.19406429236664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x944ea56078ed1cfb%3A0xd1d8d508300f2e93!2sRa%C3%BAl%20Carussi%20830%2C%20S3560%20Reconquista%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1756398039711!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Quinta El Zorzal"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
