import { Typewriter } from "react-simple-typewriter";

export default function Hero({ showNav }) {
  console.log(showNav);
  return (
    <section
      style={{
        backgroundImage: "url('./src/assets/BackgroundPicture.jpg')",
      }}
      className="flex flex-col justify-center  px-[20px] h-[95vh] text-center text-[white] "
    >
      <div
        className={`absolute  h-[95vh] md:top-[60px] ${
          showNav ? "top-[210px]" : "top-[60px]"
        } inset-0 bg-blue-800 opacity-40`}
      ></div>
      <h1 className="text-[2.2rem] pb-[10px] z-10 text-center font-bold mb-[10px] sm:text-[3rem] md:text-[5rem]">
        <span>
          {" "}
          Become a <br />
        </span>

        <span>
          <Typewriter
            words={[
              " Frontend Developer.",
              " Backend Developer.",
              " Software Tester.",
              " UI/UX Designer.",
            ]}
            loop={0} // 0 = infinite loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>
      <p className="text-[1.3rem] md:text-[1.8rem] z-10">
        Find a job that fits your skills and needs
      </p>
    </section>
  );
}
