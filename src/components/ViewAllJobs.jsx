import { Link } from "react-router-dom";

export default function ViewAllJobs() {
  return (
    <div className="flex justify-center items-center h-[100px] bg-[white] py-[30px]">
      <Link
        to="/jobs"
        className="bg-[black] w-[80%] max-w-[500px] text-center text-[1rem] py-[10px]  px-[20px] rounded-lg text-[#fff] font-bold hover:text-[#ffffffb0] cursor-pointer"
      >
        View All Jobs
      </Link>
    </div>
  );
}
