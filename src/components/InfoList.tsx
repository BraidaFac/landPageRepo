// InfoList.tsx
import React, { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaDollarSign,
  FaFire,
  FaMapMarkerAlt,
  FaUtensils,
} from "react-icons/fa";
import { InfoCard } from "./Card";

export const InfoList: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    {
      title: "Fecha y Hora",
      icon: <FaCalendarAlt className="text-3xl text-yellow-400" />,
      items: [
        {
          icon: <FaCalendarAlt className="text-yellow-400 text-sm" />,
          text: "Sabado 20 de septiembre",
        },
        {
          icon: <FaClock className="text-yellow-400 text-sm" />,
          text: "Al mediodía",
        },
      ],
      delay: 600,
    },
    {
      title: "Ubicación",
      icon: <FaMapMarkerAlt className="text-3xl text-green-400" />,
      items: [
        {
          text: "Quinta El Zorzal",
          icon: <FaMapMarkerAlt className="text-green-400" />,
        },
      ],
      delay: 800,
    },
    {
      title: "Menú",
      icon: <FaFire className="text-3xl text-red-400" />,
      items: [
        {
          icon: <FaUtensils className="text-red-400" />,
          text: "Asado a la estaca",
        },
      ],
      delay: 1000,
    },
    {
      title: "Contribución",
      icon: <FaDollarSign className="text-3xl text-blue-400" />,
      items: [
        {
          icon: <FaDollarSign className="text-blue-400" />,
          text: "Contribución: $5.000",
          className: "text-2xl text-blue-400",
        },
      ],
      delay: 1200,
    },
  ];

  return (
    <div className="w-full max-w-6xl  px-6 sm:px-8 lg:px-12 mt-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 xl:gap-12">
        {sections.map((section, idx) => (
          <InfoCard key={idx} {...section} isVisible={isVisible} />
        ))}
      </div>
    </div>
  );
};
