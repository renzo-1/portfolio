import React from "react";

const Footer = () => {
  return (
    <footer
      id="contacts"
      className=" bg-wText px-10 py-14 space-y-5 shadow-[inset_0_8px_5px_-5px_rgba(0,0,0,0.5)] mt-44 lg:mt-60"
    >
      <h3 className="text-bText font-bold text-center">
        Explore new opportunities with me
      </h3>
      <div className="lg:container mx-auto border rounded-lg border-bText flex justify-center items-center flex-col py-7">
        <p className="text-bText">Renzo.Arceo@gmail.com</p>
        <div className="flex space-x-3 mt-4">
          <img src="assets/github.svg" className="w-7" alt="github icon"></img>
          <img src="assets/linkedin.svg" className="w-7" alt="linkedin"></img>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
