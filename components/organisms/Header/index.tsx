"use client";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Container } from "../../atoms/Container";
import { Button } from "../../atoms/Button/Button";

import {
  Bars3BottomRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

import {
  primaryMenuDefault,
  secondaryMenuDefault,
} from "../../../constants/mockData";
import { SunIcon } from "../../atoms/Icons/Icons";
import { GoFundMe, Logo } from "../../atoms/Logos/Logos";

export type HeaderProps = {
  /**
   * Description goes here
   */
  logo?: React.ReactNode;
  /**
   * Description goes here
   */
  logoLeft?: boolean;
  /**
   * Description goes here
   */
  navPrimary?: (typeof primaryMenuDefault)[number][];
  /**
   * Description goes here
   */
  navSecondary?: (typeof secondaryMenuDefault)[number][];
  /**
   * Description goes here
   */
  headerAnimation?: boolean;
};

const Header = ({
  navPrimary = primaryMenuDefault,
  navSecondary = secondaryMenuDefault,
  logo = <GoFundMe />,
  logoLeft = false,
  headerAnimation = true,
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
              {navPrimary?.map((item) => (
                <li key={item.label}>
                  <Button
                    intent="navText"
                    size="small"
                    linkUrl={item.linkUrl}
                    className={item.className}
                    reverseIcon={item.reverseIcon}
                    icon={item.icon}
                    label={item.label}
                  />
                </li>
              ))}
            </ul>
          ) : null}

          <div
            className={twMerge(
              "[grid-area:logo] [&_svg]:fill-primary-200",
              logoLeft ? "order-first" : null,
            )}
          >
            <Logo logo={logo} />
          </div>

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
                    <Button
                      intent={item.intent as any}
                      size="small"
                      linkUrl={item.linkUrl}
                      className={item.className}
                      reverseIcon={item.reverseIcon}
                      icon={item.icon}
                      label={item.label}
                    />
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

      {scrolled ? (
        <div className="mt-4 block pb-4 lg:hidden">
          <Container className="px-0">
            <Button
              intent="primary"
              linkUrl="/"
              label="Start a GoFundMe"
              icon={
                <SunIcon
                  className="h-[22px] w-[22px]"
                  pathFill="var(--color-white)"
                />
              }
            />
          </Container>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
