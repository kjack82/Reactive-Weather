import sunny from "../assets/Sunny.svg";
import cloudy from "../assets/Cloudy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";
import rainy from "../assets/Rainy.svg";


export function getForecastIcon(forecast) {
    switch (forecast) {
      case "Sunny":
        return sunny;
      case "Cloudy":
        return cloudy;
      case "Partly cloudy":
        return partlyCloudy;
      case "Rainy":
        return rainy;
      default:
        return null;
    }
  }
