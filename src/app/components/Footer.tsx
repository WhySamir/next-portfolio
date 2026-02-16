"use client";

import Link from "next/link";

// ── Rain config ────────────────────────────────────────────────────
const RAIN = {
  dropCount: 60,
  minSpeed: 1.2,
  maxSpeed: 2.8,
  minLength: 18,
  maxLength: 40,
  width: 2,
  xPadding: 3,
  splashCount: 15,
};

interface Drop {
  id: number;
  x: number;
  speed: number;
  delay: number;
  length: number;
  opacity: number;
}

function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

function generateDrops(): Drop[] {
  const { dropCount, minSpeed, maxSpeed, minLength, maxLength, xPadding } = RAIN;
  const activeWidth = 100 - xPadding * 2;

  return Array.from({ length: dropCount }, (_, i) => {
    const r1 = seededRandom(i + 1);
    const r2 = seededRandom(i + 100);
    const r3 = seededRandom(i + 200);
    const r4 = seededRandom(i + 300);
    const r5 = seededRandom(i + 400);

    return {
      id: i,
      x: Math.round((xPadding + r1 * activeWidth) * 100) / 100,
      speed: Math.round((minSpeed + r2 * (maxSpeed - minSpeed)) * 100) / 100,
      delay: Math.round(r3 * 300) / 100,
      length: Math.round(minLength + r4 * (maxLength - minLength)),
      opacity: Math.round((0.4 + r5 * 0.6) * 100) / 100,
    };
  });
}

// Pre-generate so it's the same on server and client
const DROPS = generateDrops();
const SPLASHES = Array.from({ length: RAIN.splashCount }, (_, i) => ({
  id: i,
  x: Math.round((RAIN.xPadding + seededRandom(i + 500) * (100 - RAIN.xPadding * 2)) * 100) / 100,
  delay: Math.round(seededRandom(i + 600) * 250) / 100,
  duration: Math.round((0.6 + seededRandom(i + 700) * 0.6) * 100) / 100,
  size: Math.round((3 + seededRandom(i + 800) * 4) * 100) / 100,
}));

// ── Rain background layer ──────────────────────────────────────────
const RainBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
      {/* Primary rain */}
      {DROPS.map((drop) => (
        <div
          key={drop.id}
          style={{
            position: "absolute",
            left: `${drop.x}%`,
            top: 0,
            width: `${RAIN.width}px`,
            height: `${drop.length}px`,
            background: `linear-gradient(to bottom,
              transparent,
              rgba(120, 180, 255, ${drop.opacity * 0.3}),
              rgba(180, 215, 255, ${drop.opacity * 0.7}),
              rgba(220, 235, 255, ${drop.opacity})
            )`,
            borderRadius: "0 0 50% 50%",
            boxShadow: `0 0 ${RAIN.width * 2}px rgba(140, 200, 255, ${drop.opacity * 0.4})`,
            animation: `footer-rain-fall ${drop.speed}s ${drop.delay}s linear infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* Background thin rain for depth */}
      {DROPS.slice(0, 30).map((drop) => (
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
            animation: `footer-rain-fall ${drop.speed * 1.3}s ${drop.delay + 0.5}s linear infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* Splash effects */}
      {SPLASHES.map((s) => (
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
            animation: `footer-splash ${s.duration}s ${s.delay}s ease-out infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* Mist */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(100,150,220,0.04) 0%, transparent 30%, transparent 70%, rgba(100,150,220,0.06) 100%)",
          animation: "footer-mist 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 0%, transparent 60%, rgba(80,130,200,0.08) 100%)",
          animation: "footer-mist 12s 2s ease-in-out infinite",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 via-transparent to-blue-950/15" />
    </div>
  );
};

// ── Footer ─────────────────────────────────────────────────────────
const Footer = () => {
  return (
    <div className="px-5 sm:px-10 relative" id="contact">
      <div className="max-w-7xl mx-auto mb-2 w-full">
        <div className="relative py-14 px-4 lg:px-8 w-full h-full border rounded-2xl border-[#3d3d3d] overflow-hidden">
          {/* Rain background */}
          <RainBackground />

          {/* Footer content — z-10 so it sits above the rain */}
          <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-5 lg:items-center lg:justify-between gap-4 space-y-4 sm:space-y-0">
            <div className="lg:px-3 col-span-3 flex flex-col items-start">
              <h1
                style={{ fontFamily: "var(--font-playfair)" }}
                className="tracking-tighter pb-6 sm:max-w-[300px] w-full text-5xl sm:text-8xl animate-gradient-text"
              >
                Samir Shakya
              </h1>
              <p className="text-stone-200/70" suppressHydrationWarning>
                &copy; {new Date().getFullYear()} | All rights reserved.
              </p>
            </div>
            <div className="col-span-2 text-stone-200/70">
              <div className="flex flex-row text-sm sm:text-base sm:gap-5 justify-between items-start lg:justify-between max-w-[450px]">
                <div className="mt-4 font-bold flex flex-col gap-3 ">
                  <h1 className="text-stone-200">Navigate</h1>

                  <Link href={"/"} className="cursor-pointer hover:text-white">
                    Home
                  </Link>
                  <Link
                    href={"#projects"}
                    className="cursor-pointer hover:text-white"
                  >
                    Projects
                  </Link>
                  <Link
                    href={"#about"}
                    className="cursor-pointer hover:text-white"
                  >
                    About
                  </Link>
                </div>
                <div className="mt-4 font-bold flex cursor-pointer flex-col gap-3">
                  {" "}
                  <h1 className="text-stone-200">Projects</h1>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://clothing-store-pearl-psi.vercel.app"}
                    className="cursor-pointer hover:text-white"
                  >
                    ClodeX
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:text-white"
                    href={"https://codenotebookz.netlify.app"}
                  >
                    Icodenotzbook
                  </Link>
                  <Link
                    href={"https://wawatchfree.netlify.app/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YoutubeClone
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:text-white"
                    href={"https://my-shoe-store-chi.vercel.app/"}
                  >
                    Sam&apos;s Store
                  </Link>
                </div>
                <div className="mt-4 cursor-pointer font-bold flex flex-col gap-3">
                  {" "}
                  <h1 className="text-stone-200">Contact</h1>
                  <Link
                    href={"https://github.com/whysamir"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:text-white"
                  >
                    Github
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/in/samir-shakya"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:text-white"
                  >
                    Linkedin
                  </Link>
                  <Link
                    href={"https://www.instagram.com/samirr.shakya"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:text-white"
                  >
                    Instagram
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
