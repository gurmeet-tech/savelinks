import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ToastProvider } from "@/components/ui/toast";
import { FloatingBottomBar } from "@/components/nav/floating-bottom-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PrepVault - Video Link Saver",
  description: "Save important videos for Class 12th prep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ToastProvider>
          {children}
          <FloatingBottomBar />
        </ToastProvider>
      </body>
    </html>
  );
}
