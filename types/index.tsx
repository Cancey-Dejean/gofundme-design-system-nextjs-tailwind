import { NavItem } from "@/components/atoms/Button/Button";

export type HeaderProps = {
  logo?: React.ReactNode;
  logoLeft?: boolean;
  reverseIcon?: NavItem[];
  navPrimary?: NavItem[];
  navSecondary?: NavItem[];
};

export type SectionHeaderProps = {
  topText?: string;
  title?: string;
};

export type CardStepProps = {
  number?: number;
  title?: string;
  description?: string;
  stepImgDesktop?: React.ReactNode;
  stepImgMobile?: React.ReactNode;
};

export type CardCauseProps = {
  featured?: boolean;
  imgSrc?: string;
  tagName?: string;
  title?: string;
  excerpt?: string;
  btnText?: string;
  link?: string;
};
