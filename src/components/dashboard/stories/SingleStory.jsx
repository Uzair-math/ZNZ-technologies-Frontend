import { Box, Typography } from "@mui/material";
import React from "react";
import ImageComp from "../../ImageComp";
import theme from "../../../theme";

const SingleStory = () => {
  const storyProfileStyles = {
    backgroundSize: "cover",
    objectFit: "cover",
    border: "2px solid",
    borderColor: theme.palette.primary.main,
    borderRadius: "50%",
    padding: "5px",
    width: "70px",
    height: "70px",
    verticalAlign: "middle",
    zIndex:999
  };
  const storyCoverStyles = {
    position: "absolute",
    width: "100%",
    height: "100%",
    right:"20%",
    top: "0%",
    zIndex: -99,
    borderRadius: "2px",
    backgroundSize: "cover",
    objectFit: "contain",
  };
  return (
    <Box>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <ImageComp
          src={"assets/photos/moon.jpeg"}
          alt={"story_image"}
          sx={storyProfileStyles}
        />
        <ImageComp
          src={"assets/photos/demo.jpg"}
          alt={"cover"}
          sx={storyCoverStyles}
        />
      </Box>
      <Typography variant="storiesTitle">Robert Fin</Typography>
    </Box>
  );
};

export default SingleStory;
