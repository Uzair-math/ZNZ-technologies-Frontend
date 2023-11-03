import React from "react";
import LogInWithBtn from "../LogInWithBtn";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ImageComp from "../ImageComp";
import { Container, Typography } from "@mui/material";
import TextInput from "../global_inputs/TextInput";
import ButtonComp from "../ButtonComp";
import Links from "../Links";
import { Field, ErrorMessage, Formik, Form } from "formik";

// formik
const initialValues = {
  // Define your form initial values here
  username:"",
  password:""
};

const onSubmit = (values, { resetForm }) => {
  // Handle form submission logic here
  console.log(values);
  // Reset the form if needed
  resetForm();
};
const SigninPage = () => {
  const flexCol = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };
  return (
    <div>
      <Box sx={{ overflow: "hidden" }}>
        <Formik initialValues={initialValues}>
          <Grid container spacing={0} columns={12}>
            <Grid item xs={6}>
              <ImageComp
                src={"assets/photos/logImage.png"}
                alt="photo"
                sx={{ backgroundSize: "cover" }}
              />
            </Grid>
            <Grid item xs={6}>
              <Container
                maxWidth="sm"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Box gap={"24px"} sx={{ width: "100%" }}>
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
                    <LogInWithBtn />
                  </Box>
                  {/* input fields  */}
                  <Form>
                    <Box
                      {...flexCol}
                      sx={{ gap: "24px", width: "100%", my: 12 }}
                    >
                      <Field
                        component={<TextInput />}
                        placeholder="Username or Email"
                        labelName="Username or Email"
                        type="text"
                        name="username"
                      />
                      <TextInput
                        label={"Enter your password"}
                        type={"password"}
                      />
                    </Box>
                    <ButtonComp label={"Sign in"} />
                  </Form>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"16px"}
                    mt={12}
                  >
                    <Typography variant="h6">Don’t have an account?</Typography>
                    <Links label={"Sign up"} href={"/signup"} />
                  </Box>
                </Box>
              </Container>
            </Grid>
          </Grid>
        </Formik>
      </Box>
    </div>
  );
};

export default SigninPage;
