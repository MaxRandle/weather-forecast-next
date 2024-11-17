"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heading } from "@/components/ui/Heading";
import { Typography } from "@/components/ui/Typography";
import {
  WiCloud,
  WiCloudy,
  WiDayCloudy,
  WiDayRain,
  WiDaySunny,
  WiFog,
  WiRain,
  WiSnow,
  WiStrongWind,
  WiThunderstorm,
} from "react-icons/wi";
import { TbUvIndex } from "react-icons/tb";
import { DailyForecast } from "@/generated/openweatherApi/openweatherSchemas";

export function TodayWeatherCard({
  todayWeather,
}: {
  todayWeather: DailyForecast;
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
    }[todayWeather.weather?.[0].icon ?? ""] ?? WiDaySunny;

  const calcUvIndex = (uvi: number) => {
    if (uvi < 3) {
      return "Low";
    } else if (uvi < 6) {
      return "Moderate";
    } else if (uvi < 8) {
      return "High";
    } else if (uvi < 11) {
      return "Very High";
    } else {
      return "Extreme";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Typography>Auckland</Typography>
          <Heading level="h2" palette={"primary"}>
            Today
          </Heading>
        </CardTitle>
        <CardDescription>
          <div className="flex gap-4">
            <Heading level={"h1"} palette={"primary"}>
              {Math.round(todayWeather?.temp?.day ?? 0)}°
            </Heading>
            <div>
              <Typography palette={"weaker"}>
                {Math.round(todayWeather?.temp?.max ?? 0)}° ▲
              </Typography>
              <Typography palette={"weaker"}>
                {Math.round(todayWeather?.temp?.min ?? 0)}° ▼
              </Typography>
            </div>
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-center gap-4">
          <DayIcon size={64} />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <WiStrongWind size={32} className="text-base-700" />
              <Typography>
                {Math.round(todayWeather.wind_speed ?? 0)} km/h
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <TbUvIndex size={32} className="text-base-700" />
              <Typography>{calcUvIndex(todayWeather.uvi ?? 0)}</Typography>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}