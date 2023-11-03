import React from "react";
import AddStoryBtn from "./AddStoryBtn";
import { Box, Typography } from "@mui/material";
import SingleStory from "./SingleStory";
import GlobalSlider from "../../GlobalSlider";

const Stories = () => {
  const slides = [
    <SingleStory />,
    <SingleStory />,
    <SingleStory />,
    <SingleStory />,
    <SingleStory />,
    <SingleStory />,
    <SingleStory />,
    <SingleStory />,
    <SingleStory />,
    <SingleStory />,
    <SingleStory />,
    <SingleStory />,
    <SingleStory />,
    <SingleStory />,
  ];
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <AddStoryBtn />
        </Box>
        <Box sx={{ width: "90%" }}>
          <GlobalSlider slides={slides} dots={false} arrows={false} />
        </Box>
      </Box>
    </div>
  );
};

export default Stories;
