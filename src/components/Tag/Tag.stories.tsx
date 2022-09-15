import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tag from '.';

export default {
  title: 'Common/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args}/>;

export const GameListTags = Template.bind({});

GameListTags.args = {
  label: 'MULTI-PLAYER',
};
