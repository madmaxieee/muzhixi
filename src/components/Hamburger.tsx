import { useState } from "react";

import Image from "next/image";

import hamburgerIcon from "@assets/去背物件/menu.webp";
import { animated, useSpring } from "@react-spring/web";

const sections = ["品牌理念", "迷迭香系列", "購買通路", "關於我們"];

export const Hamburger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setIsMenuOpen((open) => !open);
    if (!isMenuOpen) setShowMenu(true);
  };

  const { x } = useSpring({
    from: { x: 0 },
    x: isMenuOpen ? 1 : 0,
    duration: 300,
    onRest: () => {
      if (!isMenuOpen) {
        setShowMenu(false);
      }
    },
  });

  return (
    <div className="relative">
      <button className="p-[0.5vw]" onClick={handleShowMenu}>
        <Image
          className="h-[1.5vw] w-auto"
          src={hamburgerIcon}
          alt="選單"
          height={50}
          priority
        />
      </button>
      {showMenu && (
        <div className="absolute right-0 top-[6vw] z-50 mx-auto w-[30vw]">
          <animated.div
            style={{
              opacity: x.to({ range: [0, 1], output: [0, 1] }),
            }}
            className="flex flex-col gap-[3vw] rounded-2xl bg-white bg-opacity-50 py-[3vw] backdrop-blur-sm"
            role="navigation"
          >
            {sections.map((section) => (
              <a
                key={section}
                className="text-center text-[2vw] font-bold text-olive-600"
                href={`#${section}`}
                onClick={() => setShowMenu(false)}
              >
                {section}
              </a>
            ))}
          </animated.div>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
