import React, { useEffect, useState } from "react";
import PasswordGenerator from "./components/passwordGenerator";

function App() {

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <PasswordGenerator />
    </div>
  );
}

export default App;
