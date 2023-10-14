import { NavItem } from "@/components/atoms/Button/Button"

export type HeaderProps = {
  logo?: React.ReactNode
  logoLeft?: boolean
  reverseIcon?: NavItem[]
  navPrimary?: NavItem[]
  navSecondary?: NavItem[]
}

export type SectionHeaderProps = {
  topText?: string
  title?: string
}
