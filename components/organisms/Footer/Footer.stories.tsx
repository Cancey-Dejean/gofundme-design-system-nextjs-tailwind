import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./";
import {
  footerLinksDefault,
  legalLinksDefault,
} from "../../../constants/mockData";
import { GoFundMe } from "../../../components/atoms/Logos/Logos";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Sections/Footer",
  component: Footer,
  args: {
    logo: <GoFundMe />,
    footerLinks: footerLinksDefault,
    legalLinks: legalLinksDefault,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    logo: {
      control: false,
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return <Footer {...args} />;
  },
};
