import React from "react";
import { Meta, Story } from "@storybook/react";

import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { children: "Primary 😃", size: "small" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, primary: false, children: "Secondary 😇" };
