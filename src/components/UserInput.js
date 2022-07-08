import { useState } from "react";

function UserInput(props) {
  const [city, setCity] = useState("");

  return (
    <div>
      <label>Insert city name:</label>
      <input
        type={"text"}
        placeholder={"City name"}
        onChange={(event) => setCity(event.target.value)}
      ></input>
      <button
        type="submit"
        onClick={() => {
          /* 2 - Il figlio passa come parametro il dato che noi vogliamo portare su al padre */
          props.sendDataToParent(city);
        }}
      >
        Enter
      </button>
    </div>
  );
}

export default UserInput;
