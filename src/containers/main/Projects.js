import React from "react";
import Project from "../../components/Project";
import {
  homePrint,
  signInPrint,
  signUpPrint,
  orderPrint,
  deliveryPrint,
  printCover,
  printVid,
  available,
} from "../../assets/printeerest";

import {
  mhCover,
  messaging,
  mhSignIn,
  mhSignUp,
  mhVid,
} from "../../assets/messagehub";

import { tohLanding, tohMain, tohVid, tohWinDisplay } from "../../assets/TOH";

const Projects = () => {
  return (
    <section id="webprojects" className="space-y-7">
      <h2>Projects</h2>
      <div className="space-y-16">
        <Project
          cover={printCover}
          title="Printeerest"
          desc="An e-commerce web application designed for personalized clothing prints and is equipped with various features, such as secure authentication, responsiveness for optimal user experience, the ability to create and modify permanent delivery addresses, and a convenient order tracking system."
          tags={["Full-Stack", "Web Design"]}
          githubLink="#"
          tools="MongoDB, Express, Node, React, Tailwind, Figma, PassportJS, Cloudinary"
          vid={printVid}
          feats={[
            homePrint,
            signInPrint,
            signUpPrint,
            available,
            orderPrint,
            deliveryPrint,
          ]}
        />
        <Project
          cover={mhCover}
          title="MessageHub"
          desc="A web application for real-time messaging that comes with several features, such as authentication to ensure secure access, the ability to add contacts, and the option to delete conversations."
          githubLink="https://github.com/renzo-1/MessageHub"
          tags={["Full-Stack", "Web Design"]}
          vid={mhVid}
          tools="MongoDB, Express, Node, React, Tailwind, Figma, PassportJS, Socket IO"
          feats={[messaging, mhSignIn, mhSignUp]}
        />
        <Project
          cover={tohLanding}
          title="Tower of Hanoi"
          desc="The goal of the web-based Tower of Hanoi game is to arrange the discs in a stacked formation with the largest disc at the bottom and the smallest disc at the top. Achieving the objective of the game involves minimizing the number of moves taken to achieve the final form."
          githubLink="https://github.com/renzo-1/tower-of-hanoi"
          live="https://renzo-1.github.io/tower-of-hanoi/"
          tags={["Front-End", "Web Design"]}
          vid={tohVid}
          tools="React, CSS, React DND"
          feats={[tohLanding, tohMain, tohWinDisplay]}
        />
      </div>
    </section>
  );
};

export default Projects;
