"use client";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const handleScroll = (event: MouseEvent) => {
      event.preventDefault();

      const target = event.currentTarget as HTMLAnchorElement;

      // Remove active class from all links
      document.querySelectorAll(".onepage li .linkstyle.active").forEach((link) => {
        link.classList.remove("active");
      });

      // Add active class to clicked link
      target.classList.add("active");

      // Smooth scroll to the target section
      const targetId = target.getAttribute("href");

      // Check if targetId is a valid value before proceeding
      if (targetId) {
        const targetElement = document.querySelector(
          targetId
        ) as HTMLElement | null;
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: "smooth",
          });
        }
      }
    };

    // Attach event listeners to links
    const links = document.querySelectorAll<HTMLAnchorElement>(".onepage li .linkstyle");
    links.forEach((link) => link.addEventListener("click", handleScroll));

    // Cleanup event listeners on unmount
    return () => {
      links.forEach((link) => link.removeEventListener("click", handleScroll));
    };
  }, []);
  return <></>;
}
