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
          desc="A small e-commerce web application for customized clothing prints. Features include authentication, responsiveness, creating and editing of permanent delivery address, and tracking of orders."
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
          desc="A real-time messaging web application. Features include authentication, adding contacts, and deleting conversations."
          githubLink="https://github.com/renzo-1/MessageHub"
          tags={["Full-Stack", "Web Design"]}
          vid={mhVid}
          tools="MongoDB, Express, Node, React, Tailwind, Figma, PassportJS, Socket IO"
          feats={[messaging, mhSignIn, mhSignUp]}
        />
        <Project
          cover={tohLanding}
          title="Tower of Hanoi"
          desc="Tower of hanoi game which is able to record number of moves and adjust number of discs."
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
