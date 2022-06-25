import "./App.css";
import UserInput from "./components/UserInput";
import DataDisplay from "./components/DataDisplay";

function App() {
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
