import { GoFundMe } from "../../atoms/Logos/Logos"
import { Container } from "../../atoms/Container"
import Link from "next/link"
import { Button } from "../../atoms/Button/Button"
import { twMerge } from "tailwind-merge"
import { HeaderProps } from "@/types"

const Header = ({
  className,
  navPrimary,
  navSecondary,
  logo,
  logoLeft,
}: HeaderProps) => {
  return (
    <header>
      <Container className="h-16 flex items-center bg-white px-0">
        <nav
          className={twMerge(
            "w-full items-center ",
            navPrimary && navSecondary && !logoLeft
              ? "grid menu-grid"
              : "flex justify-between",
            className
          )}
        >
          {navPrimary ? (
            <ul
              className={twMerge(
                "flex flex-1 [grid-area:primaryMenu] justify-start",
                logoLeft ? "order-last justify-end" : null
              )}
            >
              {navPrimary?.map((item, i) => (
                <li key={i}>
                  <Button intent="navText" size="small" className="px-2">
                    {item.icon ? <span>{item.icon}</span> : null}

                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
          ) : null}

          <Link
            href="/"
            className={twMerge(
              "[grid-area:logo]",
              logoLeft ? "order-first" : null
            )}
          >
            {logo ? logo : <span>Company Name</span>}
          </Link>

          {/* Optional */}
          {navSecondary && !logoLeft ? (
            <ul
              className={twMerge("flex [grid-area:secondaryMenu] justify-end")}
            >
              {navSecondary?.map((item, i) => (
                <li key={i}>
                  <Button intent="navText" size="small" className="px-2">
                    <span className="max-w-[24px]">
                      {item.icon ? item.icon : null}
                    </span>
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
          ) : null}
        </nav>
      </Container>
    </header>
  )
}

export default Header
