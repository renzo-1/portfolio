import React from "react";
import Coding from "../../components/Coding";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });

  return (
    <section className="container mx-auto relative h-screen flex lg:flex-row justify-center items-center overflow-hidden">
      <div className="w-full flex flex-col relative">
        <div ref={ref1} className={`${inView1 && "fade-up"} mb-14 z-20 w-fit`}>
          <h3>Hi, I'm</h3>
          <h1>Renzo</h1>
        </div>

        <div
          style={{ animationDelay: ".2s" }}
          className={`${inView1 && "fade-up"} space-y-20 z-20`}
        >
          <div className="space-y-4">
            <p className="role border rounded-xl border-second p-2 w-fit">
              Full-stack Web Developer
            </p>
            <p className="role border rounded-xl border-second p-2 w-fit">
              Web Designer
            </p>
          </div>
        </div>
        <svg
          className="drop-shadow-md w-full max-w-[300px] lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 rotate-[60deg]"
          viewBox="0 0 215 215"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className={`${inView1 && "circle"}`}
            pathLength="450"
            cx="107.5"
            cy="107.5"
            r="107"
            stroke="#303941"
          />
          <circle
            className={`${inView1 && "circle"}`}
            pathLength="450"
            cx="107.5"
            cy="110.214"
            r="71"
            stroke="#303941"
          />
        </svg>
      </div>
      <div className="relative self-end w-full h-full hidden lg:inline-block ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
            style={{ animationDelay: ".6s" }}
            className={`${inView1 && "fade-up"} w-fit z-50`}
          >
            <Coding />
          </div>
        </div>

        <svg
          className="drop-shadow-md w-full max-w-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10  rotate-[60deg]"
          viewBox="0 0 215 215"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className={`${inView1 && "circle"}`}
            pathLength="450"
            cx="107.5"
            cy="107.5"
            r="107"
            stroke="#303941"
          />
          <circle
            className={`${inView1 && "circle"}`}
            pathLength="450"
            cx="107.5"
            cy="110.214"
            r="71"
            stroke="#303941"
          />
        </svg>
      </div>

      {/* <img
        className=" absolute bottom-0 w-full"
        src="assets/bars-separator.svg"
        alt="bars separator"
      ></img> */}
      <div className="self-center absolute left-1/2 top-[90%] transform -translate-x-1/2 -translate-y-1/2">
        <div>
          <a
            href="/#about"
            style={{ animationDelay: ".4s" }}
            className={`${
              inView1 && "fade-up"
            } border rounded-full h-10 w-10 border-yText animate-bounce grid place-items-center`}
          >
            <img
              src="/assets/arrow-down.svg"
              alt="arrow down"
              className="w-5 pt-1 fill-current stroke-yellow-400"
            ></img>
          </a>
        </div>
      </div>
      {/* 
      <div className="boxes w-14 md:w-20 lg:w-30 h-14 md:h-20 lg:h-30 absolute border border-second top-[10%] left-20 dilate-onHover circle"></div>
      <div className="boxes w-8 md:w-12 lg:w-24 h-8  md:h-12 lg:h-24 absolute border border-second top-[80%] right-28 dilate-onHover circle"></div> */}
    </section>
  );
};

export default Hero;