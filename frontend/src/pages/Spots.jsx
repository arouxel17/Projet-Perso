import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import apiConnexion from "@services/apiConnexion";
import NavMini from "@components/NavMini";
import NavComputer from "@components/NavComputer";
import Footer from "@components/FooterComputer";
import Card from "@components/Card";
import logo from "../assets/wave2.png";

function Spots() {
  const [spots, setSpots] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [difficulty, setDifficulty] = useState(searchParams.get("difficulte"));
  const handleCategory = (dif) => {
    if (dif) {
      setSearchParams({ difficulte: dif });
    } else {
      setSearchParams();
    }
    setDifficulty(dif);
    setShowMenu(false);
  };

  const fullSpot = () => {
    apiConnexion
      .get("/spots")
      .then((data) => {
        setSpots(data.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fullSpot();
    setDifficulty(searchParams.get("difficulte"));
  }, [searchParams]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col text-black">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wave - Tous les spots 🌊 </title>
        <meta name="description" content="Page d'accueil Wave 🌊" />
        <link rel="icon" type="image/png" href={logo} />
      </Helmet>
      <div className="ml-4 md:ml-36">
        <NavMini />
      </div>
      <div className="flex flex-row justify-center lg:invisible">
        <img src={logo} className="w-32 mr-20 md:w-44 md:mr-60" alt="logo2" />
        <div className="flex flex-row items-center pr-6">
          <button
            type="button"
            className="flex flex-row bg-secondary text-black font-bold text-2xl md:text-3xl items-center px-6 py-3 rounded-xl border-b-4 hover:scale-125 ml-20"
            onClick={handleLogout}
          >
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 52 52"
              enableBackground="new 0 0 52 52"
            >
              <path
                d="M21,48.5v-3c0-0.8-0.7-1.5-1.5-1.5h-10C8.7,44,8,43.3,8,42.5v-33C8,8.7,8.7,8,9.5,8h10
                C20.3,8,21,7.3,21,6.5v-3C21,2.7,20.3,2,19.5,2H6C3.8,2,2,3.8,2,6v40c0,2.2,1.8,4,4,4h13.5C20.3,50,21,49.3,21,48.5z"
              />
              <path
                d="M49.6,27c0.6-0.6,0.6-1.5,0-2.1L36.1,11.4c-0.6-0.6-1.5-0.6-2.1,0l-2.1,2.1c-0.6,0.6-0.6,1.5,0,2.1l5.6,5.6
                c0.6,0.6,0.2,1.7-0.7,1.7H15.5c-0.8,0-1.5,0.6-1.5,1.4v3c0,0.8,0.7,1.6,1.5,1.6h21.2c0.9,0,1.3,1.1,0.7,1.7l-5.6,5.6
                c-0.6,0.6-0.6,1.5,0,2.1l2.1,2.1c0.6,0.6,1.5,0.6,2.1,0L49.6,27z"
              />
            </svg>
          </button>
        </div>
      </div>
      <NavComputer />
      <div className="flex flex-row justify-between items-center mx-10 mb-6 md:mx-10 lg:mt-10 lg:mx-10">
        <button
          type="button"
          className="text-xl md:text-3xl font-bold hover:scale-125"
          onClick={() => handleCategory("")}
        >
          Tous les spots
        </button>
        <div className="text-right">
          <div className="flex flex-row items-center hover:scale-125">
            <button
              type="button"
              onClick={() => setShowMenu(!showMenu)}
              className="text-xl md:text-3xl font-bold flex flex-row items-center"
            >
              Tri
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-7 ml-2 md:w-9 md:h-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
              </svg>
            </button>
          </div>
          {showMenu && (
            <div className="bg-secondary rounded-xl p-6 pl-10 flex flex-col shadow-2xl absolute right-8 mt-2 md:p-20 md:text-2xl">
              <button
                type="button"
                className="my-3 hover:scale-125 font-bold hover:text-primary text-right"
                onClick={() => handleCategory("Debutant")}
              >
                Débutant
              </button>
              <button
                type="button"
                className="my-3 md:my-10 hover:scale-125 font-bold hover:text-primary text-right"
                onClick={() => handleCategory("Intermediaire")}
              >
                Intermédiaire
              </button>
              <button
                type="button"
                className="my-3 hover:scale-125 font-bold hover:text-primary text-right"
                onClick={() => handleCategory("Expert")}
              >
                Expert
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-24">
        {spots &&
          spots
            .filter((spot) => spot.difficulte === difficulty || !difficulty)
            .map((spot) => (
              <Link to={`/spots/${spot.id}`}>
                <Card key={spot.id} spot={spot} />
              </Link>
            ))}
      </div>
      <Footer />
    </div>
  );
}

export default Spots;
