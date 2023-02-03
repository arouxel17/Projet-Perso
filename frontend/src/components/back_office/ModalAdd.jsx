import React, { useEffect, useState } from "react";
import apiConnexion from "@services/apiConnexion";

import "@components/back_office/ModalAdd.css";

function ModalAdd({ setDisplayModal }) {
  const [spots, setSpots] = useState([]);
  const [newSpots, setnewSpots] = useState({
    nom: "",
    lieu: "",
    difficulte: "",
    image: "",
    description: "",
    conditions_id: 1,
  });

  const fullSpot = () => {
    apiConnexion
      .get("/spots")
      .then((data) => {
        setSpots(data.data);
      })
      .catch((err) => console.error(err));
  };

  const handleSpot = (place, value) => {
    const newSpot = { ...newSpots };
    newSpot[place] = value;
    setnewSpots(newSpot);
  };

  const addSpot = () => {
    apiConnexion
      .post("/spots", newSpots)
      .then(() => {
        setSpots();
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fullSpot();
    addSpot();
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity">
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex flex-col items-center w-full pt-6 gap-y-7">
          <div className="overflow-hidden rounded-lg bg-white shadow-3xl transition-all max-w-lg mx-5">
            <div className="flex flex-col items-center text-black font-bold p-8 mx-32">
              <button
                type="button"
                className="pr-96 mb-4"
                onClick={() => {
                  setDisplayModal(false);
                }}
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
              <h1 className="text-2xl text-center w-96">
                Création d'un nouveau spot
              </h1>
              <div>
                <div className="group">
                  <input
                    required=""
                    type="text"
                    className="input w-80 my-7"
                    placeholder="Nom"
                    onChange={(e) => handleSpot(e.target.name, e.target.value)}
                  />
                </div>
                <div className="group1">
                  <input
                    required=""
                    type="text"
                    className="input w-80 my-7"
                    placeholder="Lieu"
                    onChange={(e) => handleSpot(e.target.name, e.target.value)}
                  />
                </div>
                <div className="group2">
                  <select
                    required=""
                    className="input w-80 my-7"
                    onChange={(e) => handleSpot(e.target.name, e.target.value)}
                  >
                    <option value="">Selectionnez une difficulté</option>
                    {spots &&
                      spots.map((spot) => (
                        <option value={spot.spots} key={spot.spots}>
                          {spot.difficulte}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="group3">
                  <input
                    required=""
                    type="text"
                    className="input w-80 my-7"
                    placeholder="Image"
                    onChange={(e) => handleSpot(e.target.name, e.target.value)}
                  />
                </div>
                <div className="group4">
                  <textarea
                    required=""
                    type="text"
                    className="input w-80 my-7"
                    placeholder="Description"
                    onChange={(e) => handleSpot(e.target.name, e.target.value)}
                  />
                </div>
                <div className="group5">
                  <select
                    required=""
                    className="input w-80 my-7"
                    onChange={(e) => handleSpot(e.target.name, e.target.value)}
                  >
                    <option value="">Selectionnez une condition moyenne</option>
                    {spots &&
                      spots
                        //   .filter(spot =>)
                        .map((spot) => (
                          <option value={spot.spots} key={spot.spots}>
                            {spot.conditions_id}
                          </option>
                        ))}
                  </select>
                </div>
              </div>

              <button
                type="button"
                className="createbutton mt-6"
                onClick={() => {
                  setDisplayModal(false);
                  addSpot();
                }}
              >
                <span />
                Créer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAdd;
