export type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  intent?: "primary" | "secondary" | "tertiary" | "border" | "text" | "navText"
  className?: string
  linkUrl?: string
  reverseIcon?: boolean
  shadow?: boolean
  /**
   * How large should the button be?
   */
  size?: "base" | "small" | "large"
  /**
   * Button contents
   */
  children?: React.ReactNode
  /**
   * Optional click handler
   */
  onClick?: () => void
}

export type NavItem = {
  label: string
  linkUrl?: string
  icon?: React.ReactNode
}

export type HeaderProps = {
  className?: string
  logo?: React.ReactNode
  logoLeft?: boolean
  navPrimary?: NavItem[]
  navSecondary?: NavItem[]
}
