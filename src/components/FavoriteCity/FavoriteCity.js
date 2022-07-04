import React, { useContext } from "react";
import CityContext from "../../context/cities/CityContext";
import FavoriteCityItem from "./FavoriteCityItem";

const FavoriteCity = () => {
  const { likeCity } = useContext(CityContext);

  return likeCity.map((item, id) => (
    <div key={id}>
      <FavoriteCityItem item={item} id={id} />
    </div>
  ));
};

export default FavoriteCity;
