import { useState, type ReactNode } from "react";

import { animated, useSpring } from "@react-spring/web";

import useInView from "@/hooks/useInView";

type AppearProps = {
  children: ReactNode;
};

export const Appear = ({ children }: AppearProps) => {
  const [isInView, setInView] = useState(false);

  const inViewRef = useInView(() => setInView(true));

  const { x, opacity } = useSpring({
    from: {
      opacity: "0%",
      x: "0",
    },
    to: {
      opacity: isInView ? "100%" : "0%",
      x: isInView ? "0" : "20vw",
    },
    duration: 500,
  });

  return (
    <animated.div
      ref={inViewRef}
      style={{
        opacity,
        transform: x.to((x) => `translateX(${x})`),
      }}
    >
      {children}
    </animated.div>
  );
};

export default Appear;
