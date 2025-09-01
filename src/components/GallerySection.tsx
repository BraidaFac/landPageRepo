import { useEffect, useState } from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GallerySection() {
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

    const section = document.getElementById("gallery");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    { id: 1, title: "Cumpleaños pasados", url: "/fotos/grupo.jpg" },
    { id: 2, title: "Grandes asados" },
    { id: 3, title: "Momentos únicos" },
    { id: 4, title: "Diversión garantizada" },
    { id: 5, title: "¡Nos vemos!" },
  ];

  return (
    <section
      id="gallery"
      className={`min-h-auto flex items-start justify-center snap-start relative transition-opacity duration-1500 overflow-hidden ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10 overflow-hidden">
        {/* Header mejorado */}
        <div
          className={`mb-20 transition-all duration-1000 ease-out h-auto${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{
            transitionDelay: "200ms",
          }}
        >
          <div
            className="inline-block mb-2"
            style={{
              animation: isVisible ? "bounce 2s ease-in-out" : "none",
              padding: "1rem", // Padding personalizable
            }}
          >
            <FaBirthdayCake className="text-6xl text-amber-400" />
          </div>
          <h1 className="md:text-7xl text-5xl h-auto font-bold white-wave-gradient">
            Recuerdos
          </h1>
        </div>

        {/* Galería Swiper con efectos mejorados */}
        <div
          className={`gallery-swiper transition-all duration-1200 ease-out ${
            isVisible
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-90 opacity-0 translate-y-12"
          }`}
          style={{
            transitionDelay: "600ms",
          }}
        >
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
          >
            {galleryImages.map((image) => (
              <SwiperSlide
                key={image.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20"
                style={{
                  width: "280px",
                  height: "350px",
                  padding: "0",
                }}
              >
                <div
                  className="w-full h-full flex items-center justify-center text-white"
                  style={{
                    padding: "2rem",
                    backgroundImage: `url(${image.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
