import { useEffect, useState } from "react";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import {
  FaCheckCircle,
  FaCopy,
  FaCreditCard,
  FaMoneyBillWave,
  FaSpinner,
  FaTimes,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa";
import { toast } from "react-toastify";

interface FormData {
  nombre: string;
  formaPago: string;
}

interface RSVPSectionProps {
  register: UseFormRegister<FormData>;
  handleSubmit: UseFormHandleSubmit<FormData>;
  errors: FieldErrors<FormData>;
  isSubmitting: boolean;
  onFormSubmit: (data: FormData) => void;
  watch: UseFormWatch<FormData>;
  setValue: UseFormSetValue<FormData>;
}

export default function RSVPSection({
  register,
  handleSubmit,
  errors,
  isSubmitting,
  onFormSubmit,
  watch,
  setValue,
}: RSVPSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showTransferenciaInfo, setShowTransferenciaInfo] = useState(false);
  const formaPago = watch("formaPago");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("rsvp");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handlePagoChange = (tipo: string) => {
    if (tipo === "Transferencia") {
      console.log("Transferencia");
      setShowTransferenciaInfo(true);
    }
    if (tipo === "Efectivo") {
      console.log("Efectivo");
      setShowTransferenciaInfo(false);
    }
    setValue("formaPago", tipo);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copiado correctamente");
  };

  return (
    <>
      <section
        id="rsvp"
        data-section="rsvp"
        className={`min-h-screen flex items-center justify-center snap-start relative transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Fondo con efectos */}

        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-12 opacity-0 scale-95"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h2 className="text-5xl mt-10 md:text-6xl lg:text-7xl font-bold mb-8 text-white">
              <span className="bg-gradient-to-r from-amber-400 via-red-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                ¡Confirma tu asistencia!
              </span>
            </h2>
          </div>

          {/* Formulario */}
          <div
            className={`transition-all duration-1200 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <form
              onSubmit={handleSubmit(onFormSubmit)}
              className="relative group md:w-3/5 mx-auto"
            >
              {/* Contenedor principal del formulario */}
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden">
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                {/* Borde animado */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-md" />

                {/* Contenido del formulario */}
                <div className="relative p-8 sm:p-12">
                  {/* Campo de nombre */}
                  <div className="mb-10">
                    <label className=" text-white mb-4 text-xl font-semibold flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-gradient-to-br from-yellow-400/20 to-orange-400/20">
                        <FaUser className="text-yellow-400 text-lg" />
                      </div>
                      Tu nombre completo
                    </label>

                    <div className="relative group/input">
                      <input
                        {...register("nombre", {
                          required: "Por favor ingresá tu nombre",
                          minLength: {
                            value: 2,
                            message:
                              "El nombre debe tener al menos 2 caracteres",
                          },
                        })}
                        type="text"
                        placeholder="Ej: Porki"
                        className="w-full bg-white/10 border-2 border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 transition-all duration-500 text-lg px-6 py-4 backdrop-blur-sm group-hover/input:bg-white/15 group-hover/input:border-white/30"
                      />

                      {/* Efecto de brillo en el input */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/10 to-orange-400/10 opacity-0 group-hover/input:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>

                    {errors.nombre && (
                      <div className="mt-3 flex items-center gap-2 text-red-400 animate-pulse">
                        <div className="w-2 h-2 bg-red-400 rounded-full" />
                        <p className="text-sm font-medium">
                          {errors.nombre.message}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Opción de pago */}
                  <div className="mb-12">
                    <label className=" text-white text-xl font-semibold mb-6 flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-gradient-to-br from-green-400/20 to-blue-400/20">
                        <FaCreditCard className="text-green-400 text-lg" />
                      </div>
                      Forma de pago
                    </label>

                    <div className="space-y-6 gap-y-10">
                      {/* Opción Transferencia */}
                      <div
                        className="relative group/checkbox cursor-pointer"
                        onClick={() => handlePagoChange("Transferencia")}
                      >
                        <input
                          {...register("formaPago", {
                            required: "Por favor seleccioná una forma de pago",
                          })}
                          type="radio"
                          value="Transferencia"
                          className="sr-only"
                        />

                        <div
                          className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 ${
                            formaPago === "Transferencia"
                              ? "bg-yellow-400/20 border-yellow-400/40"
                              : "bg-white/5 border-white/10 group-hover/checkbox:bg-white/10 group-hover/checkbox:border-white/20"
                          }`}
                        >
                          {/* Radio personalizado */}
                          <div
                            className={`relative w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                              formaPago === "Transferencia"
                                ? "border-yellow-400 bg-yellow-400"
                                : "border-white/30 group-hover/checkbox:border-yellow-400"
                            }`}
                          >
                            {formaPago === "Transferencia" && (
                              <div className="w-3 h-3 bg-black rounded-full" />
                            )}
                          </div>

                          <div
                            className={`flex items-center gap-4 transition-colors ${
                              formaPago === "Transferencia"
                                ? "text-white"
                                : "text-gray-300 group-hover/checkbox:text-white"
                            }`}
                          >
                            <FaCreditCard className="text-yellow-400 text-xl" />
                            <span className="text-lg font-medium">
                              Transferencia
                            </span>
                          </div>
                        </div>

                        {/* Efecto de selección */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/10 to-orange-400/10 opacity-0 group-hover/checkbox:opacity-100 transition-opacity duration-300 -z-10" />
                      </div>

                      {/* Opción Efectivo */}
                      <div
                        className="relative group/checkbox cursor-pointer"
                        onClick={() => handlePagoChange("Efectivo")}
                      >
                        <input
                          {...register("formaPago", {
                            required: "Por favor seleccioná una forma de pago",
                          })}
                          type="radio"
                          value="Efectivo"
                          className="sr-only"
                        />

                        <div
                          className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 ${
                            formaPago === "Efectivo"
                              ? "bg-green-400/20 border-green-400/40"
                              : "bg-white/5 border-white/10 group-hover/checkbox:bg-white/10 group-hover/checkbox:border-white/20"
                          }`}
                        >
                          {/* Radio personalizado */}
                          <div
                            className={`relative w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                              formaPago === "Efectivo"
                                ? "border-green-400 bg-green-400"
                                : "border-white/30 group-hover/checkbox:border-green-400"
                            }`}
                          >
                            {formaPago === "Efectivo" && (
                              <div className="w-3 h-3 bg-black rounded-full" />
                            )}
                          </div>

                          <div
                            className={`flex items-center gap-4 transition-colors ${
                              formaPago === "Efectivo"
                                ? "text-white"
                                : "text-gray-300 group-hover/checkbox:text-white"
                            }`}
                          >
                            <FaMoneyBillWave className="text-green-400 text-xl" />
                            <span className="text-lg font-medium">
                              Efectivo
                            </span>
                          </div>
                        </div>
                        {errors.formaPago && (
                          <div className="mt-3 flex items-center gap-2 text-red-400 animate-pulse">
                            <div className="w-2 h-2 bg-red-400 rounded-full" />
                            <p className="text-sm font-medium">
                              {errors.formaPago.message}
                            </p>
                          </div>
                        )}
                        {/* Efecto de selección */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-0 group-hover/checkbox:opacity-100 transition-opacity duration-300 -z-10" />
                      </div>
                    </div>
                  </div>

                  {/* Botón de envío */}
                  <div className="text-center mb-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative group/button inline-flex items-center gap-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 disabled:from-gray-400 disabled:via-gray-500 disabled:to-gray-600 text-black font-bold rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl disabled:scale-100 disabled:cursor-not-allowed px-8 py-4 text-lg overflow-hidden"
                    >
                      {/* Efecto de brillo en el botón */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-700" />

                      {/* Contenido del botón */}
                      <div className="relative flex items-center gap-4">
                        {isSubmitting ? (
                          <>
                            <FaSpinner className="animate-spin text-2xl" />
                            <span>Confirmando...</span>
                          </>
                        ) : (
                          <>
                            <FaCheckCircle className="text-2xl group-hover/button:scale-110 transition-transform duration-300" />
                            <span>Confirmar Asistencia</span>
                          </>
                        )}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Dialog de información de transferencia */}
      {showTransferenciaInfo && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 mx-auto md:w-3/4"
          onClick={() => setShowTransferenciaInfo(false)}
        >
          <div
            className="bg-gradient-to-br from-white/15 via-white/10 to-white/15 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl text-white max-w-md w-full transition-all duration-300 animate-bounce-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del dialog */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-yellow-400/20 to-orange-400/20">
                  <FaCreditCard className="text-yellow-400 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Información de Transferencia
                </h3>
              </div>
              <button
                onClick={() => setShowTransferenciaInfo(false)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-300"
              >
                <FaTimes className="text-white text-lg" />
              </button>
            </div>

            {/* Contenido del dialog */}
            <div className="p-6 space-y-4">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Titular</p>
                    <p className="text-lg font-semibold text-white">
                      Tomas Derendinger Alvarez
                    </p>
                  </div>
                  <button className="p-2 rounded-xl bg-yellow-400/20 hover:bg-yellow-400/30 transition-colors duration-300"></button>
                </div>
              </div>
              {/* Banco */}
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Billetera</p>
                    <p className="text-lg font-semibold text-white">
                      Naranja X
                    </p>
                  </div>
                  <button className="p-2 rounded-xl bg-yellow-400/20 hover:bg-yellow-400/30 transition-colors duration-300"></button>
                </div>
              </div>

              {/* CBU */}
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300 mb-1">CBU</p>
                    <p className="text-lg font-semibold text-white font-mono">
                      4530000800016602463077
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard("0110123456789012345678")}
                    className="p-2 rounded-xl bg-yellow-400/20 hover:bg-yellow-400/30 transition-colors duration-300"
                  >
                    <FaCopy className="text-yellow-400 text-lg" />
                  </button>
                </div>
              </div>

              {/* Alias */}
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Alias</p>
                    <p className="text-lg font-semibold text-white">
                      TOMASDERENDINGER.NX
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard("CUMLEAÑOS.2025")}
                    className="p-2 rounded-xl bg-yellow-400/20 hover:bg-yellow-400/30 transition-colors duration-300"
                  >
                    <FaCopy className="text-yellow-400 text-lg" />
                  </button>
                </div>
              </div>

              {/* Monto */}
              <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl p-4 border border-yellow-400/30">
                <div className="text-center">
                  <p className="text-sm text-gray-300 mb-1">
                    Monto a transferir
                  </p>
                  <p className="text-2xl font-bold text-yellow-400">$6.000</p>
                </div>
              </div>

              {/* Botón de WhatsApp */}
              <button
                onClick={() => {
                  const message = encodeURIComponent(
                    "¡Hola! 🎉\n\nTe mando el comprobante de transferencia para el cumpleaños"
                  );
                  window.open(
                    `https://wa.me/+5493482312042?text=${message}`,
                    "_blank"
                  );
                }}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 py-4"
              >
                <FaWhatsapp className="text-xl" />
                <span>Enviar comprobante </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
