import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import apiConnexion from "@services/apiConnexion";
import NavMini from "@components/NavMini";
import NavComputer from "@components/NavComputer";
import Footer from "@components/FooterComputer";
import logo from "../assets/wave2.png";
import avatar from "../assets/avatar.png";

function OneSpot() {
  const { id } = useParams();
  const [spots, setSpots] = useState([]);

  const spotById = () => {
    apiConnexion
      .get(`/spots/${id}`)
      .then((data) => {
        setSpots(data.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    spotById();
  }, [id]);

  return (
    <div className="flex flex-col mb-14">
      <div className="ml-4 md:ml-36">
        <NavMini />
      </div>
      <div className="flex flex-row justify-center lg:invisible">
        <img src={logo} className="w-32 mr-20 md:w-44 md:mr-60" alt="logo2" />
        <div className="flex flex-row items-center pr-6">
          <h1 className="mr-4 md:text-3xl">Hello Julien !</h1>
          <img src={avatar} className="w-12 h-12" alt="avatar" />
        </div>
      </div>
      <NavComputer />
      <div className="flex flex-col lg:flex-row lg:mt-10">
        <Link to="/spots">
          <button
            type="button"
            className="flex items-center ml-4 border-2 border-secondary hover:bg-secondary rounded-xl p-2 md:ml-16"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </button>
        </Link>
        <div className="flex flex-col items-center justify-center text-xl mb-5 lg:m-0 lg:pb-60">
          <div className=" mb-5 md:mb-10 md:text-3xl">{spots.nom} 🌞</div>
          <img
            src={spots.image}
            alt="test"
            className="rounded-2xl w-11/12 md:w-8/12 lg:w-8/12 shadow-xl"
          />
        </div>
        <div className="mb-32 md:mx-32 text-2xl lg:m-0 lg:w-11/12 lg:pr-20">
          <div className="flex flex-col justify-between mx-6 mb-10 border-b-2 border-secondary">
            <div className="flex flex-col mb-6">
              <h2 className="mb-6 font-bold">Aperçu</h2>
              <div className="my-3">Nom du spot : {spots.nom} 🌊</div>
              <div className="my-3">Lieu : {spots.lieu}</div>
            </div>
            <div className="flex flex-col">
              <h2 className="mb-3 lg:mb-0 lg:mr-6 font-bold">Difficulté</h2>
              <div className="my-3">{spots.difficulte}</div>
            </div>
          </div>
          <div className="mx-6 font-bold ">
            Description
            <div className="my-3 text-justify font-normal">
              {spots.description}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OneSpot;
