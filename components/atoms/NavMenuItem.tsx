import React from "react"
import { Button, NavItem } from "./Button/Button"

const NavMenuItem = ({ item }: { item: NavItem }) => {
  return (
    <Button
      intent={item.intent}
      size="small"
      linkUrl={item.linkUrl}
      className={item.className}
      reverseIcon={item.reverseIcon}
    >
      {item.icon ? <span>{item.icon}</span> : null}
      {item.label}
    </Button>
  )
}

export default NavMenuItem
