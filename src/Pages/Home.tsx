import { DataAPI } from "../types/WeatherAPI.type";
import Card from "../Components/Card";
import useWeather from "../Hook/useWeather";
import { useState, FormEvent } from "react";

const Home = () => {
  const [ciudad, setCiudad] = useState("");
  const { isLoading, getWeather } = useWeather();
  const [weather, setWeather] = useState<DataAPI | null>(null);

  const callWeather = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await getWeather({ ciudad });
      setWeather(response !== undefined ? response : null);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setWeather(null);
    }
  };

  return (
    <>
      <div className="conteinerPrincip">
        <div>
          <form onSubmit={(e) => callWeather(e)}>
            <label htmlFor="">
              <p>Ciudad</p>
              <input
                type="text"
                onChange={(e) => setCiudad(e.target.value)}
                value={ciudad}
              />
            </label>
            <button type="submit" disabled={isLoading}>
              Buscar
            </button>
          </form>
        </div>
        <div>
          {weather !== null ? (
            <Card weather={weather} />
          ) : (
            <div>No se encontraron datos meteorológicos</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
