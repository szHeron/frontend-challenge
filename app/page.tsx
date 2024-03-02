"use client"

import UserInformationCard from "@/components/UserInformationCard";
import useUser from "@/hooks/useUser";

//implementar context
export default function Home() {
  const {user} = useUser()

  return (
    <main className="flex flex-row p-6 h-screen w-screen">
      <UserInformationCard/>
    </main>
  );
}
