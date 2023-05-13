import { type AppType } from "next/dist/shared/lib/utils";
import { Noto_Serif_TC, Noto_Sans } from "next/font/google";

import "@/styles/globals.css";

const notoSerif = Noto_Serif_TC({
  weight: ["400", "500", "700"],
  variable: "--font-noto-serif",
  preload: false,
});

const notoSans = Noto_Sans({
  weight: ["500"],
  variable: "--font-noto-sans",
  preload: false,
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${notoSerif.variable} ${notoSans.variable} font-serif`}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
