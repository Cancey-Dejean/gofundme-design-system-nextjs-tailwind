import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { SiApplepodcasts } from "react-icons/si";

export const companyName: string = "GoFundMe";
export const MAX_EXCERPT_LENGTH = 93;

export const navPrimary = [
  {
    label: "Search",
    linkUrl: "",
    icon: <MagnifyingGlassIcon className="h-5 w-5 text-black" />,
    reverseIcon: false,
    intent: "navText",
    className: "",
    size: "small",
    shadow: false,
  },
  {
    label: "For individuals",
    linkUrl: "",
    icon: <ChevronDownIcon className="h-6 w-5" />,
    reverseIcon: true,
    intent: "navText",
    className: "",
    size: "small",
    shadow: false,
  },
  {
    label: "For charities",
    linkUrl: "/",
    icon: "",
    reverseIcon: false,
    intent: "navText",
    className: "",
    size: "small",
    shadow: false,
  },
];

export const navSecondary = [
  {
    label: "How it works",
    linkUrl: "/",
    icon: "",
    reverseIcon: false,
    intent: "navText",
    className: "",
    size: "small",
    shadow: false,
  },
  {
    label: "Sign in",
    linkUrl: "/",
    icon: "",
    reverseIcon: false,
    intent: "navText",
    className: "",
    size: "small",
    shadow: false,
  },
  {
    label: "Start a GoFundMe",
    linkUrl: "/",
    icon: "",
    reverseIcon: false,
    intent: "primary",
    className: "px-4",
    size: "small",
    shadow: false,
  },
];

export const featuredCards = [
  {
    id: 1,
    featured: true,
    imgSrc: "/images/nonprofitfundraisingbanner.png",
    tagName: "Giving Season",
    title: "Fundraise for your favorite nonprofit",
    excerpt:
      "This giving season, you can give back to a nonprofit you care about by starting a fundraiser on GoFundMe",
    btnText: "Get started",
    link: "/",
  },
  {
    id: 2,
    featured: false,
    imgSrc: "/images/gofundmerfeaturedimage.png",
    tagName: "Urgent cause",
    title: "Fundraising FAQs: Israel/Gaza",
    excerpt: "",
    btnText: "Donate now",
    link: "/",
  },
  {
    id: 3,
    featured: false,
    imgSrc: "/images/gofundme-maui-fires-homepagebanner.webp",
    tagName: "Urgent cause",
    title: "Maui wildfires: how to help",
    excerpt: "",
    btnText: "Donate now",
    link: "/",
  },
  {
    id: 4,
    featured: false,
    imgSrc: "/images/running-preschool-kids-outside.png",
    tagName: "Help  teachers",
    title: "Fund the future of education",
    excerpt: "",
    btnText: "Donate now",
    link: "/",
  },
];

export const impactCards = [
  {
    imgSrc: "/images/start-yourself@2x.png",
    title: "Yourself",
    imgAlt: "Yourself",
    link: "/",
    ariaLabel: "Click here to link to the 'Yourself' page",
  },
  {
    imgSrc: "/images/start-friends-Family@2x.png",
    title: "Friends & family",
    imgAlt: "Friends & family",
    link: "/",
    ariaLabel: "Click here to link to the 'Friends & family' page",
  },
  {
    imgSrc: "/images/start-charity@2x.png",
    title: "Charity",
    imgAlt: "Charity",
    link: "/",
    ariaLabel: "Click here to link to the 'Charity' page",
  },
];

export const communityCards = [
  {
    imgSrc: "/images/nonprofitfundraisingbanner.png",
    tagName: "",
    title: "Fundraise for your favorite nonprofit",
    excerpt:
      "This giving season, you can give back to a nonprofit you care about by starting a fundraiser on GoFundMe",
    link: "/",
    raisedAmount: 63717,
    numOfDonors: 569,
  },
  {
    imgSrc: "/images/gofundmerfeaturedimage.png",
    tagName: "",
    title: "Fundraising FAQs: Israel/Gaza",
    excerpt:
      "This giving season, you can give back to a nonprofit you care about by starting a fundraiser on GoFundMe",
    link: "/",
    raisedAmount: 7273,
    numOfDonors: 130,
  },
  {
    imgSrc: "/images/gofundme-maui-fires-homepagebanner.webp",
    tagName: "",
    title: "Maui wildfires: how to help",
    excerpt:
      "This giving season, you can give back to a nonprofit you care about by starting a fundraiser on GoFundMe",
    link: "/",
    raisedAmount: 18895,
    numOfDonors: 163,
  },
];

export const footerLinks = [
  {
    title: "Fundraise for",
    links: [
      {
        label: "Medical",
        url: "/",
      },
      {
        label: "Emergency",
        url: "/",
      },
      {
        label: "Memorial",
        url: "/",
      },
      {
        label: "Education",
        url: "/",
      },
      {
        label: "Nonprofit",
        url: "/",
      },
      {
        label: "Support COVID-19 fundraisers",
        url: "/",
      },
      {
        label: "Crisis Relief",
        url: "/",
      },
    ],
  },
  {
    title: "Learn more",
    links: [
      {
        label: "How GoFundMe Works",
        url: "/",
      },
      {
        label: "Why GoFundMe",
        url: "/",
      },
      {
        label: "Common questions",
        url: "/",
      },
      {
        label: "Success stories",
        url: "/",
      },
      {
        label: "Supported countries",
        url: "/",
      },
      {
        label: "Charity fundraising",
        url: "/",
      },
      {
        label: "Pricing",
        url: "/",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Help center",
        url: "/",
      },
      {
        label: "Blog",
        url: "/",
      },
      {
        label: "GoFundMe Stories",
        url: "/",
      },
      {
        label: "Press center",
        url: "/",
      },
      {
        label: "Careers",
        url: "/",
      },
      {
        label: "About",
        url: "/",
      },
      {
        label: "More resources",
        url: "/",
      },
    ],
  },
];

export const socialLinks = [
  {
    label: "Facebook",
    url: "/",
    icon: <FaFacebook className="dark:text-white" />,
  },
  {
    label: "Youtube",
    url: "/",
    icon: <FaYoutube className="dark:text-white" />,
  },
  {
    label: "Twitter",
    url: "/",
    icon: <FaTwitter className="dark:text-white" />,
  },
  {
    label: "Instagram",
    url: "/",
    icon: <FaInstagram className="dark:text-white" />,
  },
  {
    label: "Medium",
    url: "/",
    icon: <FaMedium className="dark:text-white" />,
  },
  {
    label: "Apple Podcasts",
    url: "/",
    icon: <SiApplepodcasts className="dark:text-white" title="Apple Podcasts" />,
  },
];

export const legalLinks = [
  {
    label: "Terms",
    url: "/",
  },
  {
    label: "Privacy Notice",
    url: "/",
  },
  {
    label: "Legal",
    url: "/",
  },
  {
    label: "Accessibility Statement",
    url: "/",
  },
];

export const appStores = [
  {
    label: "Google Play",
    url: "https://play.google.com/",
    imgSrc: "/images/play-store.png",
  },
  {
    label: "App Store",
    url: "https://apps.apple.com/",
    imgSrc: "/images/app-store.png",
  },
];

export const getStartedButtons = [
  {
    label: "Start a GoFundMe",
    className: "min-w-[230px] bg-primary-300",
    intent: "primary",
    size: "large",
    linkUrl: "/",
  },
  {
    label: "How it works",
    className: "min-w-[215px]",
    intent: "tertiary",
    size: "large",
    linkUrl: "/",
  },
];
