"use client";

import "@/styles/globals.css";
import { useGetWeather } from "@/generated/openweatherApi/openweatherComponents";

import { DetailedWeatherCard } from "@/components/DetailedWeatherCard";
import { SimpleWeatherCard } from "@/components/SimpleWeatherCard";
import { Card, CardHeader } from "@/components/ui/card";
import { Heading } from "@/components/ui/Heading";

export default function Home() {
  if (!process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY) {
    throw new Error("NEXT_PUBLIC_OPENWEATHER_API_KEY is required");
  }

  const { data: weatherData, isLoading } = useGetWeather({
    queryParams: {
      appid: process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY,
      lat: -37.0,
      lon: 175.0,
      exclude: "minutely,hourly,alerts",
      units: "metric",
    },
  });

  const todayForecast = weatherData?.daily?.[0];
  const tomorrowForecast = weatherData?.daily?.[1];
  const dayAfterTomorrowForecast = weatherData?.daily?.[2];

  return (
    <main className="min-h-svh">
      <div className="container mx-auto mt-12 space-y-2">
        {isLoading ? (
          <Card>
            <CardHeader>
              <Heading level="h3" palette="primary">
                Loading...
              </Heading>
            </CardHeader>
          </Card>
        ) : null}

        {!!todayForecast ? (
          <DetailedWeatherCard dailyForecast={todayForecast} dayName="Today" />
        ) : null}

        {!!tomorrowForecast ? (
          <SimpleWeatherCard
            dailyForecast={tomorrowForecast}
            dayName={"Tomorrow"}
          />
        ) : null}

        {!!dayAfterTomorrowForecast ? (
          <SimpleWeatherCard
            dailyForecast={dayAfterTomorrowForecast}
            dayName={new Date(
              (dayAfterTomorrowForecast?.dt ?? 0) * 1000
            ).toLocaleDateString("en-US", {
              weekday: "long",
            })}
          />
        ) : null}
      </div>
    </main>
  );
}
