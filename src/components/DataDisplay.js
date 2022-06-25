function DataDisplay(props) {
  const convertedTemp = ((props.data.temperature - 32) * 5) / 9;

  return (
    <div className="container data">
      <p>Name: {props.data.name}</p>
      <p>Temperature: {convertedTemp}</p>
      <p>Umidity: {props.data.humidity}</p>
    </div>
  );
}

export default DataDisplay;
