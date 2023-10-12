import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid"

export const companyName: string = "Company Name"

export const navPrimary = [
  {
    label: "Search",
    linkUrl: "",
    icon: <MagnifyingGlassIcon className="w-5 h-5 text-black" />,
    reverseIcon: false,
    intent: "navText",
  },
  {
    label: "For individuals",
    linkUrl: "",
    icon: <ChevronDownIcon className="w-5 h-6" />,
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
]

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
]
