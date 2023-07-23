import type { Meta, StoryObj } from "@storybook/react";
import Menu from "../Menu";
import Dropdown from ".";

const meta = {
  title: "Components/Dropdown",
  tags: ["autodocs"],
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    horizontal: "right",
    vertical: "bottom",
    toggleContent: "Click me",
    menu: (
      <Menu
        className="w-56 mt-2"
        items={[
          { content: <span>item1</span> },
          { content: <span>item2</span> },
        ]}
        itemsPrefix="storydropdown"
      />
    ),
  },
};
