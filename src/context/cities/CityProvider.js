import React, { useState } from "react";
import getLocalFavorite from "../../helpers/getFromLocal";
import CityContext from "./CityContext";

const CityProvider = (props) => {
  const [likeCity, setLikeCity] = useState(getLocalFavorite());
  const [cityName, setCityName] = useState("Warsaw");

  const LikeCitySet = (city) => {
    setLikeCity(city);
  };

  const setCity = (city) => {
    setCityName(city);
  };

  return (
    <CityContext.Provider
      value={{
        LikeCitySet,
        likeCity,
        cityName,
        setCity,
      }}
    >
      {props.children}
    </CityContext.Provider>
  );
};

export default CityProvider;
