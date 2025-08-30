"use client";
import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let current = 0;
    let target = 0;
    const ease = 0.05;

    const container = document.getElementById("smooth-scroll-container");
    const spacer = document.getElementById("scroll-spacer");
    if (!container || !spacer) return;

    const setSpacerHeight = () => {
      spacer.style.height = `${container.getBoundingClientRect().height}px`;
    };
    setSpacerHeight();
    window.addEventListener("resize", setSpacerHeight);

    const onScroll = () => {
      target = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);

    const animate = () => {
      current += (target - current) * ease;
      container.style.transform = `translateY(-${current}px)`;
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", setSpacerHeight);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div id="smooth-scroll-container" className="relative w-full">
        {children}
      </div>
      <div id="scroll-spacer" />
    </>
  );
}
