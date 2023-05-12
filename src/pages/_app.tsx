import { type AppType } from "next/dist/shared/lib/utils";
import { Noto_Serif_TC } from "next/font/google";

import "@/styles/globals.css";

const notoSerif = Noto_Serif_TC({
  weight: ["400", "500", "700"],
  variable: "--font-noto-serif",
  preload: false,
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${notoSerif.variable} font-serif`}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
