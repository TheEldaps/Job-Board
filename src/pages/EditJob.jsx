import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { BounceLoader } from "react-spinners";

export default function EditJob() {
  const [job, setJob] = useState(null);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchJob() {
      const res = await fetch(`http://localhost:3001/jobs/${id}`);
      const data = await res.json();
      setJob(data);
    }

    fetchJob();
  }, []);

  useEffect(() => {
    if (job) {
      setType(job.type || "");
      setTitle(job.role || "");
      setDescription(job.description || "");
      setSalary(job.salary || "");
      setLocation(job.location || "");
      setCompanyName(job.company?.companyName || "");
      setCompanyDescription(job.company?.description || "");
      setContactEmail(job.company?.contactEmail || "");
      setContactPhone(job.company?.contactPhone || "");
    }
  }, [job]);

  //Function to handle the submission of the form after editing
  function handleDetailUpdate(e) {
    e.preventDefault();

    //Function to add the newly created job to server
    async function addToServer(newJob) {
      const res = await fetch(`http://localhost:3001/jobs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newJob),
      });
    }

    //create the new job using the value in the states above
    const newJob = {
      type,
      role: title,
      description,
      salary,
      location,
      company: {
        companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    addToServer(newJob);
    return navigate("/jobs");
  }

  if (!job) return <BounceLoader />;

  return (
    <section>
      <Nav />

      <section className="flex justify-center px-[10%] pb-[20px] min-h-[100vh] pt-[80px] bg-[#86bcf955]">
        <form
          onSubmit={handleDetailUpdate}
          className=" grow max-w-[500px] w-[350px] bg-[white] pb-[20px]  mb-[20px] px-[20px] border-2"
        >
          <h1 className="text-center pt-[20px] font-bold text-[1.3rem] pb-[20px] md:text-[1.9rem]">
            Add Job
          </h1>

          <section>
            <div className="mb-[20px]">
              <label htmlFor="job-type" className="block">
                Job Type
              </label>

              <select
                type="text"
                id="type"
                className="font-[roboto] font-[roboto] border-1 w-[100%] p-[5px]"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <option value="">--Select job type--</option>
                <option value="Full-time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Contract">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-[20px]">
              <label htmlFor="job-title" className="block">
                Job Title
              </label>
              <input
                type="text"
                id="job-title"
                name="job-title"
                className="font-[roboto] w-[100%] p-[5px] border-1"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>

            <div className="mb-[20px]">
              <label htmlFor="Description" className="block">
                Description
              </label>
              <textarea
                name="Description"
                id="Description"
                className="font-[roboto] w-[100%] p-[5px] border-1"
                rows={5}
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>

            <div className="mb-[20px]">
              <label htmlFor="salary" className="w-[100%] block">
                Salary
              </label>

              <select
                name="salary"
                id="salary"
                className="font-[roboto] font-[roboto] border-1 w-[100%] p-[5px]"
                value={salary}
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
              >
                <option value="">--Select salary range--</option>
                <option value="Under $50K">Under $50K</option>
                <option value="$50K-$60K">$50K - $60K</option>
                <option value="$60K-$70K">$60K - $70K</option>
                <option value="$70K-$80K">$70K - $80K</option>
                <option value="$80K-$90K">$80K - $90K</option>
                <option value="$90K-$100K">$90K - $100K</option>
                <option value="$100K-$125K">$100K - $125K</option>
                <option value="$125-$150K">$125 - $150K</option>
                <option value="$150-$175K">$150 - $175K</option>
                <option value="$175K-$200K">$175K - $200K</option>
              </select>
            </div>

            <div>
              <label htmlFor="location" className="block">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="font-[roboto] w-[100%] p-[5px] border-1"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </div>
          </section>

          <br />

          <section>
            <h2 className="text-[1.3rem] font-bold mb-[10px]">Company Info</h2>
            <div className="mb-[20px]">
              <label htmlFor="company-name" className="block">
                Company Name
              </label>
              <input
                type="text"
                name="comany-name"
                id="company-name"
                className="font-[roboto] w-[100%] p-[5px] border-1"
                value={companyName}
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
              />
            </div>

            <div className="mb-[20px]">
              <label htmlFor="company-description" className="block">
                Company Description
              </label>

              <textarea
                name="company-description"
                id="company-description"
                className="font-[roboto] w-[100%] p-[5px] border-1"
                rows={5}
                value={companyDescription}
                onChange={(e) => {
                  setCompanyDescription(e.target.value);
                }}
              ></textarea>
            </div>

            <div className="mb-[20px]">
              <label htmlFor="contact-email" className="block">
                Contact Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="contact-email"
                className="font-[roboto] w-[100%] p-[5px] border-1"
                value={contactEmail}
                onChange={(e) => {
                  setContactEmail(e.target.value);
                }}
              />
            </div>

            <div className="mb-[20px]">
              <label htmlFor="contact-phone" className="block">
                Contact Phone
              </label>
              <input
                type="tel"
                id="contact-phone"
                name="contact-name"
                className="font-[roboto] w-[100%] p-[5px] border-1"
                value={contactPhone}
                onChange={(e) => {
                  setContactPhone(e.target.value);
                }}
              />
            </div>

            <div>
              <button className="bg-[blue] w-[100%] rounded-xl py-[5px] text-[white] hover:text-[#ffffff8d] cursor-pointer">
                Update Details
              </button>
            </div>
          </section>
        </form>
      </section>
    </section>
  );
}
