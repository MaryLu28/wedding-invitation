import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./registry";

const merriweather = Merriweather({ weight: "400", subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Boda MaryLu y Manuel 👰🏻🤵🏽",
  description: "Los invitamos a nuestra boda!",
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
