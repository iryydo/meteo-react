function DataDisplay(props) {
  return (
    <div className="container data">
      <p>Temperature: {props.data.temp}</p>
      <p>Umidity: {props.data.humid}</p>
    </div>
  );
}

export default DataDisplay;
