import type { Meta, StoryObj } from "@storybook/react"
import Header from "./Header"
import { navPrimary, navSecondary } from "../../../constants"
import { GoFundMe } from "../../atoms/Logos/Logos"

const meta = {
  title: "Components/Header",
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Navigation: Story = {
  render: (args) => {
    return (
      <Header
        navPrimary={navPrimary}
        navSecondary={navSecondary}
        logo={<GoFundMe />}
        {...args}
      />
    )
  },
}
