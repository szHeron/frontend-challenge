import { useEffect, useState } from "react";
import api_weather from "@/services/api_weather";
import CurrentWeatherCard from "../CurrentWeatherCard";
import CurrentLocationMap from "../CurrentLocationMap";
import ForecastCard from "../ForecastCard";

export interface IWeather {
    coord: {
        lon: number;
        lat: number;
    },
    main: {
        temp: number;
        feels_like: number;
        humidity: number;
    },
    weather: {
        main: string;
    }[],
    wind: {
        speed: number;
    }
}

export interface IWeatherForecast extends IWeather {
    dt_txt: string;
}

const initialState = {
    coord: {
        lon: 0,
        lat: 0,
    },
    main: {
        temp: 0,
        feels_like: 0,
        humidity: 0,
    },
    weather: [{
        main: ""
    }],
    wind: {
        speed: 0,
    }
}

export default function WeatherForecast({city, state}: {city: string, state: string}){
    const [currentWeather, setCurrentWeather] = useState<IWeather>(initialState)
    const [forecastWeather, setForecastWeather] = useState<IWeatherForecast[]>([{...initialState, dt_txt: ""}])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function getForecastWeather(){
            const responseForecast = await api_weather.get(`/forecast/daily?q=${"Fortaleza"}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`)
            const responseCurrentWeather = await api_weather.get(`/weather?q=${"Fortaleza"}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`)
            setForecastWeather(responseForecast.data.list)
            setCurrentWeather(responseCurrentWeather.data)
            setLoading(false)
        }

        if(currentWeather.coord.lon === 0){
            getForecastWeather()
        }
    }, [currentWeather, forecastWeather])

    if(loading){
        return <p>carregando</p>
    }

    return (
        <div className="flex flex-col w-full h-full ml-4">
            <div className="flex flex-row w-full h-full gap-4">
                <CurrentWeatherCard city={city} state={state} data={currentWeather}/>
                <CurrentLocationMap lat={currentWeather.coord.lat} lon={currentWeather.coord.lon}/>
            </div>
            <p className="mt-8 font-medium text-lg">Previsão do tempo.</p>
            <div className="flex flex-row justify-around items-center w-full h-[60%]">
                {
                    forecastWeather.map((data, index) =>{
                        return <ForecastCard key={index} data={data}/>
                    })
                }
            </div>
        </div>
    )
}