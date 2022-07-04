import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { getWeatherByCoord } from "../api/service";
import kelvintoCelusis from "../helpers/tempConversion";

Chart.register(...registerables);

const ChartHours = ({ lat, lon }) => {
  const [geo, setGeo] = useState({});

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeatherByCoord(lat, lon);
      setGeo(data);
    };
    fetchWeather();
  }, [lat, lon]);

  const date = (unixTimestamp) => {
    return new Date(unixTimestamp * 1000);
  };

  const hourly = geo["hourly"]?.slice(0, 24).map((d) => {
    return {
      hour: d.dt,
      temp: d.temp,
      humidity: d.humidity,
    };
  });

  const data = {
    labels: hourly?.map((item) => {
      return date(item.hour).getHours();
    }),
    datasets: [
      {
        label: "Temperature ℃",
        data: hourly?.map((item) => {
          return kelvintoCelusis(item.temp);
        }),
        backgroundColor: "blue",
      },
      {
        label: "Humidity %",
        data: hourly?.map((item) => {
          return item.humidity;
        }),
        backgroundColor: "orange",
      },
    ],
  };

  return (
    <>
      <Bar data={data} />
    </>
  );
};

export default ChartHours;
