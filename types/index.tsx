import { NavItem } from "@/components/atoms/Button/Button";

export type HeaderProps = {
  logo?: React.ReactNode;
  logoLeft?: boolean;
  reverseIcon?: NavItem[];
  navPrimary?: NavItem[];
  navSecondary?: NavItem[];
  headerAnimation?: boolean;
};

export type SectionHeaderProps = {
  topText?: string;
  title?: string;
  titleStyles?: string;
  headerStyles?: string;
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

export type CardDonateProps = {
  imgSrc?: string;
  tagName?: string;
  title?: string;
  excerpt?: string;
  btnText?: string;
  link?: string;
  raisedAmount?: number;
  numOfDonors?: number;
};
