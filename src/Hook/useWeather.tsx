import { useState } from 'react';
import { DataAPI } from '../types/WeatherAPI.type';

const useWeather = () => {
    const [isLoading, setIsLoading] = useState(false);
    const API_KEY = "fd657707608bb8b5453c0ed0c8bcea86";

    const getWeather = async ({ciudad}: { ciudad: string}) => {
        const URL_API = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}`;
        setIsLoading(true);

        try {
            const respuesta = await fetch(URL_API);
            const data: DataAPI = await respuesta.json();

            if (data) {
                return data;
            }
        } catch (error) {
            throw error;
        } finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        getWeather
    }
}

export default useWeather
