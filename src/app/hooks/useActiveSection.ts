// app/hooks/useActiveSection.ts
import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds: string[]) {
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveHash(`#${id}`);
          }
        });
      },
      {
        rootMargin: "-50% 0px -49% 0px", // triggers when middle of section is in view
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sectionIds]);

  return activeHash;
}
