import type { StaticImageData } from "next/image";
import Image from "next/image";

type ProductFeatureProps = {
  title: string;
  description: string;
  hollowIcon: StaticImageData;
  filedIcon: StaticImageData;
  imageData: StaticImageData;
};

const ProductFeature = ({
  title,
  description,
  imageData,
  hollowIcon,
  filedIcon,
}: ProductFeatureProps) => {
  return (
    <div className="z-10 grid h-[25vw] place-content-center">
      <article className="relative mx-auto flex items-start gap-[6vw]">
        <Image
          className="h-[15vw] w-auto"
          src={imageData}
          alt={title}
          height={400}
        />
        <div className="w-[35vw]">
          <h3 className="mb-[2vw] mt-[2vw] text-[2.5vw] font-bold text-olive-600">
            {title}
          </h3>
          <p className="relative text-[1.2vw] font-medium text-olive-800">
            {description}
            <Image
              className="absolute bottom-[-6vw] right-[-6vw] z-0 h-[6vw] w-auto"
              src={filedIcon}
              alt={title}
              height={100}
            />
          </p>
        </div>
        <Image
          className="absolute left-[-10vw] top-[-3vw] z-0 h-[8vw] w-auto"
          src={hollowIcon}
          alt={title}
          height={100}
        />
      </article>
    </div>
  );
};

export default ProductFeature;
