import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center h-[200px] md:h-[95vh] text-center bg-[#1717ba] text-[white] ">
      <h1 className="text-[2rem] text-center font-bold mb-[10px] md:text-[5rem]">
        <span> Become a</span>

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
      <p className="md:text-[1.8rem]">
        Find a job that fits your skills and needs
      </p>
    </section>
  );
}
