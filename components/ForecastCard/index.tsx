import Image from "next/image";
import { IWeatherForecast } from "@/app/page";
import currentWeatherCondition from "@/utils/currentweathercondition";
import formatDate from "@/utils/formatdate";

export default function ForecastCard({data}:{data: IWeatherForecast}){
    const weather = data.weather[0].main.toLowerCase()
    return (
        <div className="flex flex-row w-1/2 justify-between items-center">
            <div className="flex flex-col">
                <p>Segunda</p>
                <p>{formatDate("date", data.dt_txt)}</p>
            </div>
            <p>{data.main.temp.toFixed(0)}°</p>
            <Image width={40} height={40} src={currentWeatherCondition(weather)} alt="ilustração do tempo"/>
        </div>
    )
}