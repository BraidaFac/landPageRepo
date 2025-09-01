import { useEffect, useState } from "react";
import { FaChair, FaGlassMartiniAlt, FaUtensils } from "react-icons/fa";

export default function WhatToBringSection() {
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

    const section = document.getElementById("what-to-bring");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const itemsToBring = [
    {
      id: 1,
      title: "Platos y jarra",
      description: "No te olvides por favor",
      icon: <FaUtensils className="text-2xl" />,
      color: "from-pink-400 to-rose-500",
      bgColor: "bg-pink-400/20",
      borderColor: "border-pink-400/30",
    },
    {
      id: 2,
      title: "Tu bebida",
      description: "Lo que más te guste",
      icon: <FaGlassMartiniAlt className="text-2xl" />,
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-400/20",
      borderColor: "border-blue-400/30",
    },
    {
      id: 3,
      title: "Silla",
      description: "Para estar cómodo",
      icon: <FaChair className="text-2xl" />,
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-400/20",
      borderColor: "border-green-400/30",
    },
  ];

  return (
    <section
      id="what-to-bring"
      className={`min-h-auto flex items-start justify-center snap-start relative transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-12 opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
            <span className="white-wave-gradient">¿Qué traer?</span>
          </h2>
        </div>

        {/* Lista de items */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1200 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          {itemsToBring.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden transform hover:scale-105 ${item.bgColor} ${item.borderColor}`}
              style={{
                transitionDelay: `${600 + index * 200}ms`,
              }}
            >
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

              {/* Borde animado */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-md`}
              />

              {/* Contenido */}
              <div className="relative p-8 text-center">
                {/* Icono */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{item.icon}</div>
                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {item.title}
                </h3>

                {/* Descripción */}
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {item.description}
                </p>
              </div>

              {/* Partículas flotantes */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
              <div
                className="absolute bottom-6 left-6 w-1 h-1 bg-white/20 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
