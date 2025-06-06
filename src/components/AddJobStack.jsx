import AddJobCard from "./AddJobCard";

import React from "react";

export default function AddJobStack() {
  return (
    <section className="flex flex-col items-center  min-h-[200px] 5xl:bg-black bg-[#f2f2ec] p-[15px] pt-[40px] md:flex md:justify-center md:flex-row md:gap-x-[40px] ">
      <AddJobCard
        title="For Developers"
        subtitle="Browse our react jobs and start your career today"
        btnTitle="Browse Jobs"
        btnBg="[black]"
        bgCol="[white]"
        link="/jobs"
      />

      <AddJobCard
        title="For Employers"
        subtitle="List your job to find the perfect developer for the role"
        btnTitle="Add Job"
        btnBg="[#4a64ce]"
        bgCol="[#86bcf955]"
        link="/add_job"
      />
    </section>
  );
}
