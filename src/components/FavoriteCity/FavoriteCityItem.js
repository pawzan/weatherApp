import React, { useContext, useEffect, useState } from "react";
import { getWeatherByState } from "../../api/service";
import CityContext from "../../context/cities/CityContext";
import kelvintoCelusis from "../../helpers/tempConversion";

const FavoriteCityItem = ({ item, id }) => {
  const [weather, setWeather] = useState({});
  const { likeCity, setCity, LikeCitySet } = useContext(CityContext);



  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeatherByState(item);
      setWeather(data);
    };
    fetchWeather();
    const interval = setInterval(() => {
      fetchWeather();
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, [item]);

  const handleDelete = (id) => {
    LikeCitySet(likeCity.filter((item, ind) => ind !== id));
  };

  const handleClick = (city) => {
    setCity(city);
  };

  return (
    <>
      {id === 0 ? <div className="cityName">Polubione miasta</div> : null}
      <div className="containerFavorite">
        <div className="contentFavorite">
          <div style={{ color: "green", fontSize: "44px" }}>{weather.name}</div>
          <div style={{ color: "black", fontSize: "44px" }}>
            {`${kelvintoCelusis(weather.main?.temp)}℃, Wilgotność: ${
              weather.main?.humidity
            }%`}
          </div>
          <div>
            <button onClick={() => handleDelete(id)}>Usuń z ulubionnych</button>
            <button onClick={() => handleClick(item)}>Pokaz</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoriteCityItem;
