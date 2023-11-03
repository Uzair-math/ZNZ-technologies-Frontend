import React from "react";
import Stories from "./stories/Stories";
import Posts from "./posts/Posts";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Typography } from "@mui/material";

const DashBoard = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Stories />
      <Box sx={{ width: "100%" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} centered>
              <Tab
                label={
                  <Typography variant="h3" sx={{ width: "200px" }}>
                    For You
                  </Typography>
                }
                value="1"
              />
              <Tab
                label={
                  <Typography variant="button20" sx={{ width: "200px" }}>
                    Discover
                  </Typography>
                }
                value="2"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box sx={{padding:"40px 0px"}}><Posts /></Box>
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default DashBoard;
