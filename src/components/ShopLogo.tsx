import type { StaticImageData } from "next/image";
import Image from "next/image";

type ShopLogoProps = {
  logoData: StaticImageData;
};

export const ShopLogo = ({ logoData }: ShopLogoProps) => {
  return (
    <div>
      <Image
        className="h-[12vw] w-auto"
        src={logoData}
        height={100}
        alt="logo"
      />
    </div>
  );
};

export default ShopLogo;
