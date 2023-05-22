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
    to: { x: isMenuOpen ? 1 : 0 },
    duration: 500,
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
        <div className="absolute right-0 top-[6vw] z-50 mx-auto w-[20vw]">
          <animated.div
            style={{
              opacity: x.to({ range: [0, 1], output: [0, 1] }),
            }}
            className="flex flex-col gap-[0.5vw] rounded-2xl bg-white py-[2vw]"
            role="navigation"
          >
            {sections.map((section) => (
              <a
                key={section}
                className="p-[1.5vw] text-center text-[1.8vw] font-bold text-olive-600 transition-all hover:translate-x-[0.3vw] hover:text-olive-800"
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
