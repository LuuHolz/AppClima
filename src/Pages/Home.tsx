import { DataAPI } from "../types/WeatherAPI.type";
import Card from "../Components/Card";
import { useState, FormEvent } from "react";
import useAxiosWeather from "../Hook/useAxiosWeather";


const Home = () => {
    const [ciudad, setCiudad] = useState("");
    const { isLoading, getWeather } = useAxiosWeather();
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
            <div className="conteinerPrincipal">
                <div className="formContainer">
                    <form onSubmit={(e) => callWeather(e)}>
                        <label htmlFor="">
                            <p className="searchLocation">Escribe una ciudad</p>
                            <input
                                type="text"
                                onChange={(e) => setCiudad(e.target.value)}
                                value={ciudad}
                            />
                        </label>
                        <button type="submit" disabled={isLoading} className="btnBuscar">
                            Buscar
                        </button>
                    </form>
                </div>
                <div className="cardHomeContainer">
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


