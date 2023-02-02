import React from "react";
import Sidebar from "@components/back_office/sidebar";
import InfoSpot from "@components/back_office/InfoSpot";

function BackOffice() {
  // const [displayModal, setDisplayModal] = useState(false);

  return (
    <div className="flex flex- row bg-primary">
      <Sidebar />
      <div className="flex flex-col text-white w-full m-8">
        <div className="flex flex-row items-center justify-between mx-24">
          <h1 className="text-2xl font-bold">Résultats ()</h1>
          <button
            type="button"
            className="bg-secondary text-black text-2xl border-2 border-white rounded-xl px-8 py-4 mx-3 hover:bg-white hover:text-black font-bold"
            // onClick={setDisplayModal}
          >
            ADD
          </button>
        </div>
        <div className="">
          <InfoSpot />
        </div>
      </div>
    </div>
  );
}

export default BackOffice;
