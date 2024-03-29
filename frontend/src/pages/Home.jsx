import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import apiConnexion from "@services/apiConnexion";
import NavMini from "@components/NavMini";
import NavComputer from "@components/NavComputer";
import Footer from "@components/FooterComputer";
import CardDifficulty from "@components/CardDifficulty";
import Card from "@components/Card";
import logo from "../assets/wave2.png";

export default function Home() {
  const [dataSpot, setDataSpot] = useState([]);
  const [difficulty, setDifficulty] = useState([]);
  const [randomData, setRandomData] = useState([]);
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const getInput = () => {
    apiConnexion
      .get("/homedata")
      .then((data) => {
        setDataSpot(data.data);
      })
      .catch((err) => console.error(err));
  };

  const allDifficulty = () => {
    apiConnexion
      .get("/difficulty")
      .then((data) => {
        setDifficulty(data.data);
      })
      .catch((err) => console.error(err));
  };

  const randomSpot = () => {
    apiConnexion
      .get("/spots/rand")
      .then((data) => {
        setRandomData(data.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    allDifficulty();
    randomSpot();
    getInput();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col mb-32 md:mb-36">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wave - Accueil 🌊 </title>
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
      <div className="flex flex-col mx-6 lg:mt-10 md:mx-24">
        <h1 className="mr-12 mb-3 text-xl md:text-2xl lg:text-3xl lg:text-center md:mx-20">
          Trouvez les spots de surf où que vous soyez en Charente-Maritime 🌞
        </h1>
        <div className="my-3 md:mx-32 lg:mx-60 lg:my-12">
          <div className="flex flex-col w-full mb-4">
            <div className="flex flex-row">
              <input
                type="search"
                className="w-full px-3 py-1.5 text-base md:text-2xl font-normal text-gray-700 bg-white bg-clip-padding drop-shadow-xl border border-solid border-gray-300 rounded-xl focus:text-gray-700 focus:border-primary focus:outline-none"
                placeholder="Entrez votre spot"
                value={value}
                onChange={onChange}
              />

              <span
                className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
                id="basic-addon2"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  className="w-4 md:w-8"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  />
                </svg>
              </span>
            </div>
            <div className="flex flex-col w-10/12 md:w-11/12 md:text-2xl shadow-2xl rounded-2xl">
              {dataSpot &&
                dataSpot
                  .filter((spot) => {
                    const searchTerm = value.toLowerCase();
                    const fullName = spot.nom.toLowerCase();
                    return (
                      searchTerm &&
                      fullName.startsWith(searchTerm) &&
                      fullName !== searchTerm
                    );
                  })
                  .map((spot) => (
                    <Link to={`/spots/${spot.id}`}>
                      <div className="flex flex-row m-3 items-center border-b-2 border-secondary pb-4">
                        <img
                          src={spot.image}
                          alt=""
                          className="rounded w-14 h-14 mr-7"
                        />
                        <div className="text-xl md:text-2xl">{spot.nom}</div>
                      </div>
                    </Link>
                  ))}
            </div>
          </div>
        </div>
        <div className="mb-14 md:text-2xl md:mx-20 lg:mx-24 md:mb-20 md:mb-32 ">
          <h2 className="font-bold mb-5">Difficultées</h2>
          <div className="flex flex-row justify-center ">
            {difficulty &&
              difficulty.map((difficulties) => (
                <Link to={`/spots?difficulte=${difficulties.difficulte}`}>
                  <CardDifficulty
                    key={difficulties.id}
                    difficulties={difficulties}
                  />
                </Link>
              ))}
          </div>
        </div>
        <div className="-m-6 md:-m-14 md:mb-4  md:mb-0">
          <h2 className="font-bold mb-5 mx-6 md:text-2xl md:mx-28">
            Venez découvrir nos spots 🌊
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {randomData &&
              randomData.map((spot) => (
                <Link to={`/spots/${spot.id}`}>
                  <Card key={spot.id} spot={spot} />
                </Link>
              ))}
          </div>
        </div>
        <div />
      </div>
      <Footer />
    </div>
  );
}
