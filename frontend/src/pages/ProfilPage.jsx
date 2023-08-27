import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import NavMini from "@components/NavMini";
import NavComputer from "@components/NavComputer";
import Footer from "@components/FooterComputer";
import apiConnexion from "@services/apiConnexion";
import { useAuth } from "@services/AuthContext";
import logo from "../assets/wave2.png";

function ProfilPage() {
  const { user } = useAuth();
  const [userInfos, setUserInfos] = useState({});
  const [newHashedPassword, setNewHashedPassword] = useState("");
  const [confirmNewHashedPassword, setConfirmNewHashedPassword] = useState("");

  useEffect(() => {
    if (user) {
      apiConnexion
        .get(`/users/${user.id}`)
        .then((res) => {
          setUserInfos(res.data[0]);
        })
        .catch((err) => console.error(err));
    }
  }, [user]);

  const handleChangePassword = () => {
    if (newHashedPassword === confirmNewHashedPassword) {
      apiConnexion
        .put(`/users/${user.id}`, {
          hashedPassword: newHashedPassword,
        })
        .then(() => {
          setNewHashedPassword("");
          setConfirmNewHashedPassword("");
        })
        .catch((err) => console.error(err));
    } else {
      console.error("Les mots de passe ne correspondent pas");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col text-black">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wave - Ton profil 🌊 </title>
        <meta name="description" content="Page d'accueil Wave 🌊" />
        <link rel="icon" type="image/png" href={logo} />
      </Helmet>
      <div className="ml-4 md:ml-36">
        <NavMini />
      </div>
      <div className="flex flex-row justify-center lg:invisible">
        <img src={logo} className="w-32 mr-20 md:w-44 md:mr-60" alt="logo2" />
        <div className="flex flex-row items-center pr-6">
          <button
            type="button"
            className="flex flex-row bg-secondary text-black font-bold text-2xl md:text-3xl items-center px-6 py-3 rounded-xl border-b-4 hover:scale-125 ml-20"
            onClick={handleLogout}
          >
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 52 52"
              enableBackground="new 0 0 52 52"
            >
              <path
                d="M21,48.5v-3c0-0.8-0.7-1.5-1.5-1.5h-10C8.7,44,8,43.3,8,42.5v-33C8,8.7,8.7,8,9.5,8h10
                        C20.3,8,21,7.3,21,6.5v-3C21,2.7,20.3,2,19.5,2H6C3.8,2,2,3.8,2,6v40c0,2.2,1.8,4,4,4h13.5C20.3,50,21,49.3,21,48.5z"
              />
              <path
                d="M49.6,27c0.6-0.6,0.6-1.5,0-2.1L36.1,11.4c-0.6-0.6-1.5-0.6-2.1,0l-2.1,2.1c-0.6,0.6-0.6,1.5,0,2.1l5.6,5.6
                        c0.6,0.6,0.2,1.7-0.7,1.7H15.5c-0.8,0-1.5,0.6-1.5,1.4v3c0,0.8,0.7,1.6,1.5,1.6h21.2c0.9,0,1.3,1.1,0.7,1.7l-5.6,5.6
                        c-0.6,0.6-0.6,1.5,0,2.1l2.1,2.1c0.6,0.6,1.5,0.6,2.1,0L49.6,27z"
              />
            </svg>
          </button>
        </div>
      </div>
      <NavComputer />
      <div className="mb-36">
        <h1 className="text-3xl font-bold text-center text-primary underline lg:mt-10">
          Ton profil
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-2">
          <div className="lg:m-10 text-black">
            <input
              type="text"
              value={userInfos.name}
              readOnly
              className="input w-80 mb-7 md:text-2xl"
            />
            <input
              type="text"
              value={userInfos.firstname}
              readOnly
              className="input w-80 my-7 md:text-2xl"
            />
            <input
              type="email"
              value={userInfos.email}
              readOnly
              className="input w-80 my-7 md:text-2xl"
            />
          </div>
          <div className="flex flex-col justify-center border border-4 border-secondary rounded-xl p-5 lg:m-10 mt-8 md:mt-14">
            <h2 className="text-xl font-bold text-center text-secondary mt-3">
              Changer mon mot de passe
            </h2>
            <input
              type="password"
              value={newHashedPassword}
              onChange={(e) => setNewHashedPassword(e.target.value)}
              required
              placeholder="Nouveau mot de passe"
              className="input w-80 my-7 md:text-2xl"
            />
            <input
              type="password"
              value={confirmNewHashedPassword}
              onChange={(e) => setConfirmNewHashedPassword(e.target.value)}
              required
              placeholder="Confirmer mot de passe.."
              className="input w-80 my-7 md:text-2xl"
            />
            <button
              type="button"
              className="flex flex-row justify-center bg-secondary text-black font-bold text-xl md:text-2xl items-center mx-14 rounded-xl border-b-4 hover:scale-125"
              onClick={handleChangePassword}
            >
              <span className="m-2">Valider</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilPage;
