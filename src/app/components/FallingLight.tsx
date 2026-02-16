"use client";

import { useEffect, useMemo, useRef } from "react";

// ── Configuration ──────────────────────────────────────────────────
const CONFIG = {
  dropCount: 80,          // total rain drops
  minSpeed: 1.2,          // fastest fall (seconds)
  maxSpeed: 2.8,          // slowest fall (seconds)
  minLength: 18,          // shortest streak (px)
  maxLength: 40,          // longest streak (px)
  width: 2,              // streak width (px)
  xPadding: 3,            // % padding from edges
  splashCount: 20,        // number of splash points at the bottom
};

interface Drop {
  id: number;
  x: number;         // % from left
  speed: number;     // fall duration in seconds
  delay: number;     // animation delay
  length: number;    // streak height in px
  opacity: number;
}

function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

function generateDrops(): Drop[] {
  const { dropCount, minSpeed, maxSpeed, minLength, maxLength, xPadding } = CONFIG;
  const activeWidth = 100 - xPadding * 2;

  return Array.from({ length: dropCount }, (_, i) => {
    const r1 = seededRandom(i + 1);
    const r2 = seededRandom(i + 100);
    const r3 = seededRandom(i + 200);
    const r4 = seededRandom(i + 300);
    const r5 = seededRandom(i + 400);

    return {
      id: i,
      x: xPadding + r1 * activeWidth,
      speed: minSpeed + r2 * (maxSpeed - minSpeed),
      delay: r3 * 3,
      length: minLength + r4 * (maxLength - minLength),
      opacity: 0.4 + r5 * 0.6,
    };
  });
}

// ── Component ──────────────────────────────────────────────────────
const FallingLight = () => {
  const drops = useMemo(generateDrops, []);
  const containerRef = useRef<HTMLDivElement>(null);

  // Inject keyframes once
  useEffect(() => {
    const styleId = "rain-keyframes";
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      @keyframes rain-fall {
        0% {
          transform: translateY(-60px);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(calc(100vh + 20px));
          opacity: 0;
        }
      }

      @keyframes splash {
        0% {
          transform: scale(0) translateY(0);
          opacity: 0.8;
        }
        50% {
          transform: scale(1) translateY(-4px);
          opacity: 0.5;
        }
        100% {
          transform: scale(1.5) translateY(-8px);
          opacity: 0;
        }
      }

      @keyframes mist-drift {
        0%, 100% {
          opacity: 0.03;
          transform: translateX(0);
        }
        50% {
          opacity: 0.08;
          transform: translateX(20px);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      const el = document.getElementById(styleId);
      el?.remove();
    };
  }, []);

  const splashes = useMemo(() => {
    return Array.from({ length: CONFIG.splashCount }, (_, i) => ({
      id: i,
      x: CONFIG.xPadding + seededRandom(i + 500) * (100 - CONFIG.xPadding * 2),
      delay: seededRandom(i + 600) * 2.5,
      duration: 0.6 + seededRandom(i + 700) * 0.6,
      size: 3 + seededRandom(i + 800) * 4,
    }));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] sm:h-[800px] bg-[#1A1A1A] overflow-hidden rounded-lg border border-gray-800"
    >
      {/* ── Rain drops ─────────────────────────────────────── */}
      {drops.map((drop) => (
        <div
          key={drop.id}
          style={{
            position: "absolute",
            left: `${drop.x}%`,
            top: 0,
            width: `${CONFIG.width}px`,
            height: `${drop.length}px`,
            background: `linear-gradient(to bottom,
              transparent,
              rgba(120, 180, 255, ${drop.opacity * 0.3}),
              rgba(180, 215, 255, ${drop.opacity * 0.7}),
              rgba(220, 235, 255, ${drop.opacity})
            )`,
            borderRadius: "0 0 50% 50%",
            boxShadow: `0 0 ${CONFIG.width * 2}px rgba(140, 200, 255, ${drop.opacity * 0.4})`,
            animation: `rain-fall ${drop.speed}s ${drop.delay}s linear infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* ── Thinner secondary rain for depth ────────────── */}
      {drops.slice(0, 40).map((drop) => (
        <div
          key={`thin-${drop.id}`}
          style={{
            position: "absolute",
            left: `${(drop.x + 15) % 100}%`,
            top: 0,
            width: "1px",
            height: `${drop.length * 0.6}px`,
            background: `linear-gradient(to bottom,
              transparent,
              rgba(160, 200, 255, ${drop.opacity * 0.15}),
              rgba(200, 225, 255, ${drop.opacity * 0.3})
            )`,
            borderRadius: "0 0 50% 50%",
            animation: `rain-fall ${drop.speed * 1.3}s ${drop.delay + 0.5}s linear infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* ── Splash effects at bottom ───────────────────── */}
      {splashes.map((s) => (
        <div
          key={`splash-${s.id}`}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            bottom: "8px",
            width: `${s.size}px`,
            height: `${s.size * 0.4}px`,
            background: `radial-gradient(ellipse, rgba(180, 215, 255, 0.6), transparent)`,
            borderRadius: "50%",
            animation: `splash ${s.duration}s ${s.delay}s ease-out infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* ── Drifting mist layers ────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(100,150,220,0.04) 0%, transparent 30%, transparent 70%, rgba(100,150,220,0.06) 100%)",
          animation: "mist-drift 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, transparent 60%, rgba(80,130,200,0.08) 100%)",
          animation: "mist-drift 12s 2s ease-in-out infinite",
        }}
      />

      {/* ── Subtle ambient glow ────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 via-transparent to-blue-950/15 pointer-events-none" />
    </div>
  );
};

export default FallingLight;