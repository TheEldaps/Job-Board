import Nav from "../components/Nav";
import Hero from "../components/Hero";
import AddJobStack from "../components/AddJobStack";
import JobBoard from "../components/JobBoard";
import ViewAllJobs from "../components/ViewAllJobs";

export default function LandingPage() {
  return (
    <>
      <Nav />
      <Hero />
      <AddJobStack />
      <JobBoard />
      <ViewAllJobs />
    </>
  );
}
