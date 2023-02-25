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
          I’m Renzo Arceo. I’m passionate about web development and design. I
          aim to create websites that people can interact with and love.
        </p>
        <p>
          Art and technology have been interests of mine, and I found the
          combination of the two in creating websites. I also do other arty
          stuff, such as graphic designs and digital artwork, but that's another
          story. If you ever need my service, don't hesitate to get in touch
          with me.
        </p>
      </div>
    </section>
  );
};

export default About;
