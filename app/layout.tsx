import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './global.css'
import UserContextProvider from "@/context/UserContext"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Formulario",
  description: "Previsão meteorologica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserContextProvider>
        <body className={inter.className}>{children}</body>
      </UserContextProvider>
    </html>
  );
}
