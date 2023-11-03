import React from "react";
import ButtonComp from "../../ButtonComp";
import ImageComp from "../../ImageComp";
import { Box, Button, Typography } from "@mui/material";
import theme from "../../../theme";

const AddStoryBtn = ({ click }) => {
  const buttonStyles = {
    borderRadius: "50%",
    padding: "30px",
    width: "80px",
    height: "80px",
  };
  return (
    <React.Fragment>
      <Box>
        <ButtonComp
          image={"assets/photos/plusIcon.png"}
          customStyles={buttonStyles}
        />
        <Typography variant="addStoryTypo">Add Your Story</Typography>
      </Box>
    </React.Fragment>
  );
};

export default AddStoryBtn;
