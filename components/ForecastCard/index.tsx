import Image from "next/image";
import { IWeatherForecast } from "@/app/page";
import currentWeatherCondition from "@/utils/currentweathercondition";
import formatDate from "@/utils/formatdate";
import 'dayjs/locale/pt-br'
import dayjs from "dayjs"

export default function ForecastCard({data}:{data: IWeatherForecast}){
    const weather = data.weather[0].main.toLowerCase()

    function dayName(){
        const date = new Date(data.dt_txt);
        const day = dayjs().day(date.getDay()).locale('pt-br').format("dddd");

        return day.charAt(0).toUpperCase() + day.slice(1)
    }
    
    return (
        <div className="flex flex-row w-1/2 justify-between items-center">
            <div className="flex flex-col">
                <p>{dayName()}</p>
                <p>{formatDate("date", data.dt_txt)}</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <p>{data.main.temp.toFixed(0)}°</p>
                <Image width={40} height={40} src={currentWeatherCondition(weather)} alt="ilustração do tempo"/>
            </div>
        </div>
    )
}