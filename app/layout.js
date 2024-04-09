import ScrollToTop from "@/components/common/ScrollToTop";
import "../public/css/style.css";

import { DM_Sans } from "next/font/google";
import ScrollTopBehaviour from "@/components/common/ScrollTopBehavier";
import Wrapper from "@/components/layout/Wrapper";
const dmsans = DM_Sans({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
// const inter = Inter({ subsets: ["latin"] });
if (typeof window !== "undefined") {
  import("bootstrap");
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={dmsans.className}>
        <Wrapper>{children}</Wrapper>
        <ScrollToTop />
        <ScrollTopBehaviour />
      </body>
    </html>
  );
}
