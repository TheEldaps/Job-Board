import Nav from "../components/Nav";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import {} from "react-router-dom";

export default function JobPage() {
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("Deleting job with ID:", id);

  //The effect below sends a request to the API fetches the jobs in the database
  useEffect(() => {
    async function fetchJob() {
      try {
        const rep = await fetch(
          `https://job-board-backend-805t.onrender.com/jobs/${id}`
        );
        const data = await rep.json();
        setJob(data);
      } catch (error) {
        console.log("Error in fetching:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchJob();
  }, [id]);

  //This function handles the deletion of a job

  async function handleDelete() {
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?"
    );
    if (!confirm) {
      return navigate("/jobs");
    }
    const res = await fetch(`http://localhost:3001/jobs/${id}`, {
      method: "DELETE",
    });

    return navigate("/jobs");
  }

  return (
    <>
      <Nav />
      <div className="p-[10px] pl-[30px] md:ml-[130px] ">
        <Link
          to="/jobs"
          className=" text-[blue] text-[1.1rem] h-[20px] hover:text-[#0000ff4f]"
        >
          <FaArrowLeft className="inline text-[blue]  mr-[4px] mt-[-2px]" />
          Back
        </Link>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-[82vh] ">
          <BounceLoader color="#1717ba" />
        </div>
      ) : (
        <section className="grid md:grid-cols-[2fr_1fr] gap-[20px] md:gap-[40px] px-[30px] pb-[20px] bg-[#efeeee] pt-[50px] md:px-[150px]">
          <div className="">
            <article className="bg-[white]  mb-[20px] md:mb-[40px] p-[20px] md:h-[120px] rounded-2xl shadow-[4px_4px_5px_rgba(0,0,0,0.1)] ">
              <h3 className="text-[0.8rem] ">{job.type}</h3>
              <h2 className="text-[1.2rem] font-bold mb-[6px]">{job.role}</h2>
              <p className="flex text-[0.8rem] text-[red]">
                <FaMapMarker className="text-[red] mr-[3px] mt-[3px]" />{" "}
                {job.location}
              </p>
            </article>

            <article className="bg-[white] md:h-[300px] p-[20px] rounded-2xl shadow-[4px_4px_5px_rgba(0,0,0,0.1)]">
              <h3 className="font-bold mb-[10px] text-[blue]">
                Job Description
              </h3>
              <p className="text-[0.9rem] mb-[20px] text-justify">
                {job.description}
              </p>
              <h3 className="font-bold text-[blue]">Salary</h3>
              <p>{job.salary}</p>
            </article>
          </div>
          <div>
            <aside className="bg-[white]  min-h-[400px] mb-[20px] md:mb-[40px] p-[20px] rounded-2xl shadow-[4px_4px_5px_rgba(0,0,0,0.1)]">
              <h2 className="font-bold mb-[10px]">Company info</h2>
              <h2 className="text-[1.2rem] font-bold mb-[5px]">
                {job.company.companyName}
              </h2>
              <p>{job.company.description}</p>
              <hr className="my-[30px]" />

              <div>
                <h2 className="text-[1.1rem]">Contact Email:</h2>
                <h3 className="mb-[10px]">{job.company.contactEmail}</h3>
                <h2 className="text-[1.1rem]">Contact Phone:</h2>
                <h3>{job.company.contactPhone}</h3>
              </div>
            </aside>

            <aside className="bg-[white]  p-[20px] rounded-2xl shadow-[4px_4px_5px_rgba(0,0,0,0.1)]">
              <h3 className="mb-[20px] font-bold">Manage Job</h3>
              <div className="">
                <Link to={`/job/${id}/edit-job`}>
                  <button className="bg-[blue] block mb-[10px] mx-[auto] px-[40px] min-w-[150px] py-[5px] text-[white] hover:text-[#ffffff6d] cursor-pointer rounded">
                    Edit Job
                  </button>
                </Link>

                <button
                  className="bg-[red] cursor-pointer mx-[auto] px-[40px] py-[5px] block text-[white] min-w-[150px] hover:text-[#ffffff6d] rounded"
                  onClick={handleDelete}
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </section>
      )}
    </>
  );
}
