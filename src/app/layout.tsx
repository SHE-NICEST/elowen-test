import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "~/app/_components/navbar";
import Footer from "~/app/_components/footer";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "SHE NICEST - Hackathon Platform",
  description:
    "A premier hackathon organization platform dedicated to innovation, community, and empowering creators.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="bg-dark-900 flex min-h-screen flex-col text-white">
        <TRPCReactProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
