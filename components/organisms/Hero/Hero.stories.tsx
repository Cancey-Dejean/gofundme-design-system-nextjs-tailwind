import type { Meta, StoryObj } from "@storybook/react";
import Hero from "./";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Sections/Hero",
  component: Hero,
  args: {
    headlineOneLine: "Headline One Line",
    headlineSecondLine: "Second Line Goes Here",
    imgSrcDesktop: "http://dummyimage.com/1920x972.png/dddddd/ffffff",
    imgSrcMobile: "http://dummyimage.com/750x1225.png/dddddd/ffffff",
    imgAlt: "Hero image",
    btnText: "Button Text",
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    btnIcon: {
      control: false,
    },
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return <Hero {...args} />;
  },
};
