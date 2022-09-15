import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Searchbar from '.';

export default {
  title: 'Common/Searchbar',
  component: Searchbar,
} as ComponentMeta<typeof Searchbar>;

const Template: ComponentStory<typeof Searchbar> = (args) => (
  <Searchbar {...args}/>
);

export const NavSearch = Template.bind({});
export const SolidSearch = Template.bind({});

NavSearch.args = {};

SolidSearch.args = {
  borderType: "solid"
};