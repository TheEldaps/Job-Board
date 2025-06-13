import Nav from "../components/Nav";
import Hero from "../components/Hero";
import AddJobStack from "../components/AddJobStack";
import JobBoard from "../components/JobBoard";
import ViewAllJobs from "../components/ViewAllJobs";
import NavAndHero from "../components/NavAndHero";

export default function LandingPage() {
  return (
    <>
      <NavAndHero />
      <AddJobStack />
      <JobBoard />
      <ViewAllJobs />
    </>
  );
}
