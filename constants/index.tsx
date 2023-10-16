import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

export const companyName: string = "Company Name";

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
    imgSrc: "/images/hero.jpg",
    tagName: "Giving Season",
    title: "Fundraise for your favorite nonprofit",
    excerpt:
      "This giving season, you can give back to a nonprofit you care about by starting a fundraiser on GoFundMe",
    btnText: "Get Started",
    link: "/",
  },
  {
    featured: false,
    imgSrc: "/images/hero.jpg",
    tagName: "Urgent cause",
    title: "Fundraising FAQs: Israel/Gaza",
    excerpt: "",
    btnText: "Donate Now",
    link: "/",
  },
  {
    featured: false,
    imgSrc: "/images/hero.jpg",
    tagName: "Urgent cause",
    title: "Maui wildfires: how to help",
    excerpt: "",
    btnText: "Donate Now",
    link: "/",
  },
  {
    featured: false,
    imgSrc: "/images/hero.jpg",
    tagName: "Giving Season",
    title: "Fund the future of education",
    excerpt: "",
    btnText: "Donate Now",
    link: "/",
  },
];
