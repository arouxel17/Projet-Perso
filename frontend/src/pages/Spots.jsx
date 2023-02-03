import React, { useEffect, useState } from "react";
import apiConnexion from "@services/apiConnexion";
import NavMini from "@components/NavMini";
import Card from "@components/Card";
import logo from "../assets/wave2.png";
import avatar from "../assets/avatar.png";

function Spots() {
  const [spots, setSpots] = useState([]);

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
  }, []);

  return (
    <div className="flex flex-col text-black">
      <div className="ml-4 md:ml-36">
        <NavMini />
      </div>
      <div className="flex flex-row justify-center">
        <img src={logo} className="w-32 mr-20" alt="logo2" />
        <div className="flex flex-row items-center pr-6">
          <h1 className="mr-4">Hello Julien !</h1>
          <img src={avatar} className="w-12 h-12" alt="avatar" />
        </div>
      </div>
      <div className="flex flex-row justify-between mx-10 mb-6">
        <h1 className="text-xl md:text-3xl font-bold">Tous les spots</h1>
        <h1 className="text-xl md:text-3xl font-bold">Tri</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-24">
        {spots && spots.map((spot) => <Card key={spot.id} spot={spot} />)}
      </div>
    </div>
  );
}

export default Spots;
