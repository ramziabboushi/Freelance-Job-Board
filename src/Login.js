import * as React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";

import {
  PrimaryButton,
  LoginBox,
  LoginContainer,
  LoginInput
} from "./StyledComponents";

export default function Login({ setLoggedIn }) {
  return (
    <>
      <LoginContainer>
        <LoginBox>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ mb: "25px", color: "#5D5C5C", fontWeight: "600" }}
          >
            Log In
          </Typography>
          <FormControl sx={{ width: "70%" }}>
            <LoginInput
              id="input-with-icon-adornment"
              placeholder="Username or Email"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl sx={{ width: "70%" }}>
            <LoginInput id="password" placeholder="Password" />
          </FormControl>
          <PrimaryButton
            variant="contained"
            sx={{
              mt: "25px",
              width: "70%",
              textTransform: "none",
              fontSize: "16px"
            }}
            onClick={() => setLoggedIn(true)}
          >
            Continue with Email
          </PrimaryButton>
        </LoginBox>
      </LoginContainer>
    </>
  );
}
