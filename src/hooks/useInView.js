import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.14) {
  const [isInView, setIsInView] = useState(
    () => typeof IntersectionObserver === "undefined"
  );
  const elementRef = useRef(null);

  useEffect(() => {
    if (isInView || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isInView, threshold]);

  return [elementRef, isInView];
}

