import React from "react";
import { Link } from "react-router-dom";
import "../back.css";
import "../light.css"
const HomeOpen = () => {
  return (
    <>
      <div className="container mx-auto h-5/6 flex flex-col justify-center items-center gap-8 px-2">
        {/*<h1 className="font-display sm:text-9xl text-6xl  text-center tracking-wider heading ">
          BreakOut 2.0*/}
          <div className="group">
          <div className="xbox" data-char="B">
            B<div className="inside">B</div>
          </div>
          <div className="xbox" data-char="R">
            R<div className="inside">R</div>
          </div>
          <div className="xbox" data-char="E">
            E<div className="inside">E</div>
          </div>
          <div className="xbox" data-char="A">
            A<div className="inside">A</div>
          </div>
          <div className="xbox" data-char="K">
            K<div className="inside">K</div>
          </div>
          <div className="xbox" data-char="O">
            O<div className="inside">O</div>
          </div>
          <div className="xbox" data-char="U">
            U<div className="inside">U</div>
          </div>
          <div className="xbox" data-char="T">
            T<div className="inside">T</div>
          </div>
          </div>
        
        
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <HomeOpen />
    </>
  );
};

export default Home;
