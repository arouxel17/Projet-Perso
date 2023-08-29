import React, { useState } from "react";
import apiConnexion from "@services/apiConnexion";

function ModalInscription({ onClose, subscribe }) {
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [hashedPassword, setHashedPassword] = useState("");

  const handleSubmit = async () => {
    try {
      apiConnexion.post("/users", {
        name,
        firstname,
        email,
        hashedPassword,
        role: "user",
      });
      subscribe();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity">
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex flex-col items-center w-full pt-5 md:pt-44 lg:pt-7 pt-24 gap-y-7">
          <div className="overflow-hidden rounded-lg bg-white shadow-3xl transition-all max-w-lg mx-5">
            <div className="flex flex-col items-center justify-center text-black font-bold px-10 pb-10 mx-14">
              <button
                type="button"
                className="border-4 rounded-xl hover:scale-125 ml-80 md:ml-96 m-3 md:m-6"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="w-6 h-6"
                >
                  <path d="M9.83 12l-4.95 4.95a1 1 0 101.42 1.42L12 13.41l4.95 4.95a1 1 0 101.42-1.42L13.41 12l4.95-4.95a1 1 0 00-1.42-1.42L12 10.59 7.05 5.64a1 1 0 00-1.42 1.42L10.59 12l-4.95 4.95a1 1 0 001.42 1.42L12 13.41l4.95 4.95a1 1 0 001.42-1.42L13.41 12l4.95-4.95a1 1 0 10-1.42-1.42L12 10.59 7.05 5.64a1 1 0 10-1.42 1.42L10.59 12z" />
                </svg>
              </button>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-xl text-center md:text-3xl pt-2">
                  S'inscrire
                </h1>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Nom.."
                  className="input w-80 my-7 md:text-2xl"
                />
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                  placeholder="Prénom.."
                  className="input w-80 my-7 md:text-2xl"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email.."
                  className="input w-80 my-7 md:text-2xl"
                />
                <input
                  type="password"
                  value={hashedPassword}
                  onChange={(e) => setHashedPassword(e.target.value)}
                  required
                  placeholder="Mot de passe.."
                  className="input w-80 my-7 md:text-2xl"
                />
              </div>
              <div className="flex flex-row">
                <button
                  type="button"
                  className="bg-secondary py-4 px-6 hover:scale-125 rounded-xl my-4 mx-5 shadow-2xl border-b-4 md:text-2xl"
                  onClick={handleSubmit}
                >
                  Valider
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalInscription;
