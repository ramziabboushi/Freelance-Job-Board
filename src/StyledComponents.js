import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { Typography } from "@mui/material";

export const PRIMARY_GREEN = "#39B54A";
const SECONDARY_NAVY = "#2B5468";

export const LoginContainer = styled(Box)(() => ({
  width: "100%",
  height: "100vh",
  backgroundColor: "#f1f1f1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}));

export const LoginBox = styled(Box)(() => ({
  width: 500,
  height: 350,
  p: 10,
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box"
}));

export const LoginInput = styled(Input)(() => ({
  border: `1px solid ${PRIMARY_GREEN}`,
  borderRadius: 5,
  margin: "5px 0",
  padding: "3px 5px"
}));

export const PrimaryButton = styled(Button)(() => ({
  background: PRIMARY_GREEN,
  borderRadius: "25px"
}));

export const JobCategory = styled(Typography)(() => ({
  variant: "h6",
  color: "#666666",
  fontSize: "15px",
  textAlign: "left",
  marginBottom: "5px"
}));

export const JobBox = styled(Box)(() => ({
  background: "#ffffff",
  height: "auto",
  mb: "2px",
  p: "20px 30px",
  boxSizing: "border-box",
  ml: "10px"
}));

export const JobDetailsTitle = styled(Typography)(() => ({
  variant: "h5",
  fontWeight: "600",
  color: "#666666",
  fontSize: "20px",
  textAlign: "left",
  marginBottom: "10px"
}));

export const JobDetailsText = styled(Typography)(() => ({
  variant: "h6",
  fontWeight: "600",
  color: "#666666",
  fontSize: "15px",
  textAlign: "left",
  marginBottom: "10px"
}));
