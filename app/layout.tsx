import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

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
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* Header Section */}
          <Header />

          {/* Main Body */}
          <div className="flex h-full">
            {/* Sidebar - Section */}
            <div className="w-[15vw] h-full bg-slate-500"></div>

            {/* Remaining Main - Section */}
            <div className="flex-1 h-full">{children}</div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
