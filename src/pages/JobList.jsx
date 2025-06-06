import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import JobCard from "../components/JobCard";
import { BounceLoader } from "react-spinners";
import { useBlocker } from "react-router-dom";

export default function JobList() {
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch("http://localhost:3001/jobs");
        const jobData = await res.json();
        setJobData(jobData);
      } catch (error) {
        console.log("Error in fetching data", error);
      } finally {
        setLoading(false);
      }
    }

    const delayInMs = Math.floor(Math.random() * 4 + 1) * 1000;
    const timer = setTimeout(fetchJobs, delayInMs);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Nav />
      <section className="bg-[#86bcf955] min-h-[100vh] pt-[30px] px-[20px] pb-[20px]">
        <h2 className="text-[1.7rem] text-center font-bold text-[#4a64ce] my-[10px]">
          All Jobs
        </h2>
        <div
          className={`grid grid-cols-1 gap-[20px] place-items-center max-w-[90%] mx-[auto] py-[10px]  ${
            loading ? "md:grid-cols-1" : "md:grid-cols-3"
          } `}
        >
          {loading ? (
            <div className="flex justify-center items-center h-[100%] mx-[500px] ">
              <BounceLoader
                color="#1717ba"
                size={80}
                loading={true}
                speedMultiplier={1.5}
                cssOverride={{ margin: "200px auto" }}
              />
            </div>
          ) : (
            jobData.map((job) => {
              return <JobCard key={job.id} job={job} />;
            })
          )}
        </div>
      </section>
    </>
  );
}

<div className="flex justify-center items-center h-[100%]  border-[blue] border-2 mx-[500px] ">
  <BounceLoader
    color="#1717ba"
    size={80}
    loading={true}
    speedMultiplier={1.5}
    cssOverride={{ margin: "200px auto" }}
  />
</div>;
