import { useState } from "react";
import { FaBirthdayCake, FaWhatsapp } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EventInfoSection from "../components/EventInfoSection";
import HeroSection from "../components/HeroSection";
import MapSection from "../components/MapSection";
import RSVPSection from "../components/RSVPSection";
import SplashScreen from "../components/SplashScreen";
import WhatToBringSection from "../components/WhatToBringSection";

export default function Home() {
  const [showHome, setshowHome] = useState(false);

  return (
    <>
      {/* Splash Screen with CSS transition */}

      <div
        className={`transition-opacity duration-500 ${
          !showHome ? "opacity-100" : "opacity-0"
        }`}
      >
        <SplashScreen onComplete={() => setshowHome(true)} />
      </div>
      {showHome && (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black snap-y snap-mandatory overflow-y-scroll overflow-x-hidden relative">
          {/* Fondo moderno con patrón geométrico */}
          <div className="fixed inset-0 opacity-100 overflow-hidden">
            {/* Grid pattern base */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

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

          {/* Secciones principales */}
          <HeroSection />
          <EventInfoSection />
          <WhatToBringSection />
          {/* <GallerySection /> */}
          <RSVPSection />
          <MapSection />

          {/* Floating action button - contacto rápido */}
          <div
            className="fixed bottom-4 sm:bottom-8 right-2 sm:right-4 z-40 transition-all duration-300 hover:scale-110"
            style={{ padding: "0.3rem" }}
          >
            <button
              onClick={() => {
                const message = encodeURIComponent(
                  "¡Hola! Tengo una consulta sobre el cumpleaños del 20 de septiembre 🎉"
                );
                window.open(
                  `https://wa.me/+5493482312042?text=${message}`,
                  "_blank"
                );
              }}
              className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              style={{ padding: "0.75rem" }}
              title="Contactar por WhatsApp"
            >
              <FaWhatsapp className="text-xl sm:text-2xl group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Footer minimalista */}
          <footer className="relative w-full flex items-center justify-center bg-black/20 backdrop-blur-sm border-t border-white/10 py-12 text-center text-gray-400">
            <div
              className="max-w-4xl  px-8"
              style={{ padding: "2rem 0" }} // Padding personalizable
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <FaBirthdayCake className="text-yellow-400 text-xl" />
                <span className="text-lg font-semibold text-white">
                  Cumpleaños 2025
                </span>
              </div>
              <p className="text-sm">Tomás • Facundo • Octavio</p>
              <p className="text-xs mt-2 opacity-70">
                20 de septiembre • Quinta El Zorzal
              </p>
            </div>
          </footer>

          {/* Toast Container */}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            theme="dark"
            toastStyle={{
              background: "rgba(0, 0, 0, 0.9)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          />
        </div>
      )}
    </>
  );
}
