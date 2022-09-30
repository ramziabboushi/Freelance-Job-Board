import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function TopNav() {
  return (
    <>
      <AppBar position="static" sx={{ background: "#2B5468" }}>
        <Toolbar
          sx={{ justifyContent: "space-between", width: "80%", m: "0 auto" }}
        >
          <FormControl variant="standard" sx={{ width: "40%" }}>
            <Input
              id="input-with-icon-adornment"
              placeholder="Search"
              sx={{ background: "#ffffff", p: "0 10px", borderRadius: "3px" }}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <Box>
            <Link to="/jobs" style={{ color: "white", textDecoration: "none" }}>
              <Button color="inherit" sx={{ textTransform: "none" }}>
                Find a Job
              </Button>
            </Link>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              <Button
                color="inherit"
                sx={{ ml: "30px", textTransform: "none" }}
              >
                Login
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
