import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import headerLogo from "@assets/去背物件/01-木直系logo.webp";
import threeDotsIcon from "@assets/去背物件/02-三點.webp";
import hollowCircleIcon from "@assets/去背物件/03-空心圓.webp";
import hollowWaterDropIcon from "@assets/去背物件/04-空心水.webp";
import hollowHexagonIcon from "@assets/去背物件/05-空心六角.webp";
import filledCircleIcon from "@assets/去背物件/06-實心圓.webp";
import filledWaterDropIcon from "@assets/去背物件/07-實心水.webp";
import filledHexagonIcon from "@assets/去背物件/08-實心六角.webp";
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
              我們專注挑選高品質、親膚溫和、低敏低刺激性的草本植粹原料，藉由植物本身具有的特質做為養護肌膚的養分，由外向內為每位女孩培養自信的光芒。
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
              title="呵護"
              description={
                "木直系，專注於呵護每位女孩的肌膚與內心。我們選用高品質的草本植粹原料，融合天然的養分，為你帶來溫柔純淨的呵護體驗。" +
                "我們相信，只有來自大自然的純淨力量，才能真正滋養肌膚，讓你重拾自信光芒。"
              }
              imageData={naturalImage}
              hollowIcon={hollowCircleIcon}
              filedIcon={filledCircleIcon}
            />
          </Appear>
          <Appear>
            <ProductFeature
              title="放鬆"
              description={
                "木直系致力於讓每位女孩找回生活中的放鬆與平衡。" +
                "我們懷著對草本植粹的熱愛，運用其獨特香氣、功效和特性，創造出一系列能療癒身心靈的產品。" +
                "無論是在忙碌的日常生活中，還是在壓力下需要紓解時，木直系將伴隨著你，帶來身心靈的放鬆。"
              }
              imageData={mildImage}
              hollowIcon={hollowHexagonIcon}
              filedIcon={filledHexagonIcon}
            />
          </Appear>
          <Appear>
            <ProductFeature
              title="調理"
              description={
                "木直系的草本產品不僅能滋潤肌膚，更能調理你的內在。" +
                "我們專注於選擇親膚溫和、低敏低刺激性的草本植粹原料，讓植物的養分由外而內滲透，為你培養自信的光芒。" +
                "木直系將陪伴著你，為你提供最溫和有效的調理，讓你成長綻放。"
              }
              imageData={relaxImage}
              hollowIcon={hollowWaterDropIcon}
              filedIcon={filledWaterDropIcon}
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
              <Product imageData={patchImage} name={"迷迭香貼布"} price={200} />
              <Product
                imageData={ballImage}
                name={"迷迭香滾珠瓶"}
                price={200}
              />
              <Product
                imageData={ballImage}
                name={"迷迭香滾珠瓶"}
                price={200}
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
                    "木直系將草本植粹中「呵護」的自然力量激發出來，結合中藥材養生配方，從香氣、從功效、從草本特性，多面向的照顧、療癒每位女孩的身心靈，找回生活的放鬆與平衡。" +
                    "我們希望木直系的草本產品，能作為每位女孩身心靈中，滋潤呵護自信成長的露水。"}
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
