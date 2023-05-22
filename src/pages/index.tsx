import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import headerLogo from "@assets/去背物件/01-木直系logo.webp";
import threeDotsIcon from "@assets/去背物件/02-三點.webp";
import hollowCircleIcon from "@assets/去背物件/03-空心圓.webp";
import hollowWaterDropIcon from "@assets/去背物件/04-空心水.webp";
import hollowFlowerIcon from "@assets/去背物件/05-空心花.webp";
import filledCircleIcon from "@assets/去背物件/06-實心圓.webp";
import filledWaterDropIcon from "@assets/去背物件/07-實心水.webp";
import filledFlowerIcon from "@assets/去背物件/08-實心花.webp";
import doubleLogo from "@assets/去背物件/09-雙logo.webp";
import background1 from "@assets/去背物件/10-背景1.webp";
import background2 from "@assets/去背物件/11-背景2.webp";
import heroImage from "@assets/圖片/01-首圖.webp";
import naturalImage from "@assets/圖片/02-自然.webp";
import mildImage from "@assets/圖片/03-溫和.webp";
import relaxImage from "@assets/圖片/04-放鬆.webp";
import patchImage from "@assets/圖片/05-貼布.webp";
import ballImage from "@assets/圖片/06-滾珠瓶.webp";
import creamImage from "@assets/圖片/07-按摩霜.webp";
import shopeeLogo from "@assets/圖片/08-蝦皮logo.webp";
import watsonsLogo from "@assets/圖片/09-屈臣氏logo.webp";
import pinkoiLogo from "@assets/圖片/10-Pinkoi logo.webp";
import poyaLogo from "@assets/圖片/11-寶雅 logo.webp";
import heroImage2 from "@assets/圖片/12-首圖-2.webp";
import heroImage3 from "@assets/圖片/13-首圖-3.webp";

