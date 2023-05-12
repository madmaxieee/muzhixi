import { type NextPage } from "next";
import Head from "next/head";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import headerLogo from "@assets/去背物件/01-木直系logo.webp";
import threeDotsIcon from "@assets/去背物件/02-三點.webp";
import hollowCircleIcon from "@assets/去背物件/03-空心圓.webp";
import hollowWaterDropIcon from "@assets/去背物件/04-空心水.webp";
import hollowFlowerIcon from "@assets/去背物件/05-空心花.webp";
import filledCircleIcon from "@assets/去背物件/06-實心圓.webp";
import filledWaterDropIcon from "@assets/去背物件/07-實心水.webp";
import filledFlowerIcon from "@assets/去背物件/08-實心花.webp";
import hamburgerIcon from "@assets/去背物件/menu.webp";
import heroImage from "@assets/圖片/01-首圖.webp";
import naturalImage from "@assets/圖片/02-自然.webp";
import mildImage from "@assets/圖片/03-溫和.webp";
import relaxImage from "@assets/圖片/04-放鬆.webp";

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
    <div className="grid h-[25vw] place-content-center">
      <article className="relative mx-auto flex items-start gap-[6vw]">
        <Image
          className="h-[15vw] w-auto"
          src={imageData}
          alt={title}
          height={400}
        />
        <div className="w-[35vw]">
          <h3 className="mb-[2vw] mt-[2vw] text-[2.5vw] font-bold text-olive-400">
            {title}
          </h3>
          <p className="relative text-[1.2vw] font-medium text-olive-800">
            {description}
            <Image
              className="absolute bottom-[-6vw] right-[-6vw] -z-10 h-[6vw] w-auto"
              src={filedIcon}
              alt={title}
              height={100}
            />
          </p>
        </div>
        <Image
          className="absolute left-[-9vw] top-[-3vw] -z-10 h-[8vw] w-auto"
          src={hollowIcon}
          alt={title}
          height={100}
        />
      </article>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>木直系</title>
        <meta name="description" content="木直系" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <header className="flex items-end justify-between bg-olive-100 px-[3vw] py-[2vw]">
        <Image
          className="h-[7vw] w-auto"
          src={headerLogo}
          alt="木直系"
          height={100}
          priority
        />
        <Image
          className="h-[1.5vw] w-auto"
          src={hamburgerIcon}
          alt="選單"
          height={50}
          priority
        />
      </header>
      <main>
        <section className="flex bg-offwhite">
          <article className="mx-auto my-auto flex w-[30vw] flex-col">
            <div className="mb-[2vw]">
              <Image
                className="h-[2vw] w-auto"
                src={threeDotsIcon}
                alt="三點"
                height={100}
                priority
              />
            </div>
            <div className="mb-[3vw]">
              <h1 className="text-[2.5vw] font-bold leading-normal text-olive-400">
                天然草本的自然力
                <br />
                呵護自信的好朋友
              </h1>
            </div>
            <p className="text-[1.2vw] font-medium text-olive-400">
              木直系秉承著「自然、溫和、放鬆」的理念，注重保持產品的純淨度和安全性，並不斷研發創新，推出符合不同膚質需求的產品。
            </p>
          </article>
          <Image
            className="h-auto w-[55vw]"
            src={heroImage}
            alt="木直系"
            width={1920}
            priority
          />
        </section>
        <section className="flex flex-col py-[6vw]">
          <ProductFeature
            title="自然"
            description={
              "產品採用高純度自然配方，精選自然優質草本原材料。" +
              "以自然的草本材料搭配，精簡護膚，雨潤無聲，喚醒肌膚生命力，讓肌膚自然變美。" +
              "以自然優質的草本精油作原材料，成分溫和，修復肌膚屏障，深層護膚，綻放水嫩透，讓肌膚回復年輕狀態。"
            }
            imageData={naturalImage}
            hollowIcon={hollowCircleIcon}
            filedIcon={filledCircleIcon}
          />
          <ProductFeature
            title="溫和"
            description={
              "採用低溫萃取技術，以保持原材料中的營養成分和活性成分，讓營養大程度地滲入肌底，讓肌膚狀態保持穩定，溫和修復肌膚屏障。"
            }
            imageData={mildImage}
            hollowIcon={hollowWaterDropIcon}
            filedIcon={filledWaterDropIcon}
          />
          <ProductFeature
            title="放鬆"
            description={
              "護膚時間變得鬆弛享受，也讓疲勞的肌膚喘口氣。" +
              "木直系產品加入草本精油成分，自然的芬香可以讓人放鬆心情，享受護膚時間，草本精油的成份自然純淨溫和，有利於排除皮膚上的代謝廢物，提升肌膚滲透力，鎖緊皮膚中的水份，鎮定肌膚，增強活力。"
            }
            imageData={relaxImage}
            hollowIcon={hollowFlowerIcon}
            filedIcon={filledFlowerIcon}
          />
        </section>
      </main>
    </>
  );
};

export default Home;
