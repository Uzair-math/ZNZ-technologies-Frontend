import React, { useState } from "react";
import LogInWithBtn from "../LogInWithBtn";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ImageComp from "../ImageComp";
import { Container, FormControlLabel, Typography } from "@mui/material";
import TextInput from "../global_inputs/TextInput";
import Checkbox from "@mui/material/Checkbox";
import ButtonComp from "../ButtonComp";
import Links from "../Links";
import { Visibility } from "@mui/icons-material";
import theme from "../../theme";
const SignuPage = () => {
  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // responsive styles 
  const resposiveImage={
    visibility:{xs:"hidden"}
  }
  const flexCol = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };
  return (
    <div>
      <Box sx={{ overflow: "hidden" }}>
        <Grid container spacing={0} columns={12}>
          <Grid item xs={6}>
            <ImageComp
              src={"assets/photos/logImage.png"}
              alt="photo"
              style={{[theme.breakpoints.up('sm')]:{display:'none'}}}
            
            />
          </Grid>
          <Grid item xs={6}>
            <Container maxWidth="sm">
              <Box {...flexCol} gap={"24px"} sx={{ height: "100vh" }}>
                {/* logo and typo container  */}
                <Box {...flexCol} gap={"24px"}>
                  <ImageComp
                    src={"assets/photos/logo.png"}
                    alt="photo"
                    sx={{ backgroundSize: "cover" }}
                  />
                  <Box {...flexCol} sx={{ textAlign: "center", gap: "16px" }}>
                    <Typography variant="h2">
                      Sign up to ZNZ Communications
                    </Typography>
                    <Typography variant="h5">
                      Lorem Ipsum is simply dummy text of the <br /> printing
                      and typesetting industry.
                    </Typography>
                  </Box>
                </Box>
                {/* input fields  */}
                <Box {...flexCol} sx={{ gap: "24px" }}>
                  <TextInput label={"Name"} type={"text"} />
                  <TextInput label={"Username"} type={"text"} />
                  <TextInput label={"Email"} type={"email"} />
                  <TextInput label={"Password"} type={"password"} />
                  <FormControlLabel
                    control={<Checkbox />}
                    onChange={handleChange}
                    label={
                      <Typography variant="h5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </Typography>
                    }
                  />
                </Box>
                <Box width={"100%"}>
                  <ButtonComp label={"Create Account"} />
                  <LogInWithBtn />
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"16px"}
                >
                  <Typography variant="h6">Already have an account?</Typography>
                  <Links label={"Sign In"} href={"/signin"} />
                </Box>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SignuPage;
