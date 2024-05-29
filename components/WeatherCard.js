import React from "react";
import { getForecastIcon } from "../public/helpers";
import Location from "./Location";

function WeatherCard({ data, location, setLocation }) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={getForecastIcon(data.forecast)}
          alt={data.forecast}
          id="icon"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{data.city}</h3>
        <h5 className="card-text">{data.temperature}°C</h5>
        <h5 className="card-text">{data.forecast}</h5>
        <Location data={data} location={location} setLocation={setLocation} />
      </div>
    </div>
  );
}

export default WeatherCard