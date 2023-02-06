import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import apiConnexion from "@services/apiConnexion";
import NavMini from "@components/NavMini";
import NavComputer from "@components/NavComputer";
import Footer from "@components/FooterComputer";
import logo from "../assets/wave2.png";

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
    <div className="flex flex-col">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wave - Description du spot 🌊 </title>
        <meta name="description" content="Un seul spot 🌊" />
        <link rel="icon" type="image/png" href={logo} />
      </Helmet>
      <div className="ml-4 md:ml-36">
        <NavMini />
      </div>
      <NavComputer />
      <div className="flex flex-col lg:flex-row lg:mt-48">
        <Link to="/spots">
          <button
            type="button"
            className="flex items-center ml-6 mt-4 border-2 border-primary bg-secondary hover:scale-125 rounded-xl p-2 md:ml-16 absolute md:w-14 md:h-13"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-5 md:w-9 md:h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </button>
        </Link>
        <div className="flex flex-col-reverse lg:flex-col items-center justify-center text-xl mb-5">
          <div className="mt-5 mb-5 md:mb-10 md:text-3xl">{spots.nom} 🌞</div>
          <img
            src={spots.image}
            alt="test"
            className="lg:rounded-2xl w-full lg:w-8/12 shadow-xl mb-6"
          />
        </div>
        <div className="mb-14 md:mx-20 text-xl md:text-2xl lg:m-0 lg:w-11/12 lg:pr-20 lg:mb-0 lg:mt-10">
          <div className="flex flex-col justify-between mx-6 border-b-4 border-secondary">
            <div className="flex flex-col mb-6">
              <h2 className="font-bold">Aperçu</h2>
              <div className="my-3">Nom du spot : {spots.nom} 🌊</div>
              <div className="my-3">Lieu : {spots.lieu}</div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <h2 className="lg:mb-0 lg:mr-6 font-bold">Difficulté</h2>
                <div className="my-3">{spots.difficulte}</div>
              </div>
              <div className="flex flex-col text-right">
                <h2 className="lg:mb-0 lg:mr-6 font-bold">
                  Conditions moyennes
                </h2>
                <div className="mt-3">Vagues : {spots.vagues} 🌊</div>
                <div className="my-3">Houle : {spots.houles} 🔵</div>
                <div className="my-1 mb-6">Période : {spots.periodes} 🧭</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-6 font-bold mb-32 md:mx-20 text-xl md:text-2xl lg:mt-6 lg:mx-60">
        Description
        <div className="my-3 text-justify font-normal">{spots.description}</div>
      </div>
      <Footer />
    </div>
  );
}

export default OneSpot;
