import cloudy from "@/assets/nublado.png"
import rain from "@/assets/chuva.png"
import thunderstorm from "@/assets/tempestade.png"
import sun from "@/assets/ensolarado.png"

export default function currentWeatherCondition(weather: string){
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