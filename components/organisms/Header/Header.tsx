import Link from "next/link"
import { twMerge } from "tailwind-merge"

import { Container } from "../../atoms/Container"
import { Button, NavItem } from "../../atoms/Button/Button"
import { HeaderProps } from "@/types"
import { companyName } from "../../../constants"
import NavMenuItem from "../../atoms/NavMenuItem"
import {
  Bars3BottomRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid"
import { SunIcon } from "@heroicons/react/24/outline"
import {
  primaryMenuDefault,
  secondaryMenuDefault,
} from "../../../constants/mockData"

const Header = ({
  navPrimary = primaryMenuDefault as Array<NavItem>,
  navSecondary = secondaryMenuDefault as Array<NavItem>,
  logo,
  logoLeft,
}: HeaderProps) => {
  return (
    <header
      className={twMerge(
        "fixed top-0 left-0 w-full py-6 bg-white lg:bg-transparent"
      )}
    >
      <Container className="h-14 lg:h-16 flex items-center bg-white rounded-[58px]">
        <nav
          className={twMerge(
            "w-full items-center ",
            navPrimary && navSecondary && !logoLeft
              ? "grid menu-grid"
              : "flex justify-between"
          )}
        >
          <div className="flex justify-start lg:hidden">
            <MagnifyingGlassIcon className="w-6 h-6 text-black" />
          </div>
          {navPrimary ? (
            <ul
              className={twMerge(
                "gap-2 flex-1 [grid-area:primaryMenu] ",
                "hidden lg:flex justify-start",
                logoLeft ? "order-last justify-end" : null
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
              logoLeft ? "order-first" : null
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
                  "hidden items-center lg:flex"
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
              <Bars3BottomRightIcon className="w-6 h-6 text-black" />
            </div>
          </div>
        </nav>
      </Container>

      <div className="block mt-4 lg:hidden">
        <Container className="px-0">
          <Button intent="primary" linkUrl="/">
            <SunIcon className="w-6 h-6" />
            Start a GoFundMe
          </Button>
        </Container>
      </div>
    </header>
  )
}

export default Header
