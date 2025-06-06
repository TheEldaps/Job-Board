import Jobs from "../assets/fake_job_data.json";
import JobCard from "./JobCard";

export default function JobBoard() {
  const Jobsample = Jobs.jobs.slice(0, 3);
  return (
    <section className="bg-[#86bcf955] pt-[30px] px-[20px] pb-[20px]">
      <h2 className="text-[1.7rem] text-center font-bold text-[#4a64ce] my-[10px]">
        Browse Jobs
      </h2>

      <section className="grid grid-cols-1 gap-[20px] place-items-center max-w-[90%] mx-[auto] py-[10px]  md:grid-cols-3">
        {Jobsample.map((jobdata) => {
          return <JobCard key={jobdata.id} job={jobdata} />;
        })}
      </section>
    </section>
  );
}
