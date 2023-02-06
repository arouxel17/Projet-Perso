import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import apiConnexion from "@services/apiConnexion";
import Sidebar from "@components/back_office/sidebar";
import InfoSpot from "@components/back_office/InfoSpot";
import Modal from "@components/back_office/Modal";
import logo from "@assets/wave2.png";

function BackOffice() {
  const [spots, setSpots] = useState([]);
  const [nbJobs, setNbjobs] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);

  const fullSpot = () => {
    apiConnexion
      .get("/spots")
      .then((data) => {
        setSpots(data.data);
      })
      .catch((err) => console.error(err));
  };

  const getCount = () => {
    apiConnexion
      .get(`/nbjobs`)
      .then((data) => setNbjobs(data.data[0].count))
      .catch((error) => console.error(error));
  };

  const refresh = () => {
    fullSpot();
    getCount();
  };

  const deleteSpot = (id) => {
    apiConnexion
      .delete(`/spots/${id}`)
      .then(() => {
        refresh();
      })
      .catch((err) => console.error(err));
  };

  const onModalClose = () => {
    setDisplayModal(false);
    refresh();
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="flex flex-row bg-primary h-screen w-full">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wave - Dashboard 🌊 </title>
        <meta name="description" content="Un seul spot 🌊" />
        <link rel="icon" type="image/png" href={logo} />
      </Helmet>
      <Sidebar />
      <div className="flex flex-col text-white w-full pl-64">
        <div className="flex flex-row items-center justify-between mt-12 mx-24">
          <h1 className="text-2xl font-bold">
            Résultats (<span className="text-secondary">{nbJobs}</span>)
          </h1>
          <button
            type="button"
            className="bg-secondary text-black text-2xl border-2 border-white rounded-xl px-6 py-3 mx-3 hover:bg-white hover:text-black font-bold"
            onClick={() => setDisplayModal(true)}
          >
            Ajouter
          </button>
          {displayModal && <Modal onClose={onModalClose} spot={displayModal} />}
        </div>
        <div className="bg-primary">
          <InfoSpot
            spots={spots}
            deleteSpot={deleteSpot}
            setDisplayModal={setDisplayModal}
          />
        </div>
      </div>
    </div>
  );
}

export default BackOffice;
