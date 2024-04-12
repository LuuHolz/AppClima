import { useState } from 'react';
import axios from 'axios';

const useAxiosWeather = () => {
    const [isLoading, setIsLoading] = useState(false);
    const API_KEY = "fd657707608bb8b5453c0ed0c8bcea86";

    const getWeather = async ({ ciudad }: { ciudad: string }) => {

        setIsLoading(true);
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}`;

        try {
            const response = await axios.get(apiURL);
            
            return response.data;
        } catch (error) {
            
            return null;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        getWeather,
        isLoading
    };
};

export default useAxiosWeather;
