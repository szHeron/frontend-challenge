"use client"

import UserInformationCard from "@/components/UserInformationCard";
import WeatherForecast from "@/components/WeatherForecast";
import useUser from "@/hooks/useUser";

export default function Home() {
  const {user} = useUser()

  return (
    <main className="flex flex-row p-6 h-screen w-screen">
      <UserInformationCard/>
      <WeatherForecast city={user.city} state={user.state}/>
    </main>
  );
}
