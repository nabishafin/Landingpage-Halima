"use client";
import { useEffect } from "react";

export default function useLocoScroll() {
  useEffect(() => {
    // 🧠 Make sure window & document exist (client-side only)
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const scrollEl = document.querySelector("[data-scroll-container]");
      if (!scrollEl) return;

      const scroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        lerp: 0.07,
      });

      return () => {
        if (scroll) scroll.destroy();
      };
    })();
  }, []);
}
