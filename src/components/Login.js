
import React from 'react'
import { auth, provider, signInWithPopup } from '../firebase'
import  firebase from "firebase/compat/app";
import '../light.css';
import "../back.css";
const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider)
  }

  return (
    <div className="container mx-auto h-5/6 flex flex-col justify-center items-center gap-8 px-2">
    {/*<h1 className="font-display sm:text-9xl text-6xl  text-center tracking-wider heading ">
      BreakOut 2.0*/}
      <div className="group" >
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
    
    <div className="starwars-demo">
      <h4 className="byline" id="byline">
        <p className="max-w-sm md:max-w-xl sm:text-lg  text-sm text-center font-mono text-terminalgreen">
          Synchronicity has taken place. It's your only chance to break
          free. But remember, only one can make it through. Gear up for this
          escape room event with a subtle twist.
        </p>
      </h4>
    </div>
  
      <br/>
      <button
        onClick={signIn}
        className="text-xl font-mono font-bold px-8 py-4 border border-white border-opacity-50 signInBtn hero" id="button"
      >
        Sign In
      </button>
    </div>
  )
}
export default Login
