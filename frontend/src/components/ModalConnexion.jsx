import React from "react";
import { Link } from "react-router-dom";
import Logo from "@assets/wave2.png";

function ModalConnexion() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity">
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex flex-col items-center w-full pt-32 lg: pt-24 gap-y-7">
          <div className="overflow-hidden rounded-lg bg-white shadow-3xl transition-all max-w-lg mx-5">
            <div className="flex flex-col items-center justify-center text-black font-bold px-10 pb-10 mx-14">
              <div className="flex flex-col justify-center items-center">
                <img src={Logo} alt="" className="w-32" />
                <h1 className="text-xl text-center md:text-3xl">
                  Se connecter
                </h1>
                <input
                  type="value"
                  required=""
                  placeholder="Email.."
                  className="input w-80 my-7 md:mt-14 md:text-2xl"
                />
                <input
                  type="value"
                  required=""
                  placeholder="Mot de passe.."
                  className="input w-80 my-7 md:mb-14 md:text-2xl"
                />
              </div>
              <div className="flex flex-row">
                <Link to="/dashboard">
                  <button
                    type="button"
                    className="bg-primary text-white py-4 px-6 hover:scale-125 rounded-xl my-4 mx-5 shadow-2xl border-b-4 border-black md:text-2xl"
                  >
                    Admin
                  </button>
                </Link>
                <Link to="/accueil">
                  <button
                    type="button"
                    className="bg-secondary py-4 px-6 hover:scale-125 rounded-xl my-4 mx-5 shadow-2xl border-b-4 md:text-2xl"
                  >
                    Valider
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalConnexion;
