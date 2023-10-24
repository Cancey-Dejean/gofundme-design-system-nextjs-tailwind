import { ButtonProps, NavItem } from "@/components/atoms/Button/Button";

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

export type HeroProps = {
  headlineOneLine?: string;
  headlineSecondLine?: string;
  imgSrcDesktop?: string;
  imgSrcMobile?: string;
  imgAlt?: string;
  btnText?: string;
};

export type StepsProps = {
  topText?: string;
  headline?: string;
  cardOneTitle?: string;
  cardOneDesc?: string;
  cardTwoTitle?: string;
  cardTwoDesc?: string;
  cardThreeTitle?: string;
  cardThreeDesc?: string;
};

export type ImpactProps = {
  className?: string;
  topText?: SectionHeaderProps["topText"];
  title?: SectionHeaderProps["title"];
  impactCards?: CardImpactProps[];
};

export type FeaturedTopicsProps = {
  featuredCards?: CardCauseProps[];
  topText?: SectionHeaderProps["topText"];
  title?: SectionHeaderProps["title"];
};

export type CardStepProps = {
  number?: number;
  title?: string;
  description?: string;
  stepImgDesktop?: React.ReactNode;
  stepImgMobile?: React.ReactNode;
};

export type CommunityProps = {
  topText?: SectionHeaderProps["topText"];
  title?: SectionHeaderProps["title"];
  communityCards?: CardDonateProps[];
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

export type CardImpactProps = {
  imgSrc?: string;
  imgAlt?: string;
  title?: string;
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

export type GetStartedProps = {
  className?: string;
  imgSrc?: string;
  headline: string;
  buttons?: ButtonProps[];
};

export type FooterProps = {
  legalLinks?: {
    label: string;
    url: string;
  }[];
  footerLinks: {
    title: string;
    links: {
      label: string;
      url: string;
    }[];
  }[];
};

export type FooterColumnProps = {
  title: string;
  links: {
    label: string;
    url: string;
  }[];
};
