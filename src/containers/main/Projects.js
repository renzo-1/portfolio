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
} from "../../assets/printeerest";
import {
  mhCover,
  messaging,
  mhSignIn,
  mhSignUp,
  mhVid,
} from "../../assets/messagehub";
const Projects = () => {
  return (
    <section id="webprojects" className="space-y-7">
      <h2>Projects</h2>
      <div className="space-y-16">
        <Project
          cover={printCover}
          title="Printeerest"
          desc="A small e-commerce web application for customized clothing prints."
          tags={["Full-stack", "Web designer"]}
          githubLink="#"
          tools="Tailwind, Figma, PassportJS, Cloudinary"
          vid={printVid}
          feats={[
            homePrint,
            signInPrint,
            signUpPrint,
            orderPrint,
            deliveryPrint,
          ]}
        />
        <Project
          cover={mhCover}
          title="MessageHub"
          desc="A real-time messaging full-stack web application."
          githubLink="https://github.com/renzo-1/MessageHub"
          tags={["Full-stack", "Web designer"]}
          vid={mhVid}
          tools="Tailwind, Figma, PassportJS, Cloudinary"
          feats={[messaging, mhSignIn, mhSignUp]}
        />
      </div>
    </section>
  );
};

export default Projects;
