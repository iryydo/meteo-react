import { useState } from "react";

function UserInput(props) {
  const [city, setCity] = useState("");

  const printCityName = () => {
    console.log(city);
  };

  return (
    <div>
      <label>Insert city name:</label>
      <input
        type={"text"}
        placeholder={"City name"}
        onChange={(event) => setCity(event.target.value)}
      ></input>
      <button type="submit" onClick={printCityName}>
        Enter
      </button>
    </div>
  );
}

export default UserInput;
