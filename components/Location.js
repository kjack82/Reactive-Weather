import React from "react";
import { getForecastIcon } from "../public/helpers";

function Location({ data, location }) {
  // For simplicity, directly use data since we are passing the entire data object
  const cityData = data

  if (!location) {
    return <div>Location not found</div>
  } 
  
  if (!cityData) {
    return <div>No data available for the selected location.</div>;
  }

  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={getForecastIcon(cityData.forecast)}
          alt={cityData.forecast}
          id="icon"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{cityData.city}</h3>
        <h5 className="card-text">{cityData.temperature}°C</h5>
        <h5 className="card-text">{cityData.forecast}</h5>
      </div>
    </div>
  );
}

  export default Location;