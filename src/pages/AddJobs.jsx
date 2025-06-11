import Nav from "../components/Nav";
export default function AddJobs() {
  return (
    <section className="">
      <Nav />
      <section className="flex justify-center pb-[20px] min-h-[100vh] pt-[80px] bg-[#86bcf955]">
        <form className="w-[350px] bg-[white] pb-[20px] mb-[20px] px-[20px] border-2">
          <h1 className="text-center pt-[20px] font-bold text-[1.3rem] pb-[20px]">
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
              >
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
              ></textarea>
            </div>

            <div className="mb-[20px]">
              <label htmlFor="salary" className="block w-[100%]">
                Salary
              </label>
              <select name="salary" id="salary" className="border-1">
                <option value="Under $50K">Under $50K</option>
                <option value="$50K-$60K">$50K -$60K</option>
                <option value="$60K-$70K">$60K-$70K</option>
                <option value="$70K-$80K">$70K-$80K</option>
                <option value="$80K-$90K">$80K-$90K</option>
                <option value="$90K-$100K">$90K-$100K</option>
                <option value="$100K-$125K">$100K-$110K</option>
                <option value="$125-$150K">$110-$120K</option>
                <option value="$150-$175K">$120-$130K</option>
                <option value="175K-200K">$175K-$$200K</option>
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
                className="w-[100%] p-[5px] border-1"
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
