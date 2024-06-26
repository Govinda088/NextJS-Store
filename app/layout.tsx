import Container from "@/components/global/Container";
import "./globals.css";
import { type Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Next Store",
  description: "A nifty store built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar></Navbar>
          <Container className="py-20">{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
