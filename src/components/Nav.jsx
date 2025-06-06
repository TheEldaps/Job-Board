import { useState } from "react";
import { Link } from "react-router-dom";
import NavImg from "../images/react-logo.png";

export default function Nav() {
  const [showNav, setShowNav] = useState(false);
  const [addBg, setAddBg] = useState("");

  function handleClick() {
    setShowNav((prev) => !prev);
  }

  const NavList = (
    <ul className="flex flex-col  md:w-[1000%] md:flex-row md:justify-evenly ">
      <li
        className={`px-[10px] py-[5px] hover:bg-black hover:text-[white] cursor-pointer ${
          addBg === "Home" && "bg-[black]"
        }`}
        onClick={() => setAddBg("Home")}
      >
        <Link to="/">Home</Link>
      </li>

      <li
        className={`px-[10px] py-[5px] hover:bg-black hover:text-[white] cursor-pointer ${
          addBg === "Jobs" && "bg-[black]"
        }`}
        onClick={() => setAddBg("Jobs")}
      >
        <Link to="/jobs">Jobs</Link>
      </li>

      <li
        className={`px-[10px] py-[5px] hover:bg-black hover:text-[white] cursor-pointer ${
          addBg === "Add job" && "bg-[black]"
        }`}
        onClick={() => setAddBg("Add job")}
      >
        <Link to="/add_job">Add job</Link>
      </li>
    </ul>
  );

  return (
    <header className="border-b-2 border-b-white">
      <nav className="flex justify-around items-center text-[white] text-[1.3rem] font-[Arial] h-[50px] bg-[#1717ba] ">
        <div className=" flex items-center min-w-[250px]">
          <img src={NavImg} alt="" className="w-[50px] mr-[10px]" />
          <span>React Jobs</span>
        </div>

        <div className="md:hidden">
          <button onClick={handleClick} className="cursor-pointer">
            {showNav ? "Close" : "Menu"}
          </button>
        </div>

        {/* Desktop Navlist */}
        <div className="hidden md:flex md:flex-grow md:max-w-[50%]">
          {" "}
          {NavList}{" "}
        </div>
      </nav>

      {/* mobile view navlist */}
      <div className="md:hidden"> {showNav && NavList} </div>
    </header>
  );
}
