import { Link } from "react-router-dom";
import NavImg from "../assets/TechNestLogoV1.png";

export default function Nav({
  setShowNav,
  showNav,

  jobs = false,
  addJob = false,
}) {
  function handleClick() {
    setShowNav((prev) => !prev);
  }

  const NavList = (
    <ul className="flex border-white flex-col text-[1.1rem] gap-[5px] md:w-[1000%] md:flex-row md:justify-evenly ">
      <li>
        <Link
          className={`block px-[20px]  py-[10px]  hover:bg-[#0000ff78] text-[white] cursor-pointer`}
          to="/"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          className={`block px-[20px] py-[10px] hover:bg-[#0000ff78] text-[white] cursor-pointer ${
            jobs === true && "bg-[#0000ff78]"
          }`}
          to="/jobs"
        >
          Jobs
        </Link>
      </li>

      <li>
        <Link
          className={`block px-[20px] py-[10px] hover:bg-[#0000ff78] text-[white] cursor-pointer ${
            addJob === true && "bg-[#0000ff78]"
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
        <Link to="/" className=" flex  items-center min-w-[250px] h-[100%]">
          <img
            src={NavImg}
            alt="Business Logo"
            className="block w-[60px]  mr-[10px]"
          />
          <h1 className="font-[Nelda]">TechNest</h1>
        </Link>

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
