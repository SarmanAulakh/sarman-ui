import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Common/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      // options: ["primary", "secondary"],
      // control: { type: 'select' },
      control: {
        type: null
      }
    },
    // variant: {
    //   options: ["text", "contained", "outlined"],
    //   control: { type: "radio" },
    // },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Test Button</Button>
);

export const Solid = Template.bind({});
export const Gradient = Template.bind({});
export const Square = Template.bind({});

Solid.args = {}

Gradient.args = {
  colorType: "gradient",
};

Square.args = {
  borderType: 'square'
}
