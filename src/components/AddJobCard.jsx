import { Link } from "react-router-dom";

export default function AddJobCard({
  title,
  bgCol,
  subtitle,
  btnTitle,
  btnBg,
  link,
}) {
  return (
    <div
      className={` bg-${bgCol} py-[20px] px-[20px] rounded-2xl shadow-[4px_4px_5px_rgba(0,0,0,0.1)] mb-[20px] max-w-[500px] md:min-w-auto grow-1`}
    >
      <h2 className="text-[1.3rem] font-bold mb-[5px]">{title}</h2>
      <p className="mb-[10px]">{subtitle}</p>

      <Link
        to={link}
        className={`bg-${btnBg} rounded text-[white] px-[20px] py-[5px] cursor-pointer hover:text-[#ffffff81]`}
      >
        {btnTitle}
      </Link>
    </div>
  );
}
