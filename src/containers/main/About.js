import React from "react";
import { useInView } from "react-intersection-observer";
import Coding from "../../components/Coding";
import diamondCorner from "../../assets/diamond-corner.svg";

const About = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });

  return (
    <section
      id="about"
      className="relative space-y-10 flex flex-col justify-center items-center "
    >
      <div ref={ref1} className={`${inView1 && "fade-up"} lg:hidden`}>
        <Coding />
      </div>
      <img
        className="w-full max-w-[200px] absolute -z-10 right-0 top-20"
        src={diamondCorner}
        alt="diamond-corner"
      ></img>
      <div
        ref={ref2}
        className={`space-y-7 self-start  ${inView2 && "fade-up"}`}
      >
        <h2>About me</h2>
        <p>
          I’m Renzo Arceo, and
          <b> I’m passionate in web development and design</b>. I aim to create
          websites that people can interact and love.
        </p>
        <p>
          Art and technology has been an interest of mine since I was growing up
          and I found the combination of two in creating websites. I also do
          other arty stuff such as graphic designs and digital artworks, but
          that's another story. If you ever need my service, I’m open to
          opportunities.
        </p>
      </div>
    </section>
  );
};

export default About;
