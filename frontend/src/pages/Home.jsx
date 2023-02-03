import React from "react";
import NavMini from "@components/NavMini";
import NavComputer from "@components/NavComputer";
import Footer from "@components/FooterComputer";
import logo from "../assets/wave2.png";
import avatar from "../assets/avatar.png";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="ml-4 md:ml-36">
        <NavMini />
      </div>
      <div className="flex flex-row justify-center lg:invisible">
        <img src={logo} className="w-32 mr-20 md:w-44 md:mr-60" alt="logo2" />
        <div className="flex flex-row items-center pr-6">
          <h1 className="mr-4 md:text-3xl">Hello Julien !</h1>
          <img src={avatar} className="w-12 h-12" alt="avatar" />
        </div>
      </div>
      <NavComputer />
      <div className="flex flex-col mx-6 lg:mt-10">
        <h1 className="mr-12 mb-3">
          Trouvez les spots de surf où que vous soyez en Charente-Maritime 🌞
        </h1>
        <div className="my-3">
          <div className="flex flex-row w-full mb-4">
            <input
              type="search"
              className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding drop-shadow-xl border border-solid border-gray-300 rounded-xl focus:text-gray-700 focus:border-primary focus:outline-none"
              placeholder="Entrez votre spot"
            />
            <span
              className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
              id="basic-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
