import React from "react";
import exitButton from "../assets/x-lg.svg";
const Modal = ({
  setOpenModal,
  title,
  desc,
  tools,
  vid,
  feats,
  githubLink,
}) => {
  return (
    <div className="dark-scrollbar-thumb h-screen w-full space-y-10 fixed top-0 left-0 bottom-0 bg-MyWhite flex flex-col items-center p-14 overflow-y-scroll z-[9999]">
      <img
        className="w-7 cursor-pointer "
        src={exitButton}
        alt="exit button"
        onClick={(e) => setOpenModal((prev) => !prev)}
      ></img>
      <div className="flex justify-center items-center flex-col space-y-10 ">
        <video
          autoPlay
          muted
          loop
          className="w-full max-w-[500px] lg:max-w-[1000px] shadow-lg rounded-lg"
        >
          <source src={vid} type="video/mp4" />
        </video>
        <div className="space-y-14">
          <div className="space-y-5">
            <div className="flex items-center space-x-5">
              <h2 className="font-bold tracking-wider inline-block">{title}</h2>
              <a href={githubLink} target="_blank" rel="noreferrer">
                <svg
                  className="w-7 text-black fill-current inline-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </div>
            <p className="text-MyBlack">{desc} </p>
            <p className="text-MyBlack">
              <b className="text-MyBlack">Other tools</b>: {tools}
            </p>
          </div>
          <section className="flex justify-center items-center">
            <div className="space-y-7 ">
              {feats.map((feat) => (
                <img
                  className="w-full max-w-[500px] lg:max-w-[1000px] shadow-lg rounded-lg"
                  src={feat}
                  alt={`${title} features`}
                ></img>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Modal;
