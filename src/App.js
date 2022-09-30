import "./styles.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login";
import JobBoard from "./JobBoard";
import JobDetail from "./JobDetail";
import { useState, useEffect } from "react";

import JOBS from "./jobs";

export default function App() {
  const navigate = useNavigate();

  const [allJobs, setAllJobs] = useState(JOBS);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      navigate("/jobs");
    }
  }, [loggedIn]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/jobs" element={<JobBoard />} />
        <Route path="/job/:id" element={<JobDetail JOBS={JOBS} />} />
      </Routes>
    </div>
  );
}
