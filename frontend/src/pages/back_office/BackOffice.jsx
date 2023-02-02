import React from "react";

import Sidebar from "@components/back_office/sidebar";

function BackOffice() {
  return (
    <div className="flex flex- row bg-primary">
      <Sidebar />
      <div className="text-white">BackOffice</div>
    </div>
  );
}

export default BackOffice;
