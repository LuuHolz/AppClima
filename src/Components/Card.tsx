import { DataAPI } from "../types/WeatherAPI.type";
import Sol from '../assets/sol.png';

const Card = ({ weather }: { weather: DataAPI | null }) => {
    const convertKelvinToCelsius = (temp: number) => {
        return (temp - 273.15).toFixed(2); // Redondeamos a dos decimales
    };

    return (
        <div>
            <div className='cardContainer'>
                <p className='location'>{weather?.name}</p>
                <img src={Sol} alt="" className='imgSol' />
                <div className='climaTemperatura'>
                    <p>{convertKelvinToCelsius(weather?.main.temp)} °C</p>
                    {weather && weather.weather && weather.weather[0] && (
                        <p>{weather.weather[0].description}</p>
                    )}
                </div>
                <div className='climaToday'>
                    Hoy {convertKelvinToCelsius(weather?.main.temp_min)}°C / {convertKelvinToCelsius(weather?.main.temp_max)}°C
                </div>
            </div>
        </div>
    )
}

export default Card;
