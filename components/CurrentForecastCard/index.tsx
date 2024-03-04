import Image from "next/image";
import { IWeatherForecast } from "@/app/page";
import currentWeatherCondition from "@/utils/currentweathercondition";
import formatDate from "@/utils/formatdate";

export default function CurrentForecast({data}:{data: IWeatherForecast}){
    const weather = data.weather[0].main.toLowerCase()
      
    return (
        <div className="flex flex-col items-center justify-between text-white bg-[#73A8FF] min-w-[14%] pt-4 rounded-lg shadow-xl">
            <p>{formatDate("time", data.dt_txt)}</p>
            <div className="flex flex-col bg-[#679DF6] w-full items-center mt-4 rounded-t-full py-2">
                <Image width={40} height={40} src={currentWeatherCondition(weather)} alt="ilustração do tempo"/>
                <p className="text-xl font-bold">{data.main.temp.toFixed(0)}°</p>
                <p className="text-sm font-light">{formatDate("date", data.dt_txt)}</p>
            </div>
        </div>
    )
}