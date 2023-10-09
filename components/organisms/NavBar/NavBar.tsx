import { GoFundMe } from "../../atoms/Logos/Logos"
import { Container } from "../../atoms/Container"
import Link from "next/link"
import { Button } from "../..//atoms/Button/Button"
// import { navPrimary, navSecondary } from "../../../constants"

type NavItem = {
  label: string
  linkable: boolean
  icon?: React.ReactNode
}

type NavBarProps = {
  className?: string
  logo?: React.ReactNode
  navPrimary?: NavItem[]
  navSecondary?: NavItem[]
}

const NavBar = ({ className, navPrimary, navSecondary, logo }: NavBarProps) => {
  return (
    <header>
      <Container className="h-16 flex items-center bg-white">
        <nav className={`w-full grid justify-between menu-grid ${className}`}>
          {navPrimary && (
            <ul className="flex flex-1 [grid-area:primaryMenu] justify-start">
              {navPrimary?.map((item, i) => (
                <li key={i}>
                  <Button
                    intent="navText"
                    size="small"
                    linkable={item.linkable}
                    className="px-2"
                  >
                    <span className="max-w-[24px]">
                      {item.icon ? item.icon : null}
                    </span>
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
          )}

          <Link href="/" className="[grid-area:logo]">
            {logo ? logo : <span>Company Name</span>}
          </Link>

          {navSecondary && (
            <ul className="flex [grid-area:secondaryMenu] justify-end">
              {navSecondary?.map((item, i) => (
                <li key={i}>
                  <Button
                    intent="navText"
                    size="small"
                    linkable={item.linkable}
                    className="px-2"
                  >
                    <span className="max-w-[24px]">
                      {item.icon ? item.icon : null}
                    </span>
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </Container>
    </header>
  )
}

export default NavBar
