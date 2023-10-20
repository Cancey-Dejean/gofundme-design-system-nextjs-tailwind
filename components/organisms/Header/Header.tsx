"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Container } from "../../atoms/Container";
import { Button, NavItem } from "../../atoms/Button/Button";
import { HeaderProps } from "@/types";
import { companyName } from "../../../constants";
import NavMenuItem from "../../atoms/NavMenuItem";
import {
  Bars3BottomRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

import {
  primaryMenuDefault,
  secondaryMenuDefault,
} from "../../../constants/mockData";
import { SunIcon } from "../../../components/atoms/Icons/Icons";

const Header = ({
  navPrimary = primaryMenuDefault as Array<NavItem>,
  navSecondary = secondaryMenuDefault as Array<NavItem>,
  logo,
  logoLeft,
  headerAnimation,
}: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={twMerge(
        "left-0 top-0 z-50 w-full bg-white px-4  transition-all duration-[.3s] ease-in-out lg:bg-transparent",
        headerAnimation ? "fixed " : "sticky ",
        scrolled ? " shadow-lg lg:bg-white lg:py-2" : "py-0 lg:py-6",
      )}
    >
      <Container className="relative flex h-14 items-center rounded-[58px] bg-white max-lg:px-0 lg:h-16">
        <nav
          className={twMerge(
            "w-full items-center ",
            navPrimary && navSecondary && !logoLeft
              ? "menu-grid grid"
              : "flex justify-between",
          )}
        >
          <div className="flex justify-start lg:hidden">
            <MagnifyingGlassIcon className="h-6 w-6 text-black" />
          </div>
          {navPrimary ? (
            <ul
              className={twMerge(
                "flex-1 gap-2 [grid-area:primaryMenu] ",
                "hidden justify-start lg:flex",
                logoLeft ? "order-last justify-end" : null,
              )}
            >
              {navPrimary?.map((item, i) => (
                <li key={i}>
                  <NavMenuItem item={item} />
                </li>
              ))}
            </ul>
          ) : null}

          <Link
            href="/"
            className={twMerge(
              "[grid-area:logo] [&_svg]:fill-primary-200",
              logoLeft ? "order-first" : null,
            )}
          >
            {logo ? logo : <span>{companyName}</span>}
          </Link>

          {/* Optional */}
          <div className="flex justify-end gap-2">
            {navSecondary && !logoLeft ? (
              <ul
                className={twMerge(
                  "gap-2 [grid-area:secondaryMenu]",
                  "hidden items-center lg:flex",
                )}
              >
                {navSecondary?.map((item, i) => (
                  <li key={i}>
                    <NavMenuItem item={item} />
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="flex justify-end lg:hidden">
              <Bars3BottomRightIcon className="h-6 w-6 text-black" />
            </div>
          </div>
        </nav>
      </Container>

      {scrolled && (
        <div className="mt-4 block pb-4 lg:hidden">
          <Container className="px-0">
            <Button intent="primary" linkUrl="/">
              <SunIcon
                className="h-[22px] w-[22px]"
                pathFill="var(--color-white)"
              />
              Start a GoFundMe
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;
