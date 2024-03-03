import { useEffect, useState } from "react";
import api_weather from "@/services/api_weather";
import CurrentWeatherCard from "../CurrentWeatherCard";
import CurrentLocationMap from "../CurrentLocationMap";

export interface ICurrentWeather {
    coord: {
        lon: number;
        lat: number;
    },
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
    },
    weather: {
        main: string;
    },
    wind: {
        speed: number;
    }
}

export default function WeatherForecast({city, state}: {city: string, state: string}){
    const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>()
    const [forecastWeather, setForecastWeather] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function getCurrentWeather(){
            const response = await api_weather.get(`/weather?q=${"Russas"}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`)
            setCurrentWeather(response.data)
            setLoading(false)
        }

        if(!currentWeather){
            getCurrentWeather()
        }
    }, [currentWeather])

    if(currentWeather === undefined || loading){
        return <p>carregando</p>
    }

    return (
        <div className="flex flex-col w-full h-full ml-4">
            <div className="flex flex-row w-full h-full gap-4">
                <CurrentWeatherCard city={city} state={state} data={currentWeather}/>
                <CurrentLocationMap lat={currentWeather.coord.lat} lon={currentWeather.coord.lon}/>
            </div>
        </div>
    )
}