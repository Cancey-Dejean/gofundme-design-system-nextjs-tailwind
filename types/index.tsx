import { NavItem } from "@/components/atoms/Button/Button"

export type HeaderProps = {
  className?: string
  logo?: React.ReactNode
  logoLeft?: boolean
  reverseIcon?: NavItem[]
  navPrimary?: NavItem[]
  navSecondary?: NavItem[]
}
