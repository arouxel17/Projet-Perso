import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@assets/wave2.png";
import apiConnexion from "@services/apiConnexion";

function ModalConnexion() {
  const [email, setEmail] = useState("");
  const [hashedPassword, setHashedPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await apiConnexion.post("/users/login", {
        email,
        hashedPassword,
      });
      if (response.status === 201) {
        const user = response.data;
        if (user.role === "admin") {
          navigate("/dashboard");
        } else if (user.role === "user") navigate("/accueil");
      }
    } catch (error) {
      console.error(error);
    }
  };

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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  required=""
                  placeholder="Mot de passe.."
                  className="input w-80 my-7 md:mb-14 md:text-2xl"
                  value={hashedPassword}
                  onChange={(e) => setHashedPassword(e.target.value)}
                />
              </div>

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
  );
}

export default ModalConnexion;
