import React from "react";
import { Link } from "react-router-dom";

function ModalConnexion() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity">
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex flex-col items-center w-full pt-40 gap-y-7">
          <div className="overflow-hidden rounded-lg bg-white shadow-3xl transition-all max-w-lg mx-5">
            <div className="flex flex-col items-center text-black font-bold p-10 mx-14">
              <div>
                <h1 className="text-xl text-center">Se connecter</h1>
                <input
                  type="value"
                  required=""
                  placeholder="Email.."
                  className="input w-80 my-7"
                />
                <input
                  type="value"
                  required=""
                  placeholder="Mot de passe.."
                  className="input w-80 my-7"
                />
              </div>
              <div className="flex flex-row">
                <Link to="/dashboard">
                  <button
                    type="button"
                    className="bg-primary text-white py-4 px-6 hover:scale-125 rounded-xl my-4 mx-5"
                  >
                    Admin
                  </button>
                </Link>
                <Link to="/accueil">
                  <button
                    type="button"
                    className="bg-secondary py-4 px-6 hover:scale-125 rounded-xl my-4 mx-5"
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
