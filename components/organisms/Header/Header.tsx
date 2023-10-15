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
import { SunIcon } from "@heroicons/react/24/outline";
import {
  primaryMenuDefault,
  secondaryMenuDefault,
} from "../../../constants/mockData";

const Header = ({
  navPrimary = primaryMenuDefault as Array<NavItem>,
  navSecondary = secondaryMenuDefault as Array<NavItem>,
  logo,
  logoLeft,
}: HeaderProps) => {
  return (
    <header
      className={twMerge(
        "fixed left-0 top-0 z-50 w-full bg-white px-4 py-6 lg:bg-transparent",
      )}
    >
      <Container className="flex h-14 items-center rounded-[58px] bg-white max-lg:px-0 lg:h-16">
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

      <div className="mt-4 block lg:hidden">
        <Container className="px-0">
          <Button intent="primary" linkUrl="/">
            <SunIcon className="h-6 w-6" />
            Start a GoFundMe
          </Button>
        </Container>
      </div>
    </header>
  );
};

export default Header;
