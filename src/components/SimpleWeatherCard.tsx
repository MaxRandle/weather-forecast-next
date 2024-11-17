"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/Heading";
import {
  WiCloud,
  WiCloudy,
  WiDayCloudy,
  WiDayRain,
  WiDaySunny,
  WiFog,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";
import { DailyForecast } from "@/generated/openweatherApi/openweatherSchemas";

export function SimpleWeatherCard({
  dailyForecast,
  dayName,
}: {
  dailyForecast: DailyForecast;
  dayName: string;
}) {
  if (!process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY) {
    throw new Error("NEXT_PUBLIC_OPENWEATHER_API_KEY is required");
  }

  const DayIcon =
    {
      "01d": WiDaySunny,
      "02d": WiDayCloudy,
      "03d": WiCloud,
      "04d": WiCloudy,
      "09d": WiRain,
      "10d": WiDayRain,
      "11d": WiThunderstorm,
      "13d": WiSnow,
      "50d": WiFog,
    }[dailyForecast.weather?.[0].icon ?? ""] ?? WiDaySunny;

  return (
    <Card>
      <CardHeader className="py-3">
        <CardTitle className="flex items-center justify-between">
          <Heading level="h3" palette={"primary"}>
            {dayName}
          </Heading>
          <div className="flex gap-2 items-center">
            <Heading level={"h2"} palette={"primary"}>
              {Math.round(dailyForecast?.temp?.day ?? 0)}°
            </Heading>
            <DayIcon size={48} />
          </div>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
