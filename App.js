import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import cities from "./data";

function App() {
  const [location, setLocation] = useState("");

  return (
    <div className="app">
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

    
  