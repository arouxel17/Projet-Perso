import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ModalConnexion from "@components/ModalConnexion";
import Logo from "@assets/wave.png";
import VideoBack from "@assets/bgsurf.mp4";
import logo from "../assets/wave2.png";

import "@pages/LogPage.css";

function LogPage() {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wave - Se connecter 🌊 </title>
        <meta name="description" content="Page de connexion 🌊" />
        <link rel="icon" type="image/png" href={logo} />
      </Helmet>
      <video src={VideoBack} autoPlay loop muted id="video" type="video/mp4" />
      <div className="flex flex-col items-center justify-around">
        <img src={Logo} alt="" className="lg:w-80" />
        <h1 className="flex flex-col font-bold text-secondary text-xl md:text-3xl text-center mb-32 md:mb-44 lg:mb-60">
          " Vivre pour surfer, surfer pour vivre"<span>Mike Doyle</span>
        </h1>
        <button
          type="button"
          className="flex flex-row bg-secondary text-black font-bold text-2xl md:text-3xl items-center px-6 py-3 rounded-xl border-b-4 hover:scale-125"
          onClick={() => setDisplayModal(true)}
        >
          Se connecter
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            className="w-6 h-6 ml-6"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {displayModal && <ModalConnexion />}
      </div>
    </div>
  );
}

export default LogPage;
