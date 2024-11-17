"use client";

import "@/styles/globals.css";
import { useGetWeather } from "@/generated/openweatherApi/openweatherComponents";

import { TodayWeatherCard } from "@/components/TodayWeatherCard";

export default function Home() {
  if (!process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY) {
    throw new Error("NEXT_PUBLIC_OPENWEATHER_API_KEY is required");
  }

  const {
    data: weatherData,
    error,
    isError,
    isLoading,
    isFetched,
  } = useGetWeather({
    queryParams: {
      appid: process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY,
      lat: -37.0,
      lon: 175.0,
      exclude: "minutely,hourly,alerts",
      units: "metric",
    },
  });

  const todayWeather = weatherData?.daily?.[0];

  console.log(weatherData?.daily?.[0].dt);
  console.log(weatherData?.daily?.[1].dt);
  console.log(weatherData?.daily?.[2].dt);
  console.log(weatherData?.daily?.[3].dt);

  return (
    <main className="min-h-svh">
      <div className="container mx-auto max-w-[48rem] mt-12">
        {!!todayWeather ? (
          <TodayWeatherCard todayWeather={todayWeather} />
        ) : null}

        <pre>
          <code>{isLoading ? "Loading..." : null}</code>
          <code>{isError ? error.toString() : null}</code>
          <code>{isFetched ? JSON.stringify(weatherData, null, 2) : null}</code>
        </pre>
      </div>
    </main>
  );
}
