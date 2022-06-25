import "./App.css";

import UserInput from "./components/UserInput";
import DataDisplay from "./components/DataDisplay";
import { useEffect, useState } from "react";

const APIKEY = "fa86038390be5ba9cda359e2386b6eb9";

function App() {
  const [currentCityName, setCurrentCityName] = useState("");
  const [data, setData] = useState({});
  const sendDataToParent = (city) => {
    setCurrentCityName(city);
  };

  const fetchData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentCityName}&appid=${APIKEY}`;
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);

    setData({
      name: json.name,
      temperature: json.main.temp,
      humidity: json.main.humidity,
    });
  };

  useEffect(() => {
    fetchData();
  }, [currentCityName]);

  return (
    <>
      <UserInput sendDataToParent={sendDataToParent} />
      <DataDisplay data={data} />
    </>
  );
}

export default App;
