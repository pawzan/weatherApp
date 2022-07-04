import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import FavoriteCity from "./components/FavoriteCity/FavoriteCity";
import WeatherComponent from "./components/WeatherComponent";
import { getWeatherByState } from "./api/service";
import CityContext from "./context/cities/CityContext";

function App() {
  const [weather, setWeather] = useState({});
  const { cityName } = useContext(CityContext);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeatherByState(cityName);
      setWeather(data);
    };
    fetchWeather();
  }, [cityName]);

  return (
    <div className="App">
      <Input />
      <WeatherComponent weather={weather} />
      <FavoriteCity />
    </div>
  );
}

export default App;
