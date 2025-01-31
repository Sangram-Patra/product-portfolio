import type { Metadata } from "next";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "@/public/css/style.css";
import "@/public/css/responsive.css";
import "@/public/css/blog.css";
import "@/public/css/spacing.css";
import Footer from "@/components/Shared/Footer";
import Preloader from "@/components/Shared/Preloader";
import MagicCursor from "@/components/Shared/MagicCursor";
import ScrollTopUp from "@/components/Shared/ScrollTopUp";
import "@/../react-modal-video/scss/modal-video.scss";

export const metadata: Metadata = {
  title: "Modern Portfolio Template",
  description: "Modern Portfolio Template made with react nextjs bootstrap 5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <Preloader />
          <MagicCursor />
          <ScrollTopUp />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
