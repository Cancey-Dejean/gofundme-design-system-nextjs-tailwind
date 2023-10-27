import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { AngleRightSmallIcon } from "../Icons/Icons";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { buttonIntents, buttonSizes } from "../../../constants/storiesData";
import { SunIcon } from "@heroicons/react/24/outline";

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
    label: "Button",
    shadow: false,
    onClick: () => {
      console.log("clicked");
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
      options: buttonIntents,
    },
    size: {
      control: { type: "select" },
      options: buttonSizes,
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: (args) => {
    return <Button label="Primary" {...args} />;
  },
};

export const PrimaryGroup: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <Button {...args} size="small" label="Primary">
            Primary
          </Button>
          <Button {...args} size="base">
            Button
          </Button>
          <Button {...args} size="large">
            Button
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <Button {...args} size="small">
            <SunIcon className="h-6 w-6" /> Button
          </Button>

          <Button {...args} size="base">
            <SunIcon className="h-6 w-6" /> Button
          </Button>
          <Button {...args} size="large">
            <SunIcon className="h-6 w-6" /> Button
          </Button>
        </div>
      </div>
    );
  },
};

export const Secondary: Story = {
  render: (args) => {
    return (
      <Button {...args} intent="secondary" shadow>
        Button
      </Button>
    );
  },
};

export const SecondaryGroup: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
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

        <div className="flex items-center gap-4">
          <Button {...args} size="small" intent="secondary">
            <SunIcon className="h-6 w-6" /> Button
          </Button>

          <Button {...args} size="base" intent="secondary">
            <SunIcon className="h-6 w-6" /> Button
          </Button>
          <Button {...args} size="large" intent="secondary">
            <SunIcon className="h-6 w-6" /> Button
          </Button>
        </div>
      </div>
    );
  },
};

export const Tertiary: Story = {
  render: (args) => {
    return (
      <Button {...args} intent="tertiary">
        Button
      </Button>
    );
  },
};

export const TertiaryGroup: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
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

        <div className="flex items-center gap-4">
          <Button {...args} size="small" intent="tertiary">
            <SunIcon className="h-6 w-6" /> Button
          </Button>

          <Button {...args} size="base" intent="tertiary">
            <SunIcon className="h-6 w-6" /> Button
          </Button>
          <Button {...args} size="large" intent="tertiary">
            <SunIcon className="h-6 w-6" /> Button
          </Button>
        </div>
      </div>
    );
  },
};

export const Text: Story = {
  render: (args) => {
    return (
      <Button {...args} intent="text">
        Text
      </Button>
    );
  },
};

export const TextGroup: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
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

        <div className="flex items-center gap-4">
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
    );
  },
};

export const NavText: Story = {
  render: (args) => {
    return (
      <Button {...args} intent="navText" size="small">
        NavText
      </Button>
    );
  },
};

export const NavTextGroup: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <Button {...args} size="small" intent="navText">
            Button
          </Button>
          <Button {...args} size="base" intent="navText">
            <MagnifyingGlassIcon className="!w-[16px]" /> Button
          </Button>
          <Button {...args} size="large" intent="navText">
            Button <ChevronDownIcon className="!w-[16px]" />
          </Button>
        </div>
      </div>
    );
  },
};
