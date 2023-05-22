import { useState, type ReactNode } from "react";

import { animated, useSpring } from "@react-spring/web";

import useInView from "@/hooks/useInView";

type AppearProps = {
  children: ReactNode;
};

export const Appear = ({ children }: AppearProps) => {
  const [isInView, setInView] = useState(false);

  const inViewRef = useInView(() => setInView(true));

  const { y, opacity } = useSpring({
    from: {
      opacity: "0%",
      y: "0",
    },
    to: {
      opacity: isInView ? "100%" : "0%",
      y: isInView ? "0" : "20vw",
    },
    duration: 500,
  });

  return (
    <animated.div
      ref={inViewRef}
      style={{
        opacity,
        transform: y.to((y) => `translateY(${y})`),
      }}
    >
      {children}
    </animated.div>
  );
};

export default Appear;
