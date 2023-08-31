import React, { useState, useEffect } from "react";
import apiConnexion from "@services/apiConnexion";

import "@components/back_office/Modal.css";

function Modal({ onClose, spot }) {
  const [conditions, setConditions] = useState([]);
  const [newSpots, setnewSpots] = useState({
    nom: "",
    lieu: "",
    difficulte: "",
    image: "",
    description: "",
    conditions_id: 0,
  });

  const getConditions = () => {
    apiConnexion
      .get("/conditions")
      .then((data) => {
        setConditions(data.data);
      })
      .catch((err) => console.error(err));
  };

  const handleSpot = (e) => {
    const newSpot = { ...newSpots };
    newSpot[e.target.name] = e.target.value;
    setnewSpots(newSpot);
  };

  const addSpot = () => {
    apiConnexion
      .post("/spots", newSpots)
      .then(() => onClose())
      .catch((err) => console.error(err));
  };

  const changeSpot = (id) => {
    apiConnexion
      .put(`/spots/${id}`, newSpots)
      .then(() => onClose())
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getConditions();
    if (spot.id) {
      setnewSpots({ ...spot });
    }
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity">
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex flex-col items-center w-full pt-6 gap-y-7">
          <div className="overflow-hidden rounded-lg bg-white shadow-3xl transition-all max-w-lg mx-5">
            <div className="flex flex-col items-center text-black font-bold p-8 mx-32">
              <button type="button" className="pr-96 mb-4" onClick={onClose}>
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
                {newSpots.id
                  ? "Modifier ce spot"
                  : "Création d'un nouveau spot"}
              </h1>
              <div>
                <div className="group">
                  <input
                    required=""
                    type="text"
                    className="input w-80 my-7"
                    placeholder="Nom"
                    name="nom"
                    onChange={handleSpot}
                    value={newSpots.nom}
                  />
                </div>
                <div className="group1">
                  <input
                    required=""
                    type="text"
                    className="input w-80 my-7"
                    placeholder="Lieu"
                    name="lieu"
                    onChange={handleSpot}
                    value={newSpots.lieu}
                  />
                </div>
                <div className="group2">
                  <select
                    required=""
                    className="input w-80 my-7"
                    name="difficulte"
                    onChange={handleSpot}
                    value={newSpots.difficulte}
                  >
                    <option value="">Selectionnez une difficulté</option>
                    <option value="Débutant">Débutant</option>
                    <option value="Intermediaire">Intermédiaire</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>
                <div className="group3">
                  <input
                    required=""
                    type="text"
                    className="input w-80 my-7"
                    placeholder="Image"
                    name="image"
                    onChange={handleSpot}
                    value={newSpots.image}
                  />
                </div>
                <div className="group4">
                  <textarea
                    required=""
                    type="text"
                    className="input w-80 my-7"
                    placeholder="Description"
                    name="description"
                    onChange={handleSpot}
                    value={newSpots.description}
                  />
                </div>
                <div className="group5">
                  <select
                    required=""
                    className="input w-80 my-7"
                    name="conditions_id"
                    onChange={handleSpot}
                    value={newSpots.conditions_id}
                  >
                    <option value="0">
                      Selectionnez une condition moyenne
                    </option>
                    {conditions &&
                      conditions.map((condi) => (
                        <option value={condi.id} key={condi.id}>
                          Vagues : {condi.vagues}, Houle : {condi.houles},
                          Période : {condi.periodes}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-row items-center">
                {newSpots.id && (
                  <button
                    type="button"
                    className="modifbutton mt-6 mx-6"
                    onClick={() => changeSpot(newSpots.id)}
                  >
                    <span />
                    Modifier
                  </button>
                )}
                {!newSpots.id && (
                  <button
                    type="button"
                    className="createbutton mt-6 mx-6"
                    onClick={addSpot}
                  >
                    <span />
                    Créer
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
