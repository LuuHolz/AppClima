import { useState } from 'react';

const useWeather = async () => {
    const [isLoading, setIsLoading] = useState(false);
    const URL_API = 'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Buenos%20aires';

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0a0fa52611mshe0e3c29332efea9p15e7c9jsn5b7d4112d25b',
            'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
        }
    };

    setIsLoading(true);

    try {
        const response = await fetch(URL_API, options);
        const data = await response.json();
        console.log(data);

        if(data){
            return data; 
        }

    } catch (error) {
        console.error(error);
    } finally{
        setIsLoading(false);
    }

    return {
        isLoading,
        useWeather
    }
}

export default useWeather
