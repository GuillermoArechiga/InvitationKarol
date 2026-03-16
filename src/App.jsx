import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { FaHeart } from "react-icons/fa";

import bautizo from "./assets/bautizo.jpg";
import birthday from "./assets/birthday.jpg";
import baby from "./assets/baby.jpg";
import img1 from "./assets/img1.png";
import img4 from "./assets/img4.png";

export default function Invitation() {
  const targetDate = new Date("2026-04-11T16:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const params = new URLSearchParams(window.location.search);
  const adults = params.get("A");
  const children = params.get("C");

  const [showModal, setShowModal] = useState(false);
  const [confirmAdults, setConfirmAdults] = useState(adults || 0);
  const [confirmChildren, setConfirmChildren] = useState(children || 0);

  const guestText =
    adults || children
      ? ` Somos ${adults || 0} adultos y ${children || 0} niños.`
      : "";

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = targetDate - new Date();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft({ days, hours, minutes });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const sparkles = useMemo(
    () =>
      Array.from({ length: 14 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 10 + Math.random() * 16,
        duration: 5 + Math.random() * 4,
      })),
    [],
  );

  const goldDots = useMemo(
    () =>
      Array.from({ length: 60 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 4 + Math.random() * 8,
        duration: 30 + Math.random() * 20,
        driftX: (Math.random() - 0.5) * 120,
        driftY: (Math.random() - 0.5) * 120,
        blink: 8 + Math.random() * 6,
        delay: Math.random() * 10,
      })),
    [],
  );

  const events = [
    {
      title: "Bautizo",
      subtitle: "Con mucho amor te invitamos al bautizo de",
      name: "Nuestra Princesa",
      date: "11 de Abril",
      time: "4:00 PM",
      place: "Parroquia de Nuestra Señora de la Encarnación",
      address:
        "Paseo Lomas los Rosales 703 1 3, Lomas de Rosales, 89100 Tampico, Tamps.",
      map: "https://maps.app.goo.gl/iJMJjHDEFBZ3um8h7",
      image: bautizo,
    },
    {
      title: "Primer Añito",
      subtitle: "Después acompáñanos a celebrar su",
      name: "1er Cumpleaños",
      date: "11 de Abril",
      time: "5:00 PM",
      place: "Salón de Fiestas Children's",
      address: "Fidel Ruiz 201, Linda Vista, 89107 Tampico, Tamps.",
      map: "https://maps.app.goo.gl/uSTFtWaEEonHY6rf6",
      image: birthday,
    },
  ];

  const sendConfirmation = () => {
    const msg = `Hola! Confirmo mi asistencia al Bautizo y Primer Añito de Karol el sábado 11 de abril. Asistiremos ${confirmAdults} adultos y ${confirmChildren} niños. 🎉`;

    const url = `https://wa.me/5218334385938?text=${encodeURIComponent(msg)}`;

    window.open(url, "_blank");
  };

  const GoldDots = () => (
    <>
      {goldDots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none z-0"
          style={{
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            background: "#FFD700",
            filter: "blur(0.6px)",
            boxShadow:
              "0 0 8px rgba(255,215,0,0.6), 0 0 18px rgba(255,215,0,0.3)",
          }}
          animate={{
            x: dot.driftX,
            y: dot.driftY,
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: dot.delay,
          }}
        >
          <motion.div
            className="w-full h-full rounded-full"
            animate={{ opacity: [0.35, 0.8, 0.35] }}
            transition={{
              duration: dot.blink,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}
    </>
  );

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-secondary/20 relative text-base-content">
      {/* Sparkles */}
      {sparkles.map((sparkle, i) => (
        <motion.div
          key={i}
          className="absolute text-white pointer-events-none"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            fontSize: `${sparkle.size}px`,
            filter: "drop-shadow(0 0 10px rgba(255,255,255,0.9))",
          }}
          animate={{
            y: [-6, 6, -6],
            opacity: [0.8, 1, 0.8],
            scale: [1, 1.25, 1],
          }}
          transition={{ duration: sparkle.duration, repeat: Infinity }}
        >
          ✨
        </motion.div>
      ))}

      {/* HERO SECTION */}
      <section className="h-screen snap-start flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <motion.h1
          className="text-5xl font-title text-secondary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Bautizo & Primer Añito
        </motion.h1>

        <motion.h2
          className="text-6xl font-title text-secondary mt-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          Karol
        </motion.h2>

        <motion.p
          className="mt-2 text-lg font-semibold tracking-widest text-secondary/80 uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          11 · Abril · 2026
        </motion.p>

        <p className="mt-6 text-base-content/70 max-w-sm">
          ¡Acompáñanos a celebrar este día tan especial!
        </p>

        <div className="relative mt-10 flex items-center justify-center">
          <motion.img
            src={img4}
            className="absolute w-104 max-w-none opacity-80 pointer-events-none"
            animate={{ rotate: [0, 4, -4, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <img
            src={baby}
            className="relative w-40 h-40 rounded-full object-cover shadow-xl border-4 border-white ring-4 ring-secondary/30"
          />
        </div>

        <div className="grid grid-flow-col gap-6 text-center auto-cols-max mt-10">
          <div className="bg-base-100 rounded-box p-4 shadow">
            <span className="countdown font-mono text-3xl text-secondary">
              <span style={{ "--value": timeLeft.days }}></span>
            </span>
            días
          </div>

          <div className="bg-base-100 rounded-box p-4 shadow">
            <span className="countdown font-mono text-3xl text-secondary">
              <span style={{ "--value": timeLeft.hours }}></span>
            </span>
            horas
          </div>

          <div className="bg-base-100 rounded-box p-4 shadow">
            <span className="countdown font-mono text-3xl text-secondary">
              <span style={{ "--value": timeLeft.minutes }}></span>
            </span>
            min
          </div>
        </div>
      </section>

      {/* EVENT SECTIONS */}
      {events.map((event, i) => (
        <section
          key={i}
          className="h-screen snap-start flex items-center justify-center px-6 relative overflow-hidden"
        >
          <GoldDots />

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl w-full max-w-md py-8 z-10"
          >
            <img
              src={event.image}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-white/10"></div>

            <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white/80"></div>

            <div className="relative z-10 p-8 text-center">
              <h2 className="text-4xl font-title text-secondary">
                {event.title}
              </h2>

              <p className="mt-4 text-base-content/80">{event.subtitle}</p>

              <h3 className="mt-4 text-xl font-semibold">{event.name}</h3>

              <div className="mt-6 text-lg space-y-2">
                <p>📅 {event.date}</p>
                <p>⏰ {event.time}</p>
                <p>📍 {event.place}</p>
                <p className="text-sm opacity-70">{event.address}</p>
              </div>

              <a
                href={event.map}
                target="_blank"
                className="btn btn-secondary mt-6 rounded-full"
              >
                Ver ubicación
              </a>
            </div>
          </motion.div>
        </section>
      ))}

      {/* CONFIRM SECTION */}
      <section className="h-screen snap-start flex flex-col justify-center items-center text-center relative overflow-hidden">
        <GoldDots />

        <img
          src={img1}
          className="absolute z-30 bottom-0 right-0 w-[140px] max-w-none opacity-70 pointer-events-none"
        />

        <div className="relative z-20 bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl px-10 py-12 flex flex-col items-center max-w-sm">
          <div className="flex items-center gap-6 text-secondary text-xl mb-8">
            <FaHeart />
            <FaHeart />
            <FaHeart />
          </div>

          {(adults || children) && (
            <div className="flex flex-col items-center gap-4 mb-6">
              <p className="text-sm text-base-content/70 tracking-wide uppercase">
                Esta invitación incluye
              </p>

              <div className="flex flex-col gap-3 w-full">
                {/* Adults */}
                <div className="flex items-center justify-between bg-base-100/80 rounded-xl px-4 py-3 shadow">
                  <div className="text-2xl font-bold text-secondary">
                    {adults || 0}
                  </div>
                  <div className="text-sm text-base-content/70 uppercase tracking-wide">
                    Adultos
                  </div>
                </div>

                {/* Children */}
                <div className="flex items-center justify-between bg-base-100/80 rounded-xl px-4 py-3 shadow">
                  <div className="text-2xl font-bold text-secondary">
                    {children || 0}
                  </div>
                  <div className="text-sm text-base-content/70 uppercase tracking-wide">
                    Niños
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="btn btn-secondary btn-lg rounded-full shadow-xl animate-pulse [animation-duration:5s]"
            >
              Confirmar asistencia
            </button>

            <p className="text-sm text-base-content/70 max-w-3/4 text-center">
              Nos encantará contar contigo, por favor confirma tu asistencia con
              al menos una semana de anticipación.
            </p>
          </div>

          {/* Gift suggestion */}
          <div className="mb-8 text-center mt-12">
            <p className="text-xs uppercase tracking-wider text-base-content/60 mb-2">
              Sugerencia de obsequio
            </p>

            <div className="flex justify-center items-center gap-2 text-base-content/80">
              <span className="flex items-center gap-1">
                🎁 <span className="text-sm">Regalo</span>
              </span>

              <span className="opacity-40">|</span>

              <span className="flex items-center gap-1">
                <span className="text-sm">✉️ Sobre</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-80 text-center">
            <h2 className="text-xl font-semibold mb-6">Confirmar asistencia</h2>

            {/* Adults */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-base">Adultos</span>

              <div className="flex items-center gap-3">
                <button
                  className="btn btn-circle btn-sm"
                  onClick={() =>
                    setConfirmAdults(Math.max(0, confirmAdults - 1))
                  }
                >
                  −
                </button>

                <span className="w-8 text-center text-xl font-bold text-secondary">
                  {confirmAdults}
                </span>

                <button
                  className="btn btn-circle btn-sm"
                  onClick={() =>
                    setConfirmAdults(
                      Math.min(Number(adults || 0), confirmAdults + 1),
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="flex justify-between items-center mb-8">
              <span className="text-base">Niños</span>

              <div className="flex items-center gap-3">
                <button
                  className="btn btn-circle btn-sm"
                  onClick={() =>
                    setConfirmChildren(Math.max(0, confirmChildren - 1))
                  }
                >
                  −
                </button>

                <span className="w-8 text-center text-xl font-bold text-secondary">
                  {confirmChildren}
                </span>

                <button
                  className="btn btn-circle btn-sm"
                  onClick={() =>
                    setConfirmChildren(
                      Math.min(Number(children || 0), confirmChildren + 1),
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-3 justify-center">
              <button
                className="btn btn-ghost"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>

              <button className="btn btn-secondary" onClick={sendConfirmation}>
                Enviar confirmación
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
