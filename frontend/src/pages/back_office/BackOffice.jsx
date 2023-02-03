import React, { useState, useEffect } from "react";
import apiConnexion from "@services/apiConnexion";
import Sidebar from "@components/back_office/sidebar";
import InfoSpot from "@components/back_office/InfoSpot";
import ModalAdd from "@components/back_office/ModalAdd";

function BackOffice() {
  const [nbJobs, setNbjobs] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);

  const getCount = () => {
    apiConnexion
      .get(`/nbjobs`)
      .then((data) => setNbjobs(data.data[0].count))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCount();
  }, []);

  return (
    <div className="flex flex-row bg-primary w-full">
      <Sidebar />
      <div className="flex flex-col text-white w-full pl-72">
        <div className="flex flex-row items-center justify-between mt-12 mx-24">
          <h1 className="text-2xl font-bold">
            Résultats (<span className="text-secondary">{nbJobs}</span>)
          </h1>
          <button
            type="button"
            className="bg-secondary text-black text-2xl border-2 border-white rounded-xl px-8 py-4 mx-3 hover:bg-white hover:text-black font-bold"
            onClick={setDisplayModal}
          >
            Ajouter
          </button>
          {displayModal && <ModalAdd setDisplayModal={setDisplayModal} />}
        </div>
        <div className="">
          <InfoSpot />
        </div>
      </div>
    </div>
  );
}

export default BackOffice;