import Appear from "@/components/Appear";
import Carousel from "@/components/Carousel";
import Hamburger from "@/components/Hamburger";
import Product from "@/components/Product";
import ProductFeature from "@/components/ProductFeature";
import ShopLogo from "@/components/ShopLogo";

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
      <header className="flex items-end justify-between bg-olive-400 px-[3vw] py-[2vw]">
        <Image
          className="h-[7vw] w-auto"
          src={headerLogo}
          alt="木直系"
          height={100}
          priority
        />
        <Hamburger />
      </header>
      <main>
        <section className="flex bg-olive-100">
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
              <h1 className="text-[2.5vw] font-bold leading-normal text-olive-600">
                天然草本的自然力
                <br />
                呵護自信的好朋友
              </h1>
            </div>
            <p className="text-[1.2vw] font-medium text-olive-600">
              木直系秉承著「自然、溫和、放鬆」的理念，注重保持產品的純淨度和安全性，並不斷研發創新，推出符合不同膚質需求的產品。
            </p>
          </article>
          <Carousel className="w-[55vw]">
            <Image
              className="h-[36vw] w-[55vw] object-cover"
              src={heroImage}
              alt="木直系"
              width={1920}
              priority
            />
            <Image
              className="h-[36vw] w-[55vw] object-cover"
              src={heroImage2}
              alt="木直系"
              width={1920}
              priority
            />
            <Image
              className="h-[36vw] w-[55vw] object-cover"
              src={heroImage3}
              alt="木直系"
              width={1920}
              priority
            />
          </Carousel>
        </section>
        <section
          className="flex flex-col bg-cover py-[6vw]"
          style={{
            backgroundImage: `url(${background1.src})`,
          }}
        >
          <h2 className="sr-only" id="品牌理念">
            品牌理念
          </h2>
          <Appear>
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
          </Appear>
          <Appear>
            <ProductFeature
              title="溫和"
              description={
                "採用低溫萃取技術，以保持原材料中的營養成分和活性成分，讓營養大程度地滲入肌底，讓肌膚狀態保持穩定，溫和修復肌膚屏障。"
              }
              imageData={mildImage}
              hollowIcon={hollowWaterDropIcon}
              filedIcon={filledWaterDropIcon}
            />
          </Appear>
          <Appear>
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
          </Appear>
        </section>
        <section>
          <Appear className="flex flex-col items-center bg-olive-100 bg-cover">
            <h2
              id="迷迭香系列"
              className="mt-[4vw] text-[1.8vw] font-bold text-olive-600"
            >
              迷迭香系列
            </h2>
            <div className="grid w-[70vw] grid-cols-2 gap-[5vw] pb-[6vw] pt-[4vw]">
              <Product imageData={patchImage} name={"迷迭香貼布"} price={350} />
              <Product
                imageData={ballImage}
                name={"迷迭香滾珠瓶"}
                price={350}
              />
              <Product
                imageData={ballImage}
                name={"迷迭香滾珠瓶"}
                price={350}
              />
              <Product
                imageData={creamImage}
                name={"迷迭香按摩霜"}
                price={350}
              />
            </div>
          </Appear>
        </section>
        <section
          className="flex flex-col items-center bg-cover pb-[6vw] pt-[4vw]"
          style={{
            backgroundImage: `url(${background2.src})`,
          }}
        >
          <Appear>
            <h2
              id="購買通路"
              className="text-center text-[1.8vw] font-bold text-olive-600"
            >
              購買通路
            </h2>
            <div className="grid grid-cols-4 gap-[5vw] p-[3vw]">
              <ShopLogo
                href="https://shopee.tw/wentaiye#product_list"
                logoData={shopeeLogo}
              />
              <ShopLogo href="/" logoData={watsonsLogo} />
              <ShopLogo
                href="https://www.pinkoi.com/store/wentaiye?utm_term=store&utm_medium=ios_share&utm_source=Copy&utm_content=fb_3141912129365699&utm_campaign=koc"
                logoData={pinkoiLogo}
              />
              <ShopLogo
                href="https://www.poyabuy.com.tw/tagCategory/%E6%BA%AB%E5%A4%AA%E9%86%AB?pages=1&sortMode=Newest"
                logoData={poyaLogo}
              />
            </div>
          </Appear>
          <Appear>
            <article className="mx-auto my-[2vw] flex w-[70vw] items-center gap-[3vw] rounded-3xl bg-olive-100 p-[5vw]">
              <a
                href="https://www.wentaiye.com/about/"
                target="_blank"
                rel="noreferrer"
                className="grid h-[15vw] w-[50vw] place-items-center rounded-2xl bg-opacity-5 transition-all hover:bg-white"
              >
                <Image
                  src={doubleLogo}
                  className="h-[15vw] w-auto p-[1vw]"
                  alt="logo"
                  height={800}
                />
              </a>
              <div className="flex h-[15vw] flex-col justify-between py-[1vw]">
                <div className="flex justify-between">
                  <h2
                    id="關於我們"
                    className="text-[1.8vw] font-bold text-olive-600"
                  >
                    關於我們
                  </h2>
                  <Image
                    className="h-[1.8vw] w-auto"
                    src={threeDotsIcon}
                    height={50}
                    alt="decoration"
                  />
                </div>
                <p className="text-[1.2vw] font-medium text-olive-800">
                  {"木直系為溫太醫的副品牌。" +
                    "木直系秉承著「自然、溫和、放鬆」的理念，注重保持產品的純淨度和安全性，並不斷研發創新，推出符合不同膚質需求的產品。" +
                    "草本成分主要來自台灣的天然植物，如迷迭香、薰衣草、玫瑰等，並且採用低溫萃取技術，以保持植物中的營養成分和活性成分，為肌膚帶來最大程度的滋潤和修護。"}
                </p>
              </div>
            </article>
          </Appear>
        </section>
        <footer className="flex w-full flex-col items-center gap-[1vw] bg-olive-400 p-[3vw]">
          <div className="flex gap-[1vw] text-[1vw] font-medium text-olive-800">
            <p>
              <span className="font-bold">電話</span> | (02)2225-7688
            </p>
            <p>
              <span className="font-bold">時間</span> | 週一至週五 10:00 ~ 17:00
            </p>
          </div>
          <p className="text-[1.2vw] font-medium">2023 © 木直系</p>
        </footer>
      </main>
    </>
  );
};

export default Home;
