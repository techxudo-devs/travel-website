import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import NextNProgress from "nextjs-toploader";
import InitialLoader from "./components/loader/InitialLoader";
import ClientLayout from "./components/ClientLayout";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Travel Girls",
  description: "Travel Around The World!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
        <Footer />
        <NextNProgress />
        <InitialLoader />
      </body>
    </html>
  );
}
