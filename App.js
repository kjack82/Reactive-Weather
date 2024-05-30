import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard.js";
import cities from "./data.js";
import Form from "./components/Form.js"

function App() {
  const [location, setLocation] = useState("");

  return (
    <div className="app">
      <Form location={location} setLocation={setLocation} />
      {cities.map((city, index) => (
        <WeatherCard
          key={index}
          data={city}
          location={location}
          setLocation={setLocation}
        />
      ))}
    </div>
  );
}
export default App;

    
  