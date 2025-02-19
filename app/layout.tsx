import type { Metadata } from "next";
// import { Urbanist} from "next/font/google";
import "./globals.css";
import Header from "@/components/navbar/header";

// const urbanist = Urbanist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${urbanist.variable}antialiased`}
      >
        <Header />
        <div className="pt-20">
        {children}
        </div>
      </body>
    </html>
  );
}
