import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import StyledComponentsRegistry from "./registry";

import "react-responsive-modal/styles.css";
import "./globals.css";

import data from "./data.json";

const merriweather = Merriweather({ weight: "400", subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: data.pageTitle,
  description: data.pageDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={merriweather.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
