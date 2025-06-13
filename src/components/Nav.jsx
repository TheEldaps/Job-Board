import { useState } from "react";
import { Link } from "react-router-dom";
import NavImg from "../assets/TechNest-01.png";

export default function Nav({ setShowNav, showNav }) {
  const [addBg, setAddBg] = useState("");

  function handleClick() {
    setShowNav((prev) => !prev);
  }

  const NavList = (
    <ul className="flex border-white flex-col text-[1.1rem] gap-[5px] md:w-[1000%] md:flex-row md:justify-evenly ">
      <li onClick={() => setAddBg("Home")}>
        <Link
          className={`block px-[20px]  py-[10px]  hover:bg-[#0000ff78] text-[white] cursor-pointer ${
            addBg === "Jobs" && "bg-[black]"
          }`}
          to="/"
        >
          Home
        </Link>
      </li>

      <li onClick={() => setAddBg("Jobs")}>
        <Link
          className={`block px-[20px] py-[10px] hover:bg-[#0000ff78] text-[white] cursor-pointer ${
            addBg === "Jobs" && "bg-[black]"
          }`}
          to="/jobs"
        >
          Jobs
        </Link>
      </li>

      <li onClick={() => setAddBg("Add job")}>
        <Link
          className={`block px-[20px] py-[10px] hover:bg-[#0000ff78] text-[white] cursor-pointer ${
            addBg === "Jobs" && "bg-[black]"
          }`}
          to="/add_job"
        >
          Add job
        </Link>
      </li>
    </ul>
  );

  return (
    <header>
      <nav className="flex justify-around items-center text-[white] text-[1.3rem] font-[Arial] bg-[#000000e0]  h-[60px] bg-blue ">
        <div className=" flex  items-center min-w-[250px] h-[100%]">
          <img
            src={NavImg}
            alt="Business Logo"
            className="w-[80px] mt-[20px] h-[80px] mr-[10px]"
          />
        </div>

        <div className="md:hidden">
          <button
            onClick={handleClick}
            className="cursor-pointer px-[20px] py-[10px] hover:bg-[blue]"
          >
            {showNav ? "Close" : "Menu"}
          </button>
        </div>

        {/* Desktop Navlist  */}
        <div className="hidden md:flex md:flex-grow md:max-w-[50%]">
          {NavList}
        </div>
      </nav>

      {/* mobile view navlist */}
      <div className=" md:hidden bg-[black] "> {showNav && NavList} </div>
    </header>
  );
}
