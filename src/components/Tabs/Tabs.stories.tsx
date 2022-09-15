import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tabs, Tab, TabPanel } from ".";

export default {
  title: "Common/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<any> = (args) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="styled tabs example"
      >
        <Tab label="Workflows" index={0} />
        <Tab label="Datasets" index={1} />
        <Tab label="Connections" index={2} />
      </Tabs>
      <TabPanel index={0} value={value} sx={{ p: 2 }}>
        Content 1
      </TabPanel>
      <TabPanel index={1} value={value} sx={{ p: 2 }}>
        Content 2
      </TabPanel>
      <TabPanel index={2} value={value} sx={{ p: 2 }}>
        Content 3
      </TabPanel>
    </>
  );
};

export const Main = Template.bind({});

Main.args = {};
