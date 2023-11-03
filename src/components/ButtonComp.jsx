import { Button, Typography } from "@mui/material";
import React from "react";
import ImageComp from "./ImageComp";
import theme from "../theme";
const ButtonComp = ({ label, image, click, icon, customStyles }) => {
  const buttonStyles = {
    backgroundColor: "primary.main",
    color: "secondary.main",
    border: theme.borders.primaryBorder,
    ...customStyles,
    "&:hover": {
      backgroundColor: "primary.main",
    },
  };
  return (
    <React.Fragment>
      <Button sx={buttonStyles} onClick={click} fullWidth="true">
        {image ? (
          <ImageComp
            src={image}
            alt={image}
            customStyles={"width:100%,height:100%"}
          />
        ) : (
          <Typography variant="button20" padding={theme.spacing(5, 12)}>
            {label}
          </Typography>
        )}
        {icon ? <ImageComp src={icon} /> : ""}
      </Button>
    </React.Fragment>
  );
};

export default ButtonComp;
