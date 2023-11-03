import { Box, Button, Typography } from "@mui/material";
import React from "react";
import theme from "../theme";

const LogInWithBtn = () => {
  const buttonStyles = {
    border: "1px solid #F1F1F1",
    backgroundColor: "white",
    padding: theme.spacing(10, 0),
    "&:hover": {
      borderColor: "primary.main",
      backgroundColor: "white",
    },
  };
  return (
    <React.Fragment>
      <Box display={"flex"} gap={theme.spacing(4)} mt={12} width={"100%"}>
        <Button
          variant="outlined"
          sx={buttonStyles}
          color="blackColor"
          fullWidth
        >
          <img src="assets/photos/google.png" alt="google" />
          <Typography variant="h5ButtonTypo">Join with Google</Typography>
        </Button>
        <Button variant="outlined" sx={buttonStyles} color="blackColor">
          <img src="assets/photos/apple.png" alt="google" />
        </Button>
        <Button variant="outlined" sx={buttonStyles} color="blackColor">
          <img src="assets/photos/fb.png" alt="google" />
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default LogInWithBtn;
