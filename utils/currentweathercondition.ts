import dayjs from "dayjs";
import cloudy from "@/assets/nublado.png"
import rain from "@/assets/chuva.png"
import thunderstorm from "@/assets/tempestade.png"
import night from "@/assets/noite.png"
import sun from "@/assets/ensolarado.png"

export default function currentWeatherCondition(weather: string, date?: string){
    const hour = dayjs(date).hour();

    if(weather.includes("rain")){
        return rain
    }else if(weather.includes("thunderstorm")){
        return thunderstorm
    }else if(weather.indexOf("clouds") !== -1){
        if(hour > 18 || hour < 5)
            return night
        return cloudy
    }else{
        if(hour > 18 || hour < 5)
            return night
        return sun
    }
}