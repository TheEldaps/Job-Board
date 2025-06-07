import Nav from "../components/Nav";
import { Link } from "react-router-dom";

export default function JobPage() {
  return (
    <>
      <Nav />
      <div>
        <Link to="/JobList" className="text-[blue]">
          Back to Job Listings{" "}
        </Link>
      </div>
      <section>
        <div>
          <article>
            <h3>{Job.type}</h3>
            <h2>{job.role}</h2>
            <p>{job.location}</p>
          </article>

          <article>
            <h3>Job Description</h3>
            <p>{job.description}</p>
            <h3>Salary</h3>
            <p>{job.salary}</p>
          </article>
        </div>
        <div>
          <aside>
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
          <aside>
            <h3>Manage Job</h3>
            <button className="bg-[blue] text-[white]">Edit Job</button>
            <button className="bg-[red] text-[white]">Delete Job</button>
          </aside>
        </div>
      </section>
    </>
  );
}
