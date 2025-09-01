// InfoCard.tsx
import React from "react";

interface InfoItem {
  text: string;
  icon?: React.ReactNode | string;
  className?: string;
}

interface InfoCardProps {
  title: string;
  icon: React.ReactNode;
  items: InfoItem[];
  delay: number;
  isVisible: boolean;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  icon,
  items,
  delay,
  isVisible,
}) => {
  return (
    <div
      className={`
        relative group 
        bg-gradient-to-br from-white/10 to-white/5 
        backdrop-blur-xl 
        rounded-3xl 
        border border-white/20 
        shadow-2xl 
        hover:shadow-3xl 
        transition-all duration-700 ease-out 
        hover:scale-[1.02] 
        hover:bg-gradient-to-br hover:from-white/15 hover:to-white/8
        hover:border-white/40
       
        md:min-w-[200px]
        md:min-h-[200px]
        overflow-hidden
        transform
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

      {/* Borde animado con gradiente */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400/30 via-orange-400/30 to-red-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-md" />

      {/* Contenido principal */}
      <div className="relative p-6 flex flex-col  items-center gap-6 h-full">
        {/* Icono con efectos mejorados */}
        <div className="flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 group-hover:from-white/30 group-hover:to-white/20 transition-all duration-500 shadow-lg group-hover:shadow-xl">
            <div className="transform group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </div>
        </div>

        {/* Contenido de texto */}
        <div className="flex-1 space-y-5 text-left">
          {/* Título con animación */}

          {/* Lista de items */}
          <div className="">
            {items.map((item, i) => (
              <div
                key={i}
                className={`
                  flex items-start gap-4 
                  text-gray-200 group-hover:text-white 
                  transition-all duration-500 ease-out
                  transform group-hover:translate-x-1
                  ${item.className || ""}
                `}
                style={{
                  transitionDelay: `${i * 100}ms`,
                  animation: isVisible
                    ? `slideInLeft 0.8s ease-out ${
                        delay + 300 + i * 150
                      }ms both`
                    : "none",
                }}
              >
                {/* Icono del item */}
                {item.icon && (
                  <div className="flex-shrink-0 mt-1">
                    <span className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {item.icon}
                    </span>
                  </div>
                )}

                {/* Texto del item */}
                <span className="text-sm sm:text-base leading-relaxed group-hover:leading-relaxed transition-all duration-300">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Efecto de partículas en hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
        <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
        <div
          className="absolute bottom-4 left-4 w-1 h-1 bg-orange-400 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Efecto de brillo en las esquinas */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      <div
        className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-orange-400/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
        style={{ transitionDelay: "0.3s" }}
      />
    </div>
  );
};
