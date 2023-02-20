import React from "react";
import { useInView } from "react-intersection-observer";

const Navbar = () => {
  const { ref: ref2, inView: inView1 } = useInView({ triggerOnce: true });

  return (
    <nav
      style={{ animationDelay: ".6s" }}
      className={`${
        inView1 && "fade-up"
      } absolute right-0 h-24 text-end px-8 md:px-0 py-8 z-[100]`}
    >
      <ul
        ref={ref2}
        className="space-y-2 lg:space-y-0 lg:space-x-7 text-MyWhite tracking-wider lg:flex items-center justify-center"
      >
        <li>
          <a
            className="border-r-2 lg:border-none lg:pr-0 pr-2 hover:text-MyYellow hover:border-MyYellow"
            href="/portfolio/#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="border-r-2 lg:border-none lg:pr-0 pr-2 hover:text-MyYellow hover:border-MyYellow"
            href="/portfolio/#webprojects"
          >
            Web Projects
          </a>
        </li>
        <li>
          <a
            className="border-r-2 lg:border-none lg:pr-0 pr-2 hover:text-MyYellow hover:border-MyYellow"
            href="/portfolio/#contacts"
          >
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
