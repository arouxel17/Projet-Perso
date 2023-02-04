import React from "react";

function InfoSpot({ spots, deleteSpot }) {
  return (
    <div className="bg-primary h-full flex flex-row justify-around my-8 mt-10 pl-4">
      <table className="table-auto">
        <thead>
          <tr className="border-b-2 border-secondary">
            <th className="text-2xl p-6 px-20">Nom</th>
            <th className="text-2xl p-6 px-20">Lieu</th>
            <th className="text-2xl p-6 px-14">Difficulté</th>
            <th className="text-2xl p-6 px-7">Modifier</th>
            <th className="text-2xl p-6 px-7">Supprimer</th>
          </tr>
        </thead>
        <tbody className="">
          {spots.map((spot) => (
            <tr>
              <td className="text-center text-white py-8">{spot.nom}</td>
              <td className="text-center text-white">{spot.lieu}</td>
              <td className="text-center text-white">{spot.difficulte}</td>
              <td className="text-center">
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 m-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </button>
              </td>
              <td className="text-center">
                <button type="button" onClick={() => deleteSpot(spot.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InfoSpot;
