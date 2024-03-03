import Image from "next/image";
import { IWeatherForecast } from "../WeatherForecast";
import cloudy from "@/public/nublado.png"
import rain from "@/public/chuva.png"
import thunderstorm from "@/public/tempestade.png"
import sun from "@/public/ensolarado.png"

export default function ForecastCard({data}:{data: IWeatherForecast}){
    const weather = data.weather[0].main.toLowerCase()

    function currentWeatherConditionImage(){
        if(weather.includes("rain")){
            return rain
        }else if(weather.includes("thunderstorm")){
            return thunderstorm
        }else if(weather.indexOf("clouds") !== -1){
            return cloudy
        }else{
            return sun
        }
    }

    function formatDate() {
        const date = new Date(data.dt_txt);
        const hours = date.getHours();
        const formattedHours = hours.toString().padStart(2, "0");
        const formattedDay = date.getDate().toString().padStart(2, "0");
        const formattedMonth = (date.getMonth() + 1).toString().padStart(2, "0");
        
        return `${formattedHours}h - ${formattedDay}/${formattedMonth}`;
    }
      
    return (
        <div className="flex flex-col items-center justify-between text-white bg-blue-500 min-h-[40%] px-8 py-2 rounded-lg shadow-xl">
            <p>{formatDate()}</p>
            <Image width={40} height={40} src={currentWeatherConditionImage()} alt="ilustração do tempo"/>
            <p className="font-bold">{data.main.temp.toFixed(0)}°</p>
        </div>
    )
}