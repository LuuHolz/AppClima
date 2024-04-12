import { DataAPI } from "../types/WeatherAPI.type";
import Sol from '../assets/sol.png'

const Card = ({ weather }: { weather: DataAPI | null }) => {
    return (
        <div>
            <div className='cardContainer'>
                <p className='location'>{weather?.name}</p>
                <img src={Sol} alt="" className='imgSol'/>
                <div className='climaTemperatura'>
                    <p>{weather?.main.temp} F</p>
                    <p>sunny</p>
                </div>
                <div className='climaToday'>
                    Hoy {weather?.main.temp_min}/{weather?.main.temp_max}
                </div>
            </div>
        </div>
    )
}

export default Card
