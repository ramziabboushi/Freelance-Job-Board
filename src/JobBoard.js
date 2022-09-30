import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useState } from "react";

import JOBS from "./jobs";
import {
  JobCategory,
  JobDetailsText,
  JobDetailsTitle,
  PRIMARY_GREEN
} from "./StyledComponents";
import TopNav from "./TopNav";

export default function JobBoard() {
  const [selectedCategory, setSelectedCategory] = useState(JOBS[0].category);

  let categories = [];
  for (let job of JOBS) {
    if (!categories.includes(job.category)) {
      categories.push(job.category);
    }
  }
  let filteredJobs = JOBS.filter((job) => job.category === selectedCategory);
  return (
    <>
      <TopNav />
      <Box
        sx={{
          width: 0.8,
          height: "120px",
          m: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "600",
            color: "#5B5C5D",
            fontSize: "24px",
            textAlign: "left"
          }}
        >
          Find Work
        </Typography>
        <FormControl
          variant="standard"
          sx={{
            width: 0.8,
            position: "relative",
            boxSizing: "border-box",
            pl: "9px"
          }}
        >
          <Input
            id="input-with-icon-adornment"
            placeholder="Search"
            sx={{ background: "#ffffff", p: "3px 10px", borderRadius: "3px" }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon
                  sx={{
                    background: PRIMARY_GREEN,
                    p: "4px",
                    fontSize: "30px",
                    color: "white",
                    position: "absolute",
                    right: "0"
                  }}
                />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Box
        sx={{
          width: "80%",
          height: "100vh",
          m: "0 auto",
          display: "flex"
        }}
      >
        <Box sx={{ width: 0.2, height: 0.89 }}>
          <JobDetailsTitle>Categories</JobDetailsTitle>
          {categories.map((category) => (
            <JobCategory
              sx={category === selectedCategory ? { color: PRIMARY_GREEN } : {}}
              onClick={() => setSelectedCategory(category)}
              key={category}
            >
              {category}
            </JobCategory>
          ))}
        </Box>
        <Box
          sx={{
            width: 0.8,
            height: 0.89,
            boxSizing: "border-box"
          }}
        >
          {filteredJobs.map((job) => (
            <Box
              sx={{
                background: "#ffffff",
                height: "auto",
                mb: "2px",
                p: "20px 30px",
                boxSizing: "border-box",
                ml: "10px"
              }}
              key={job.id}
            >
              <Link to={`/job/${job.id}`} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    variant: "h5",
                    fontWeight: "600",
                    color: "#5D5C5C",
                    fontSize: "20px",
                    textAlign: "left",
                    marginBottom: "10px"
                  }}
                >
                  {job.title}
                </Typography>
              </Link>
              <JobDetailsText>
                Hourly: ${job.hourlyUSD.toLocaleString()}
              </JobDetailsText>
              <JobDetailsText>Posted {job.postedTime}</JobDetailsText>
              <JobDetailsText>
                <Box
                  component="img"
                  alt=""
                  src="https://assets.codepen.io/6060109/location-icon.png"
                  sx={{
                    width: "20px",
                    mr: "7px",
                    boxSizing: "border-box",
                    mb: "-5px"
                  }}
                />
                {job.remote && "Remote"}, {job.location}
              </JobDetailsText>
              <Typography
                variant="h6"
                sx={{
                  color: "#666666",
                  fontSize: "14px",
                  textAlign: "left",
                  mb: "10px"
                }}
              >
                {job.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
