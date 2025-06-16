import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import JobList from "./pages/JobList";
import AddJobs from "./pages/AddJobs";
import ErrorPage from "./pages/ErrorPage";
import JobPage from "./pages/JobPage";
import EditJob from "./pages/EditJob";
// import "./index.css";
import NavAndHero from "./components/NavAndHero";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/add_job" element={<AddJobs />} />
        <Route path="/job/:id" element={<JobPage />} />
        <Route path="/job/:id/edit-job/" element={<EditJob />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
