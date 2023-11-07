import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import ThemeSwitcher from "./theme-switcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QD",
  description: "Powered by NextTS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-secondary text-dark dark:bg-d-secondary dark:text-light">
            {children}
            <ThemeSwitcher />
          </div>
        </Providers>
      </body>
    </html>
  );
}
