import React from "react";

export default function Difficulty({ difficulties }) {
  return (
    <div>
      <button
        type="button"
        className="bg-secondary border-b-4 border-black rounded-xl shadow-xl text-primary font-bold p-3 mx-3 hover:scale-125"
      >
        {difficulties.difficulte}
      </button>
    </div>
  );
}
