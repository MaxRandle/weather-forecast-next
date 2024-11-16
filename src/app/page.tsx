"use client";

import "@/styles/globals.css";
import { useGetWeather } from "@/generated/openweatherApi/openweatherComponents";

export default function Home() {
  if (!process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY) {
    throw new Error("NEXT_PUBLIC_OPENWEATHER_API_KEY is required");
  }

  const { data, error, isError, isLoading, isFetched } = useGetWeather({
    queryParams: {
      appid: process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY,
      lat: -37.0,
      lon: 175.0,
      exclude: "minutely,hourly,alerts",
    },
  });

  return (
    <main className="min-h-svh">
      <div className="container mx-auto max-w-[48rem]">
        <pre>
          <code>{isLoading ? "Loading..." : null}</code>
          <code>{isError ? error.toString() : null}</code>
          <code>{isFetched ? JSON.stringify(data, null, 2) : null}</code>
        </pre>
      </div>
    </main>
  );
}
