import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    let progressInterval: NodeJS.Timeout | null = null;

    // Esperar 2.5 segundos antes de empezar la barra de progreso
    const progressTimer = setTimeout(() => {
      let currentProgress = 0;
      progressInterval = setInterval(() => {
        currentProgress += 3;
        console.log("Progress:", currentProgress); // Debug
        if (currentProgress >= 100) {
          if (progressInterval) clearInterval(progressInterval);
          setProgress(100);
          setTimeout(onComplete, 500);
        } else {
          setProgress(currentProgress);
        }
      }, 50);
    }, 2500);

    return () => {
      clearTimeout(progressTimer);
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black z-50 flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ padding: "2rem" }} // Padding personalizable
    >
      {/* Fondo moderno con patrón geométrico - igual que la página principal */}
      <div className="fixed inset-0 opacity-100 overflow-hidden">
        {/* Gradient overlays modernos */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 via-transparent to-indigo-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-900/20 via-transparent to-blue-900/25"></div>

        {/* Efectos de luz dinámica */}
        <div
          className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-green-400/10 rounded-full blur-3xl"
          style={{ animation: "float 8s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-green-500/10 rounded-full blur-3xl"
          style={{ animation: "float 10s ease-in-out infinite 2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl"
          style={{ animation: "pulse 6s ease-in-out infinite" }}
        ></div>

        {/* Efectos de luz adicionales */}
        <div
          className="absolute top-1/3 right-1/3 w-32 sm:w-48 h-32 sm:h-48 bg-purple-400/8 rounded-full blur-2xl"
          style={{ animation: "float 12s ease-in-out infinite 1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-40 sm:w-56 h-40 sm:h-56 bg-amber-400/8 rounded-full blur-2xl"
          style={{ animation: "pulse 8s ease-in-out infinite 3s" }}
        ></div>
        <div
          className="absolute top-3/4 left-1/4 w-24 sm:w-36 h-24 sm:h-36 bg-cyan-400/6 rounded-full blur-xl"
          style={{ animation: "float 15s ease-in-out infinite 4s" }}
        ></div>
      </div>
      <div className="text-center text-white max-w-4xl mx-auto relative z-10">
        {/* Logo principal con animación */}
        <div
          className={`mb-8 transition-all duration-1500 ease-out ${
            isVisible
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-50 opacity-0 translate-y-12"
          }`}
          style={{
            transitionDelay: "300ms",
            padding: "1rem 0", // Padding personalizable
          }}
        >
          <div
            className="inline-block text-8xl mb-4 animate-pulse"
            style={{ animation: "float 3s ease-in-out infinite" }}
          >
            🎂
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            ¡27 Años!
          </h1>
        </div>

        {/* Nombres */}
        <div
          className={`mb-12 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDelay: "800ms",
            padding: "1rem 0", // Padding personalizable
          }}
        >
          <div className="flex flex-wrap justify-center gap-4 text-2xl md:text-3xl text-gray-300">
            {["Tomás", "Facundo", "Octavio"].map((name, index) => (
              <span
                key={name}
                className={`font-semibold px-4 py-2 bg-white/10 rounded-full border border-white/20 transition-all duration-500 ${
                  isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
                }`}
                style={{
                  transitionDelay: `${1000 + index * 200}ms`,
                  padding: "8px 16px", // Padding personalizable
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Detalles del evento */}
        <div
          className={`mb-8 transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            transitionDelay: "1600ms",
            padding: "1rem 0", // Padding personalizable
          }}
        >
          <p className="text-xl text-gray-400 mb-2">
            <span className="text-yellow-400 font-medium">
              Asado a la estaca
            </span>{" "}
            • Quinta El Zorzal
          </p>
          <p className="text-lg text-gray-500">
            Sabado 20 de septiembre al mediodía
          </p>
        </div>

        {/* Barra de progreso */}
        <div
          className={`flex justify-center transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "2200ms" }}
        >
          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-100 ease-out"
              style={{
                width: `${progress}%`,
                transform: "translateZ(0)", // Hardware acceleration
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
