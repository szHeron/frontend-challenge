import dayjs from "dayjs";
import cloudy from "@/assets/nublado.png"
import rain from "@/assets/chuva.png"
import thunderstorm from "@/assets/tempestade.png"
import night from "@/assets/noite.png"
import sun from "@/assets/ensolarado.png"

export default function currentWeatherCondition(weather: string, date?: string){
    const hour = dayjs(date);

    if(weather.includes("rain")){
        return rain
    }else if(weather.includes("thunderstorm")){
        return thunderstorm
    }else if(weather.indexOf("clouds") !== -1){
        return cloudy
    }else{
        if(hour && (hour.isAfter('18:00') && hour.isBefore('05:00')))
            return night
        return sun
    }
}