"use client"

import { useEffect, useState } from "react";
import api_weather from "@/services/api_weather";
import UserInformationCard from "@/components/UserInformationCard";
import WeatherForecastBoard from "@/components/WeatherForecastBoard";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/navigation";

export interface IWeather {
  coord: {
    lon: number;
    lat: number;
  },
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  },
  weather: {
    main: string;
  }[],
  wind: {
    speed: number;
  }
}

export interface IWeatherForecast extends IWeather {
  dt_txt: string;
}

const initialState = {
  coord: {
    lon: 0,
    lat: 0,
  },
  main: {
    temp: 0,
    feels_like: 0,
    humidity: 0,
  },
  weather: [{
    main: ""
  }],
  wind: {
    speed: 0,
  }
}

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [currentWeather, setCurrentWeather] = useState<IWeather>(initialState)
  const [forecastWeather, setForecastWeather] = useState<IWeatherForecast[]>([{...initialState, dt_txt: ""}])
  const {user} = useUser()
  const router = useRouter()

  useEffect(()=>{
    async function getWeather(){
      const responseForecast: IWeatherForecast[] = (await api_weather.get(`/forecast?q=${user.city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`)).data.list
      const responseCurrentWeather: IWeather = (await api_weather.get(`/weather?q=${user.city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`)).data

      let forecast = [...forecastWeather].slice(1)
      let prevDay = new Date()

      responseForecast.forEach(item => {
        const day = new Date(item.dt_txt)

        if(prevDay.getDay() < day.getDay()){
          forecast.push(item)
          prevDay = day
        }
      })

      setForecastWeather(forecast)
      setCurrentWeather(responseCurrentWeather)
      setLoading(false)
    }

    if(user.name.length < 1){
      router.push('/signup')
      return;
    }

    if(currentWeather.coord.lon === 0){
      getWeather()
    }
  }, [currentWeather, forecastWeather, setLoading, router, user])

  if(loading){
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <svg className="animate-spin" fill="#000" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M13 23c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm4.084-.834c0-.483-.393-.875-.875-.875s-.875.392-.875.875.393.875.875.875.875-.392.875-.875zm3.443-2.387c0-.414-.336-.75-.75-.75s-.75.336-.75.75.336.75.75.75.75-.336.75-.75zm2.343-3.568c0-.391-.317-.708-.708-.708s-.708.317-.708.708.317.708.708.708.708-.317.708-.708zm.796-4.209c0-.368-.298-.667-.666-.667s-.666.298-.666.667.298.667.666.667.666-.298.666-.667zm-.879-4.209c0-.345-.28-.625-.625-.625s-.625.28-.625.625.28.625.625.625.625-.279.625-.625zm-2.427-3.568c0-.322-.262-.583-.583-.583s-.583.261-.583.583.262.583.583.583.583-.261.583-.583zm-3.609-2.385c0-.299-.242-.542-.541-.542s-.541.242-.541.542.242.542.541.542.541-.243.541-.542zm-3.751-.84c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm-4.21.838c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm-3.569 2.385c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm-2.384 3.57c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.447 1-1zm-.837 4.209c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm.837 4.209c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.447 1-1zm2.384 3.569c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.447 1-1zm3.571 2.383c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1z"/></svg>
      </div>
    )
  }

  return (
    <main className="flex flex-row p-6 h-screen w-screen">
      <UserInformationCard user={user}/>
      <WeatherForecastBoard city={user.city} state={user.state} currentWeather={currentWeather} forecastWeather={forecastWeather}/>
    </main>
  );
}
