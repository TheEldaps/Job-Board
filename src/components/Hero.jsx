import { Typewriter } from "react-simple-typewriter";
import HeroBackground from "./../assets/backgroundPicture.jpg";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url(${HeroBackground})`,
      }}
      className="flex flex-col relative justify-center  px-[20px] h-[50vh] md:h-[95vh] text-center text-[white] bg-cover  "
    >
      <div className="absolute  inset-0 bg-blue-800 opacity-40 "></div>
      <h1 className="text-[2.2rem] pb-[10px] z-10 text-center font-bold mb-[10px] sm:text-[3rem] md:text-[5rem]">
        <span>
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
