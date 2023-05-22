import type { StaticImageData } from "next/image";
import Image from "next/image";

type ShopLogoProps = {
  logoData: StaticImageData;
  href: string;
};

export const ShopLogo = ({ logoData, href }: ShopLogoProps) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Image
        className="h-[12vw] w-auto transition-all hover:translate-y-[0.2vw] hover:opacity-90"
        src={logoData}
        height={100}
        alt="logo"
      />
    </a>
  );
};

export default ShopLogo;
