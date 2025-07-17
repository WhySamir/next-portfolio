"use client";

import { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";

export default function SmoothScrollProvider() {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, []);

  return null;
}
