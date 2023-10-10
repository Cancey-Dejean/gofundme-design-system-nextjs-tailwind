import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"
import {
  AngleRightSmallIcon,
  DropdownIcon,
  SearchIcon,
  SunIcon,
} from "../Icons/Icons"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  tags: ["autodocs"],
  title: "Components/Button",
  component: Button,
  args: {
    size: "base",
    intent: "primary",
    reverseIcon: false,
    linkUrl: "",
    className: "",
    shadow: false,
    onClick: () => {
      console.log("clicked")
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    intent: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "tertiary",
        "border",
        "text",
        "navText",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["base", "small", "large"],
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: (args) => {
    return <Button {...args}>Button</Button>
  },
}

export const PrimaryGroup: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex gap-4 items-center">
          <Button {...args} size="small">
            Button
          </Button>
          <Button {...args} size="base">
            Button
          </Button>
          <Button {...args} size="large">
            Button
          </Button>
        </div>

        <div className="flex gap-4 items-center">
          <Button {...args} size="small">
            <SunIcon className="[&_path]:fill-white" /> Button
          </Button>

          <Button {...args} size="base">
            <SunIcon className="[&_path]:fill-white" /> Button
          </Button>
          <Button {...args} size="large">
            <SunIcon className="[&_path]:fill-white" /> Button
          </Button>
        </div>
      </div>
    )
  },
}

export const Secondary: Story = {
  render: (args) => {
    return (
      <Button {...args} intent="secondary" shadow>
        Button
      </Button>
    )
  },
}

export const SecondaryGroup: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex gap-4 items-center">
          <Button {...args} size="small" intent="secondary">
            Button
          </Button>
          <Button {...args} size="base" intent="secondary">
            Button
          </Button>
          <Button {...args} size="large" intent="secondary">
            Button
          </Button>
        </div>

        <div className="flex gap-4 items-center">
          <Button {...args} size="small" intent="secondary">
            <SunIcon /> Button
          </Button>

          <Button {...args} size="base" intent="secondary">
            <SunIcon /> Button
          </Button>
          <Button {...args} size="large" intent="secondary">
            <SunIcon /> Button
          </Button>
        </div>
      </div>
    )
  },
}

export const Tertiary: Story = {
  render: (args) => {
    return (
      <Button {...args} intent="tertiary">
        Button
      </Button>
    )
  },
}

export const TertiaryGroup: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex gap-4 items-center">
          <Button {...args} size="small" intent="tertiary">
            Button
          </Button>
          <Button {...args} size="base" intent="tertiary">
            Button
          </Button>
          <Button {...args} size="large" intent="tertiary">
            Button
          </Button>
        </div>

        <div className="flex gap-4 items-center">
          <Button {...args} size="small" intent="tertiary">
            <SunIcon /> Button
          </Button>

          <Button {...args} size="base" intent="tertiary">
            <SunIcon /> Button
          </Button>
          <Button {...args} size="large" intent="tertiary">
            <SunIcon /> Button
          </Button>
        </div>
      </div>
    )
  },
}

export const Text: Story = {
  render: (args) => {
    return (
      <Button {...args} intent="text">
        Text
      </Button>
    )
  },
}

export const TextGroup: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex gap-4 items-center">
          <Button {...args} size="small" intent="text">
            Button
          </Button>
          <Button {...args} size="base" intent="text">
            Button
          </Button>
          <Button {...args} size="large" intent="text">
            Button
          </Button>
        </div>

        <div className="flex gap-4 items-center">
          <Button {...args} size="small" intent="text">
            Button <AngleRightSmallIcon className="!w-[16px]" />
          </Button>

          <Button {...args} size="base" intent="text">
            Button <AngleRightSmallIcon className="!w-[16px]" />
          </Button>
          <Button {...args} size="large" intent="text">
            Button <AngleRightSmallIcon className="!w-[16px]" />
          </Button>
        </div>
      </div>
    )
  },
}

export const NavText: Story = {
  render: (args) => {
    return (
      <Button {...args} intent="navText">
        NavText
      </Button>
    )
  },
}

export const NavTextGroup: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex gap-4 items-center">
          <Button {...args} size="small" intent="navText">
            Button
          </Button>
          <Button {...args} size="base" intent="navText">
            <SearchIcon className="!w-[16px]" /> Button
          </Button>
          <Button {...args} size="large" intent="navText">
            Button <ChevronDownIcon className="!w-[16px]" />
          </Button>
        </div>
      </div>
    )
  },
}
