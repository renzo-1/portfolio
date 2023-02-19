import React from "react";
import Project from "../../components/Project";

const Projects = () => {
  return (
    <section id="webprojects" className="space-y-7">
      <h2>Projects</h2>
      <div className="space-y-16">
        <Project
          cover={"bg-printeerest_cover"}
          title="Printeerest"
          desc="A small e-commerce web application for customized clothing prints."
          tags={["Full-stack", "Web designer"]}
          tools="Tailwind, Figma, PassportJS, Cloudinary"
          vid="assets/printeerest/printeerest-vid1.mp4"
          feats={[
            "assets/printeerest/home.png",
            "assets/printeerest/sign-in.png",
            "assets/printeerest/sign-up.png",
            "assets/printeerest/order.png",
            "assets/printeerest/delivery-add.png",
          ]}
        />
        <Project
          cover={"bg-messageHub_cover"}
          title="MessageHub"
          desc="A real-time messaging full-stack web application."
          tags={["Full-stack", "Web designer"]}
          vid="assets/messagehub/vid.mp4"
          tools="Tailwind, Figma, PassportJS, Cloudinary"
          feats={[
            "assets/messagehub/sign-in.png",
            "assets/messagehub/sign-up.png",
            "assets/messagehub/messaging.png",
          ]}
        />
      </div>
    </section>
  );
};

export default Projects;
