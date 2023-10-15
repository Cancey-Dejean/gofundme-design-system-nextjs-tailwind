import NavBar from "@/components/organisms/Header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { navPrimary, navSecondary } from "@/constants";
import { GoFundMe } from "@/components/atoms/Logos/Logos";
import Providers from "@/constants/provider";
import ThemeButton from "@/components/utilities/ThemeButton";
import { NavItem } from "@/components/atoms/Button/Button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="light"
      style={{
        colorScheme: "light",
      }}
    >
      <body>
        <Providers>
          <NavBar
            navPrimary={navPrimary as Array<NavItem>}
            navSecondary={navSecondary as Array<NavItem>}
            logo={<GoFundMe />}
          />
          {children}

          <ThemeButton />
        </Providers>
      </body>
    </html>
  );
}
