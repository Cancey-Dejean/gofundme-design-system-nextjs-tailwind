import { DropdownIcon, SearchIcon } from "../components/atoms/Icons/Icons"

export const navPrimary = [
  {
    label: "Search",
    url: "/",
    icon: <SearchIcon />,
    linkable: false,
  },
  {
    label: "For individuals",
    url: "/",
    icon: <DropdownIcon />,
    linkable: false,
  },
  {
    label: "For charities",
    url: "/",
    icon: false,
    linkable: true,
  },
]

export const navSecondary = [
  {
    label: "How it works",
    url: "/",
    icon: false,
    linkable: true,
  },
  {
    label: "Sign in",
    url: "/",
    icon: false,
    linkable: true,
  },
]
