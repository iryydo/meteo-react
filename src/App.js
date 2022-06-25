import "./App.css";

import UserInput from "./components/UserInput";
import DataDisplay from "./components/DataDisplay";
import { useState } from "react";

function App() {
  const [currentCityName, setCurrentCityName] = useState("");

  const mockData = {
    temp: 5,
    humid: 2,
  };

  return (
    <>
      <UserInput />
      <DataDisplay data={mockData} />
    </>
  );
}

export default App;
