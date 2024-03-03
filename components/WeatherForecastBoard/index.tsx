import CurrentWeatherCard from "../CurrentWeatherCard";
import CurrentLocationMap from "../CurrentLocationMap";
import ForecastCard from "../ForecastCard";
import { IWeather, IWeatherForecast } from "@/app/page";

interface IWeatherForecastBoard {
    city: string,
    state: string,
    currentWeather: IWeather,
    forecastWeather: IWeatherForecast[]
}

export default function WeatherForecastBoard({city, state, currentWeather, forecastWeather}: IWeatherForecastBoard){
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