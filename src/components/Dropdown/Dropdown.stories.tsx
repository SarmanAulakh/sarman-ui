import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Dropdown from ".";

enum Genres {
  ACTION = 'ACTION',
  RPG = 'RPG',
  FPS = 'FPS',
  STRATEGY = 'STRATEGY',
}

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  placeholder: "Select a genre",
  values: Object.values(Genres),
  width: 300,
  select: {
    sx: {
      // background: 'pink'
    }
  },
  menuItem: {
    sx: {
      backgroundColor: 'pink',      
    },
  }
};

export default {
  title: "Common/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;
