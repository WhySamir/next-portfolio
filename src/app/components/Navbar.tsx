"use client";
import { useState } from "react";

import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="w-full md:w-auto  fixed left-1/2 top-10 z-[999] -translate-x-1/2 ">
      <div className="relative //animate-jump-in animate-once animate-duration-1000">
        <ul className="relative grid grid-cols-4 items-center py-2  border border-[#424242] rounded-full backdrop-blur-md  text-white text-lg shadow-lg transition-all ease-in-out duration-200 mx-2 md:mx-0">
          {navItems.map((item, index) => (
            <li
              key={item.href}
              className="relative z-10 px-2 md:px-4 text-center py-2 rounded-full cursor-pointer transition-colors duration-300 text-neutral-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link key={item.href} href={item.href} className="relative z-20">
                {item.label}
              </Link>
            </li>
          ))}
          <div
            className={`absolute top-0 h-full w-1/4 bg-[#303030] rounded-full transition-all duration-300 ease-in-out ${
              hoveredIndex !== null ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: `${(hoveredIndex ?? 0) * 25}%`,
            }}
          />{" "}
        </ul>
      </div>
    </nav>
  );
}
