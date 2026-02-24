import { useEffect } from "react";

function getSeason(): "winter" | "spring" | "summer" | "fall" {
  const month = new Date().getMonth() + 1; // 1–12
  if (month === 12 || month <= 2) return "winter";
  if (month <= 5) return "spring";
  if (month <= 8) return "summer";
  return "fall";
}

const SEASON_EMOJI: Record<string, string> = {
  winter: "❄️",
  spring: "🌸",
  summer: "✨",
  fall: "🍂",
};

const PARTICLE_COUNT = 16;

export default function SeasonalParticles() {
  const season = getSeason();
  const emoji = SEASON_EMOJI[season];

  useEffect(() => {
    const id = "seasonal-particles-keyframes";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      @keyframes floatDown {
        0%   { transform: translateY(-40px) translateX(0px); opacity: 0; }
        10%  { opacity: 0.5; }
        50%  { transform: translateY(50vh) translateX(var(--sway)); }
        90%  { opacity: 0.5; }
        100% { transform: translateY(110vh) translateX(0px); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.getElementById(id)?.remove();
    };
  }, []);

  const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    const left = Math.random() * 96 + 2; // 2%–98%
    const duration = 5 + Math.random() * 7; // 5s–12s
    const delay = Math.random() * 10; // stagger start
    const sway = (Math.random() - 0.5) * 60; // –30px to +30px

    return (
      <span
        key={i}
        style={{
          position: "absolute",
          top: 0,
          left: `${left}%`,
          fontSize: "14px",
          opacity: 0.5,
          userSelect: "none",
          animation: `floatDown ${duration}s ${delay}s ease-in-out infinite`,
          ["--sway" as string]: `${sway}px`,
        }}
      >
        {emoji}
      </span>
    );
  });

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {particles}
    </div>
  );
}
