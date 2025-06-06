import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import JobList from "./pages/JobList";
import AddJobs from "./pages/AddJobs";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/add_job" element={<AddJobs />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
