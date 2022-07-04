import React, { useContext, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import CityContext from "../context/cities/CityContext";
import kelvintoCelusis from "../helpers/tempConversion";
import Chart from "./Chart";

const WeatherComponent = ({ weather }) => {
  const { LikeCitySet, likeCity } = useContext(CityContext);
  const checkLikeCity = likeCity.includes(weather.name);

  const handleClick = () => {
    if (checkLikeCity) {
      LikeCitySet(likeCity.filter((item) => item !== weather.name));
    } else {
      const newFavoritveCity = [...likeCity, weather.name];
      LikeCitySet(newFavoritveCity);
    }
  };

  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(likeCity));
  }, [likeCity]);

  return (
    <div className="weatherContainer">
      {weather.name !== undefined ? (
        <>
          <div>
            {checkLikeCity ? (
              <AiFillHeart size={44} color="red" onClick={handleClick} />
            ) : (
              <AiOutlineHeart size={44} color="red" onClick={handleClick} />
            )}
          </div>
          <div className="weatherDisplay">
            <div style={{ color: "green" }}>{weather.name}</div>
            <div>{`${kelvintoCelusis(weather.main?.temp)}℃`}</div>
            <div>{`Wilgotność: ${weather.main?.humidity}%`}</div>
            <div style={{ width: "700px" }}>
              <Chart lat={weather.coord?.lat} lon={weather.coord?.lon} />
            </div>
          </div>
        </>
      ) : (
        <div className="weatherDisplay">Wpisz poprawną nazwę miasta</div>
      )}
    </div>
  );
};

export default WeatherComponent;
