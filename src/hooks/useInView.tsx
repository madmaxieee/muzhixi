import { useRef, type LegacyRef } from "react";

export default function useInView(onInView: () => void, threshold = 0) {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const inViewRef = useRef(false);

  const ref: LegacyRef<HTMLDivElement> = (element) => {
    if (element) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) {
            inViewRef.current = false;
            return;
          }

          inViewRef.current = true;

          if (!timeoutRef.current && threshold > 0) {
            timeoutRef.current = setTimeout(() => {
              if (inViewRef.current) {
                onInView();
              } else {
                clearTimeout(timeoutRef.current);
              }
            }, threshold);
          } else {
            onInView();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(element);
    }
  };

  return ref;
}
