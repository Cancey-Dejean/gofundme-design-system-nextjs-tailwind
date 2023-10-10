import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid"

export const navPrimary = [
  {
    label: "Search",
    url: "/",
    icon: <MagnifyingGlassIcon className="w-4 h-4" />,
  },
  {
    label: "For individuals",
    url: "/",
    icon: <ChevronDownIcon className="w-5 h-6" />,
    reverseIcon: true,
  },
  {
    label: "For charities",
    url: "/",
    icon: false,
  },
]

export const navSecondary = [
  {
    label: "How it works",
    url: "/",
    icon: false,
  },
  {
    label: "Sign in",
    url: "/",
    icon: false,
  },
]
