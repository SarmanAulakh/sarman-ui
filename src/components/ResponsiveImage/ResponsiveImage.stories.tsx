import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ResponsiveImage from '.';

export default {
  title: 'Common/ResponsiveImage',
  component: ResponsiveImage,
} as ComponentMeta<typeof ResponsiveImage>;

const Template: ComponentStory<typeof ResponsiveImage> = (args) => (
  <ResponsiveImage {...args}>
    <h1 style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white'
    }}>
      TITLE
    </h1>
  </ResponsiveImage>
);

export const MultipleImages = Template.bind({});
export const SingleImage = Template.bind({});

// https://images.ctfassets.net/rporu91m20dc/1eqiJ8nGs0sJcPwl92eqjc/5fc75a0474ee2c81efab3e42221c2199/fallout-76-hero-img?q=70&fm=webp

MultipleImages.args = {
  alt: "Test",
  images: {
    sm: "https://images.ctfassets.net/rporu91m20dc/1WST2ESBUDQOF3deYPEZFh/d0d8b0a6006c9e8d1a1d82fb84a83cc4/banner-3.jpg?q=70&fm=webp",
    md: "https://images.ctfassets.net/rporu91m20dc/30yMY0RDJ64K8jwbbCWcRE/e5fe652da31cdec09a52217630c260aa/banner-2.jpg?q=70&fm=webp",
    lg: "https://images.ctfassets.net/rporu91m20dc/5xso50zCdMOsoqo3Rq9XAi/48329a5f4583540f7275b35963266323/banner.jpg?q=70&fm=webp",
  },
  height: 500
}

SingleImage.args = {
  alt: "Test",
  images: {
    lg: "https://images.ctfassets.net/rporu91m20dc/5xso50zCdMOsoqo3Rq9XAi/48329a5f4583540f7275b35963266323/banner.jpg?q=70&fm=webp",
  },
  height: 500
}


