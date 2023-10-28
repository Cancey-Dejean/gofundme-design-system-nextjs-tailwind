import React from "react";
import { Button, ButtonProps } from "./Button/Button";

const NavMenuItem = ({ item }: { item: NavItem }) => {
  return (
    <Button
      intent={item.intent}
      size="small"
      linkUrl={item.linkUrl}
      className={item.className}
      reverseIcon={item.reverseIcon}
      icon={item.icon}
    >
      {item.label}
    </Button>
  );
};

export default NavMenuItem;
