import {
  ApplePodcast,
  FacebookIcon,
  InstagramIcon,
  MediumIcon,
  TwitterIcon,
  YouTubeIcon,
} from "../components/atoms/Icons/Icons";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

export const companyName: string = "Logo";
export const MAX_EXCERPT_LENGTH = 93;

export const navPrimary = [
  {
    label: "Search",
    linkUrl: "",
    icon: <MagnifyingGlassIcon className="h-5 w-5 text-black" />,
    reverseIcon: false,
    intent: "navText",
  },
  {
    label: "For individuals",
    linkUrl: "",
    icon: <ChevronDownIcon className="h-6 w-5" />,
    reverseIcon: true,
    intent: "navText",
  },
  {
    label: "For charities",
    linkUrl: "/",
    icon: false,
    reverseIcon: false,
    intent: "navText",
  },
];

export const navSecondary = [
  {
    label: "How it works",
    linkUrl: "/",
    icon: false,
    reverseIcon: false,
    intent: "navText",
  },
  {
    label: "Sign in",
    linkUrl: "/",
    icon: false,
    reverseIcon: false,
    intent: "navText",
  },
  {
    label: "Start a GoFundMe",
    linkUrl: "/",
    icon: false,
    reverseIcon: false,
    intent: "border-primary",
    className: "px-4",
  },
];

export const featuredCards = [
  {
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
    featured: false,
    imgSrc: "/images/gofundmerfeaturedimage.png",
    tagName: "Urgent cause",
    title: "Fundraising FAQs: Israel/Gaza",
    excerpt: "",
    btnText: "Donate now",
    link: "/",
  },
  {
    featured: false,
    imgSrc: "/images/gofundme-maui-fires-homepagebanner.webp",
    tagName: "Urgent cause",
    title: "Maui wildfires: how to help",
    excerpt: "",
    btnText: "Donate now",
    link: "/",
  },
  {
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
  },
  {
    imgSrc: "/images/start-friends-Family@2x.png",
    title: "Friends & family",
    imgAlt: "Friends & family",
    link: "/",
  },
  {
    imgSrc: "/images/start-charity@2x.png",
    title: "Charity",
    imgAlt: "Charity",
    link: "/",
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
    icon: <FacebookIcon />,
  },
  {
    label: "Youtube",
    url: "/",
    icon: <YouTubeIcon />,
  },
  {
    label: "Twitter",
    url: "/",
    icon: <TwitterIcon />,
  },
  {
    label: "Instagram",
    url: "/",
    icon: <InstagramIcon />,
  },
  {
    label: "Medium",
    url: "/",
    icon: <MediumIcon />,
  },
  {
    label: "Apple Podcasts",
    url: "/",
    icon: <ApplePodcast />,
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
