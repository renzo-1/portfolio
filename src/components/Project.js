import React, { useState } from "react";
import Modal from "./Modal";
import { useInView } from "react-intersection-observer";

const Project = ({
  cover,
  title,
  desc,
  tools,
  vid,
  feats,
  tags,
  githubLink,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });

  return (
    <div
      className={`border-b pb-4 lg:pb-10 ${inView1 && "fade-up"} `}
      ref={ref1}
    >
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          title={title}
          desc={desc}
          tools={tools}
          vid={vid}
          feats={feats}
          githubLink={githubLink}
        />
      )}
      <div className="space-y-7 lg:flex lg:space-x-20">
        <img
          src={cover}
          alt="project cover"
          className={`w-full h-[200px] lg:h-[200px] lg:w-[700px] rounded-lg object-cover drop-shadow-lg cursor-pointer dilate-onHover `}
          onClick={(e) => setOpenModal(true)}
        ></img>
        <div className="space-y-3">
          <div className="flex items-center space-x-5">
            <h4 className="text-xl font-bold tracking-wider text-MyWhite inline-block">
              {title}
            </h4>
            <a href={githubLink} target="_blank" rel="noreferrer">
              <svg
                className="w-7 text-white fill-current inline-block"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          </div>
          <p>{desc} </p>
          <div className="flex space-x-4 pt-5">
            {tags.map((tag) => (
              <h4
                key={tag}
                className="text-base border border-second w-fit p-2 rounded-lg"
              >
                {tag}
              </h4>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
