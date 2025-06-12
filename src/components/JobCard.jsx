import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";

export default function JobCard({ job }) {
  const [showFullDetails, setShowFullDetails] = useState(false);

  let shortDetails = job.description.slice(0, 90) + "...";

  return (
    <article className="bg-[white] px-[25px] py-[30px] rounded-2xl shadow-[4px_4px_5px_rgba(0,0,0,0.1)] max-w-[400px] h-[380px]  md:min-w-[200px] md:h-[300px] hover:bg-[#4a64ce6b] transition-transform duration-300 ease-in-out hover:skew-x-2 hover:-rotate-1 hover:scale-95">
      <h3 className="mb-[5px] text-[#333232]">{job.type}</h3>
      <h2 className="text-[1.3rem] mb-[20px] font-bold">{job.role}</h2>
      <p className="mb-[20px] text-[0.9rem] text-justify">
        {showFullDetails ? job.description : shortDetails}{" "}
        <button
          className="text-[blue] cursor-pointer hover:text-[#0000ff87]"
          onClick={() => {
            setShowFullDetails((prev) => !prev);
          }}
        >
          {showFullDetails ? "less" : "more"}
        </button>
      </p>
      <p className="font-bold text-[#1414e3] text-[0.9em] mb-[20px]">
        {job.salary} /Year
      </p>
      <hr />
      <div className="md:flex justify-between items-center mt-[10px]">
        <p className=" flex my-[10px] text-[#e3231d]">
          <FaMapMarker className="text-[red] mr-[5px] mt-[3px]" />

          {job.location}
        </p>

        <Link
          to={`/job/${job.id}`}
          className="block bg-[#4a64ce] py-[5px] rounded-lg text-[0.8rem] text-center text-[white] cursor-pointer hover:text-[#92a2de] md:w-[80px] md:"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
