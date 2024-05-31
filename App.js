import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard.js";
import cities from "./data.js";
import Form from "./components/Form.js"

function App() {
  const [location, setLocation] = useState("");
  const selectedCity = cities.find(city => city.city.toLowerCase() === location.toLowerCase())

  return (
    <div className="app">
      <Form location={location} setLocation={setLocation} />
      {selectedCity ? (
        <WeatherCard data={selectedCity} />
      ) : (
        <p>No data available for the selected location.</p>
      )}
    </div>
  );
}
export default App;


    
  