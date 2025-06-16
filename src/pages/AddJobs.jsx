import Nav from "../components/Nav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddJobs() {
  const [type, setType] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [salary, setSalary] = useState();
  const [location, setLocation] = useState();
  const [companyName, setCompanyName] = useState();
  const [companyDescription, setCompanyDescription] = useState();
  const [contactEmail, setContactEmail] = useState();
  const [contactPhone, setContactPhone] = useState();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    //Function to add the newly created job to server
    async function addToServer(newJob) {
      const res = await fetch(
        "https://job-board-backend-805t.onrender.com/jobs",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newJob),
        }
      );
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

  return (
    <section className="">
      <Nav />
      <section className="flex justify-center px-[10%] pb-[20px] min-h-[100vh] pt-[80px] bg-[#86bcf955]">
        <form
          onSubmit={handleSubmit}
          className=" grow max-w-[500px] w-[350px] bg-[#f2f2ec] pb-[20px] mb-[20px] px-[20px] border-2"
        >
          <h1 className="text-center text-[#4a64ce] pt-[20px] font-bold text-[1.3rem] pb-[20px] md:text-[1.9rem]">
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
                className="border-1 w-[100%] p-[5px]"
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
                className="w-[100%] p-[5px] border-1"
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
                className="w-[100%] p-[5px] border-1"
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
                className="border-1 w-[100%] p-[5px]"
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
                className="w-[100%] p-[5px] border-1"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </div>
          </section>

          <br />

          <section>
            <h2 className="text-[1.3rem] text-[#4a64ce] font-bold mb-[10px]">
              Company Info
            </h2>
            <div className="mb-[20px]">
              <label htmlFor="company-name" className="block">
                Company Name
              </label>
              <input
                type="text"
                name="comany-name"
                id="company-name"
                className="w-[100%] p-[5px] border-1"
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
                className="w-[100%] p-[5px] border-1"
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
                className="w-[100%] p-[5px] border-1"
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
                className="w-[100%] p-[5px] border-1"
                value={contactPhone}
                onChange={(e) => {
                  setContactPhone(e.target.value);
                }}
              />
            </div>

            <div>
              <button className="bg-[blue] w-[100%] rounded-xl py-[5px] text-[white] hover:text-[#ffffff8d] cursor-pointer">
                Add Job
              </button>
            </div>
          </section>
        </form>
      </section>
    </section>
  );
}
