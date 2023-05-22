import { useState } from "react";

import clsx from "clsx";

import { animated, useSpring } from "@react-spring/web";

import useInterval from "@/hooks/useInterval";

type CarouselProps = {
  children: React.ReactNode[];
  className?: string;
};

export const Carousel = ({ children, className }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useInterval(() => {
    setCurrentIndex((index) => (index + 1) % children.length);
  }, 5000);

  const { offset } = useSpring({
    from: { offset: 0 },
    to: { offset: currentIndex * 100 },
    duration: 750,
  });

  return (
    <div className={clsx(className, "overflow-hidden")}>
      <div className="grid w-[165vw] grid-flow-col grid-rows-1">
        {children.map((child, index) => {
          return (
            <animated.div
              key={index}
              style={{
                transform: offset.to((offset) => `translateX(-${offset}%)`),
              }}
            >
              {child}
            </animated.div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
