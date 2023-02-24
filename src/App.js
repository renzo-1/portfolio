import React from "react";
import Navbar from "./containers/Navbar";
import Footer from "./containers/Footer";
import { Hero, About, Technologies, Projects } from "./containers/main";

function App() {
  return (
    <>
      <main className="container mx-auto relative">
        <div className="">
          <Navbar />
          <div className="space-y-32 lg:space-y-44 px-8 lg:px-0">
            <Hero />
            <About />
            <Technologies />
            <Projects />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
