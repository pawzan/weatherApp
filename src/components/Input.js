import React, { useContext, useState } from "react";
import CityContext from "../context/cities/CityContext";

const Input = () => {
  const [input, setInput] = useState("");
  const { setCity } = useContext(CityContext);

  const handleClick = () => {
    setCity(input);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="inputSearch">
      <input
        type="text"
        placeholder="Wyszukaj miasto"
        onChange={handleChange}
        value={input}
      />
      <button className="searchButton" onClick={handleClick}>
        Sprawdź
      </button>
    </div>
  );
};

export default Input;
