import Image from "next/image"
import { IWeather } from "@/app/page"
import currentWeatherCondition from "@/utils/currentweathercondition"

export default function CurrentWeatherCard({data, city, state}: {data: IWeather, city: string, state: string}){
    const weather = data.weather[0].main.toLowerCase()

    function currentWeatherConditionTranslate(){
        if(weather.includes("rain")){
            return "Chuva"
        }else if(weather.includes("thunderstorm")){
            return "Tempestade"
        }else if(weather.indexOf("clouds") !== -1){
            return "Nublado"
        }else{
            return "Ensolarado"
        }
    }
    
    return (
        <div className="flex flex-col text-white items-center h-full w-full shadow-2xl bg-gradient-to-t from-[#73A8FF] to-[#1A58BE] p-4 rounded-lg">
            <h1 className="text-white font-medium text-lg self-start">
                Tempo hoje
            </h1> 
            <div className="flex flex-col w-full h-full items-center justify-around">
                <div className="flex flex-col items-center">
                    <p><span className="font-bold">{city}</span>, {state}</p>
                    <Image width={180} height={180} src={currentWeatherCondition(weather)} alt="ilustração do tempo"/>
                    <div>
                        <h2 className="font-bold text-6xl">{data.main.temp.toFixed(0)}°</h2>
                        <p className="font-light self-start">
                            {currentWeatherConditionTranslate()}
                        </p>
                    </div>
                </div>
                <div className="flex flex-row w-3/4 justify-around">
                    <div className="flex flex-col items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20" height="20" viewBox="0 0 24 24"><path d="M11 10h-11v-2h11c.552 0 1-.448 1-1s-.448-1-1-1c-.403 0-.747.242-.905.587l-1.749-.956c.499-.965 1.494-1.631 2.654-1.631 3.971 0 3.969 6 0 6zm7 7c0-1.656-1.344-3-3-3h-15v2h15c.552 0 1 .448 1 1s-.448 1-1 1c-.403 0-.747-.242-.905-.587l-1.749.956c.499.965 1.494 1.631 2.654 1.631 1.656 0 3-1.344 3-3zm1.014-7.655c.082-.753.712-1.345 1.486-1.345.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-20.5v2h20.5c1.932 0 3.5-1.568 3.5-3.5s-1.568-3.5-3.5-3.5c-1.624 0-2.977 1.116-3.372 2.617l1.886.728z"/></svg>
                        <p className="text-sm font-light">Vento</p>
                        <p className="text-sm font-light">{data.wind.speed.toFixed(2)}km/h</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20" height="20" viewBox="0 0 24 24"><path d="M12 3.571c3.658 5.437 6 9.223 6 12.503 0 3.268-2.691 5.926-6 5.926s-6-2.658-6-5.925c0-3.281 2.341-7.067 6-12.504zm0-3.571c-4.87 7.197-8 11.699-8 16.075 0 4.378 3.579 7.925 8 7.925s8-3.547 8-7.925c0-4.376-3.13-8.878-8-16.075z"/></svg>
                        <p className="text-sm font-light">Umidade</p>
                        <p className="text-sm font-light">{data.main.humidity}%</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20" height="20" viewBox="0 0 24 24"><path d="M17.5 2c.827 0 1.5.673 1.5 1.5v7.525c0 1.569.514 2.287 1.411 3.05 1.01.858 1.589 2.106 1.589 3.425 0 2.481-2.019 4.5-4.5 4.5s-4.5-2.019-4.5-4.5c0-1.319.579-2.567 1.59-3.425.896-.761 1.41-1.479 1.41-3.05v-7.525c0-.827.673-1.5 1.5-1.5zm0-2c-1.933 0-3.5 1.567-3.5 3.5v7.525c0 .587-.258 1.146-.705 1.525-1.403 1.192-2.295 2.965-2.295 4.95 0 3.59 2.909 6.5 6.5 6.5s6.5-2.91 6.5-6.5c0-1.985-.892-3.758-2.295-4.95-.447-.38-.705-.938-.705-1.525v-7.525c0-1.933-1.567-3.5-3.5-3.5zm2.107 14.718c-1.012-.89-1.607-1.734-1.607-3.22v-6.498h-1v6.498c0 1.484-.597 2.332-1.607 3.22-.794.698-1.393 1.642-1.393 2.782 0 1.933 1.567 3.5 3.5 3.5s3.5-1.567 3.5-3.5c0-1.14-.599-2.083-1.393-2.782zm-13.107-8.718c1.379 0 2.5 1.122 2.5 2.5s-1.121 2.5-2.5 2.5-2.5-1.122-2.5-2.5 1.121-2.5 2.5-2.5zm0-1c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5zm-4.5 3.5c0-.171.032-.333.051-.5h-2.051v1h2.051c-.019-.167-.051-.329-.051-.5zm1.705-3.501l-1.448-1.449-.707.707 1.448 1.448c.21-.261.445-.497.707-.706zm6.297.706l1.447-1.448-.707-.707-1.448 1.448c.263.21.498.445.708.707zm-3.502-1.705c.171 0 .334.032.5.05v-2.05h-1v2.05c.166-.018.329-.05.5-.05zm0 9c-.171 0-.334-.032-.5-.05v2.05h1v-2.05c-.166.018-.329.05-.5.05zm4.449-5c.019.167.051.329.051.5l-.051.5h2.051v-1h-2.051zm-7.951 3.294l-1.448 1.449.707.707 1.448-1.448c-.262-.21-.497-.446-.707-.708zm6.296.708l1.448 1.448.707-.707-1.447-1.448c-.21.262-.445.497-.708.707z"/></svg>
                        <p className="text-sm font-light">Sensação térmica</p>
                        <p className="text-sm font-light">{data.main.feels_like.toFixed(0)}°C</p>
                    </div>
                </div>
            </div>
        </div>
    )
}