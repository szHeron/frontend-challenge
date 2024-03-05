import CurrentWeatherCard from "../CurrentWeatherCard";
import CurrentLocationMap from "../CurrentLocationMap";
import CurrentForecast from "../CurrentForecastCard";
import { IWeather, IWeatherForecast } from "@/app/page";
import ForecastCard from "../ForecastCard";

interface IWeatherForecastBoard {
    city: string;
    state: string;
    currentWeather: IWeather;
    currentForecastWeather: IWeatherForecast[];
    nextForecastWeather: IWeatherForecast[];
}

export default function WeatherForecastBoard({city, state, currentWeather, currentForecastWeather, nextForecastWeather}: IWeatherForecastBoard){

    return (
        <div className="flex flex-row w-full h-full gap-4 ml-4 p-4">
            <div className="flex flex-col w-full h-full gap-4">
                <CurrentWeatherCard city={city} state={state} data={currentWeather}/>
                <p className="font-medium text-lg border-b-2 border-b-blue-500 mt-4">Previsão do tempo.</p>
                <div className="flex flex-row justify-around items-center w-full h-[60%]">
                    {
                        currentForecastWeather.map((data, index) =>{
                            return <CurrentForecast key={index} data={data}/>
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col w-[45%] h-full gap-4">
                <CurrentLocationMap lat={currentWeather.coord.lat} lon={currentWeather.coord.lon}/>
                <p className="font-medium text-lg border-b-2 border-b-blue-500 mt-6">Próximos dias.</p>
                <div className="flex flex-col items-start gap-2 w-full h-[60%] pl-8">
                    {
                        nextForecastWeather.map((data, index) =>{
                            return <ForecastCard key={index} data={data}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}