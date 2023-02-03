import React from "react";

function Card({ spot }) {
  return (
    <div className="bg-white m-4 mx-8 rounded-2xl hover:scale-105 shadow-2xl">
      <img src={spot.image} alt="test" className="rounded-2xl w-full" />
      <div className="flex flex-col p-6 text-lg">
        <div>{spot.nom} 🌞</div>
        <div className="flex flex-row justify-between mt-3">
          <div>📍 {spot.lieu}</div>
          <div>{spot.difficulte}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
