import React from "react";
import { useInView } from "react-intersection-observer";
import verticalLines from "../../assets/ver-lines.svg";

const Technologies = () => {
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true });

  return (
    <section
      ref={ref5}
      className={`${inView5 && "fade-up"} relative text-right space-y-7`}
    >
      <h2>Technologies</h2>
      <div className="space-y-1 flex flex-col">
        <h4 className="text-base">Main Stack</h4>
        <p className="w-fit text-end self-end">
          MongoDB, Express, React, Node (MERN)
        </p>
      </div>
      <div className="space-y-1 flex flex-col">
        <h4 className="text-base">Other Techs</h4>
        <p className="w-fit self-end">
          JavaScript, HTML, CSS, Tailwind, Bootstrap, Python, Java, Figma, Adobe
          XD, GitHub, Postman
        </p>
      </div>
      <img
        className="w-full max-w-[20px] absolute -z-10 right-0 top-24"
        src={verticalLines}
        alt="coding"
      ></img>
      <img
        className="w-full max-w-[20px] absolute -z-10 left-0 bottom-10 rotate-180"
        src={verticalLines}
        alt="coding"
      ></img>
    </section>
  );
};

export default Technologies;
