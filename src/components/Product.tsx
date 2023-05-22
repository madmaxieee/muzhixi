import type { StaticImageData } from "next/image";
import Image from "next/image";

type ProductProps = {
  imageData: StaticImageData;
  name: string;
  price: number;
};

export const Product = ({ imageData, name, price }: ProductProps) => {
  return (
    <a className="flex w-full flex-col items-center rounded-3xl bg-white p-[2vw]">
      <Image className="h-[18vw] w-auto" src={imageData} alt={name} />
      <h3 className="text-[1.2vw] font-bold text-olive-600">{name}</h3>
      <p className="font-sans text-[1.2vw] text-neutral-400">NT${price}</p>
    </a>
  );
};

export default Product;
