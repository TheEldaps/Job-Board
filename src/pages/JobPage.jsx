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
        <Link to="/JobList" className="text-[blue] text-[1.1rem] h-[40px]">
          Back to Job Listings{" "}
        </Link>
      </div>
      {loading ? (
        <BounceLoader />
      ) : (
        <section className="grid md:grid-cols-[2fr_1fr] gap-[40px] pb-[20px] bg-[#efeeee] pt-[50px] md:px-[150px]">
          <div className="">
            <article className=" bg-[white] border-2 mb-[40px] p-[20px] md:h-[120px] ">
              <h3 className="text-[0.8rem] ">{job.type}</h3>
              <h2 className="text-[1.2rem] font-bold mb-[6px]">{job.role}</h2>
              <p className="text-[0.8rem] text-[red]">{job.location}</p>
            </article>

            <article className="border-2 md:h-[300px] p-[20px]">
              <h3>Job Description</h3>
              <p>{job.description}</p>
              <h3>Salary</h3>
              <p>{job.salary}</p>
            </article>
          </div>
          <div>
            <aside className="bg-[white] border-2 min-h-[400px] mb-[40px] p-[20px]">
              <h2>Company info</h2>
              <h2>{job.company.companyName}</h2>
              <p>{job.company.description}</p>

              <div>
                <h2>Contact Email:</h2>
                <h3>{job.company.contactEmail}</h3>
                <h2>Contact Phone:</h2>
                <h3>{job.company.contactPhone}</h3>
              </div>
            </aside>
            <aside className="bg-[white] border-2 p-[20px]">
              <h3>Manage Job</h3>
              <button className="bg-[blue] text-[white]">Edit Job</button>
              <button className="bg-[red] text-[white]">Delete Job</button>
            </aside>
          </div>
        </section>
      )}
    </>
  );
}
