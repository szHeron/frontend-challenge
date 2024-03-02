"use client";
import React, { useEffect, useState} from "react";
import api from "@/services/api_weather";

const Hello: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleContent = async () => {
    try {
      const res = await api.get('/v1');
      setMessage(res.data.message);
    } catch (error) {
      console.log(`oops`, error);
    }
  }

  useEffect(() => {
    handleContent();
  }, [])

  return <h1>{message}</h1>;
}

export default Hello;