import React from "react";
import { Button, ButtonProps } from "./Button/Button";

export type NavItem = {
  size?: ButtonProps["size"];
  label: ButtonProps["label"];
  linkUrl?: ButtonProps["linkUrl"];
  intent?: ButtonProps["intent"];
  reverseIcon?: ButtonProps["reverseIcon"];
  className?: ButtonProps["className"];
  icon?: React.ReactNode;
};
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
  );
};

export default NavMenuItem;
