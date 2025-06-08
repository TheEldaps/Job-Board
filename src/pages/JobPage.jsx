import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

export default function JobPage() {
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchJob() {
      try {
        const rep = await fetch(`http://localhost:3001/jobs/${id}`);
        const data = await rep.json();
        setJob(data);
      } catch (error) {
        console.log("Error in fetching:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchJob();
  }, []);

  return (
    <>
      <Nav />
      <div className="p-[20px] ml-[130px]">
        <Link to="/jobs" className="text-[blue] text-[1.1rem] h-[40px]">
          Back to Job Listings{" "}
        </Link>
      </div>
      {loading ? (
        <BounceLoader />
      ) : (
        <section className="grid md:grid-cols-[2fr_1fr] gap-[40px] pb-[20px] bg-[#efeeee] pt-[50px] md:px-[150px]">
          <div className="">
            <article className="bg-[white] border-2 mb-[40px] p-[20px] md:h-[120px] rounded-2xl ">
              <h3 className="text-[0.8rem] ">{job.type}</h3>
              <h2 className="text-[1.2rem] font-bold mb-[6px]">{job.role}</h2>
              <p className="text-[0.8rem] text-[red]">{job.location}</p>
            </article>

            <article className="border-2 md:h-[300px] p-[20px] rounded-2xl">
              <h3>Job Description</h3>
              <p>{job.description}</p>
              <h3>Salary</h3>
              <p>{job.salary}</p>
            </article>
          </div>
          <div>
            <aside className="bg-[white] border-2 min-h-[400px] mb-[40px] p-[20px] rounded-2xl">
              <h2 className="font-bold">Company info</h2>
              <h2>{job.company.companyName}</h2>
              <p>{job.company.description}</p>
              <hr />

              <div>
                <h2>Contact Email:</h2>
                <h3>{job.company.contactEmail}</h3>
                <h2>Contact Phone:</h2>
                <h3>{job.company.contactPhone}</h3>
              </div>
            </aside>

            <aside className="bg-[white] border-2 p-[20px] rounded-2xl">
              <h3 className="mb-[20px] font-bold">Manage Job</h3>
              <div className="">
                <button className="bg-[blue] block mb-[10px] mx-[auto] px-[40px] min-w-[150px] py-[5px] text-[white] rounded">
                  Edit Job
                </button>
                <button className="bg-[red] mx-[auto] px-[40px] py-[5px] block text-[white] min-w-[150px] rounded">
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
