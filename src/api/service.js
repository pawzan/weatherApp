const API_KEY = process.env.REACT_APP_API_KEY;

export const getWeatherByState = (state) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${API_KEY}`;

  return fetch(url).then((res) => res.json());
};

export const getWeatherByCoord = (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${API_KEY}`;

  return fetch(url).then((res) => res.json());
};
