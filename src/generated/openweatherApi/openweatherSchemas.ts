/**
 * Generated by @openapi-codegen
 *
 * @version 3.0
 */
export type OneCallResponse = {
  lat?: number;
  lon?: number;
  timezone?: string;
  timezone_offset?: number;
  current?: CurrentWeather;
  minutely?: MinutelyForecast[];
  hourly?: HourlyForecast[];
  daily?: DailyForecast[];
  alerts?: Alert[];
};

export type CurrentWeather = {
  /**
   * Current time, Unix, UTC
   */
  dt?: number;
  /**
   * Sunrise time, Unix, UTC
   */
  sunrise?: number;
  /**
   * Sunset time, Unix, UTC
   */
  sunset?: number;
  /**
   * Temperature
   */
  temp?: number;
  /**
   * Feels like temperature
   */
  feels_like?: number;
  /**
   * Atmospheric pressure on sea level, hPa
   */
  pressure?: number;
  /**
   * Humidity, %
   */
  humidity?: number;
  dew_point?: number;
  /**
   * UV index
   */
  uvi?: number;
  /**
   * Cloudiness, %
   */
  clouds?: number;
  /**
   * Average visibility, metres
   */
  visibility?: number;
  wind_speed?: number;
  /**
   * Wind direction, degrees
   */
  wind_deg?: number;
  /**
   * Wind gust speed
   */
  wind_gust?: number;
  weather?: Weather[];
  rain?: Precipitation;
  snow?: Precipitation;
};

export type MinutelyForecast = {
  /**
   * Time of forecast, Unix, UTC
   */
  dt?: number;
  /**
   * Precipitation volume, mm/h
   */
  precipitation?: number;
};

export type HourlyForecast = {
  dt?: number;
  temp?: number;
  feels_like?: number;
  pressure?: number;
  humidity?: number;
  dew_point?: number;
  uvi?: number;
  clouds?: number;
  visibility?: number;
  wind_speed?: number;
  wind_deg?: number;
  wind_gust?: number;
  weather?: Weather[];
  /**
   * Probability of precipitation
   */
  pop?: number;
  rain?: Precipitation;
  snow?: Precipitation;
};

export type DailyForecast = {
  dt?: number;
  sunrise?: number;
  sunset?: number;
  moonrise?: number;
  moonset?: number;
  moon_phase?: number;
  summary?: string;
  temp?: DailyTemp;
  feels_like?: DailyFeelsLike;
  pressure?: number;
  humidity?: number;
  dew_point?: number;
  wind_speed?: number;
  wind_deg?: number;
  wind_gust?: number;
  weather?: Weather[];
  clouds?: number;
  pop?: number;
  rain?: number;
  snow?: number;
  uvi?: number;
};

export type TimeMachineResponse = {
  lat?: number;
  lon?: number;
  timezone?: string;
  timezone_offset?: number;
  data?: HistoricalWeather[];
};

export type DaySummaryResponse = {
  lat?: number;
  lon?: number;
  tz?: string;
  date?: string;
  units?: string;
  cloud_cover?: {
    afternoon?: number;
  };
  humidity?: {
    afternoon?: number;
  };
  precipitation?: {
    total?: number;
  };
  temperature?: {
    min?: number;
    max?: number;
    afternoon?: number;
    night?: number;
    evening?: number;
    morning?: number;
  };
  pressure?: {
    afternoon?: number;
  };
  wind?: {
    max?: {
      speed?: number;
      direction?: number;
    };
  };
};

export type Weather = {
  id?: number;
  main?: string;
  description?: string;
  icon?: string;
};

export type Precipitation = {
  ["1h"]?: number;
};

export type DailyTemp = {
  day?: number;
  min?: number;
  max?: number;
  night?: number;
  eve?: number;
  morn?: number;
};

export type DailyFeelsLike = {
  day?: number;
  night?: number;
  eve?: number;
  morn?: number;
};

export type Alert = {
  sender_name?: string;
  event?: string;
  start?: number;
  end?: number;
  description?: string;
  tags?: string[];
};

export type HistoricalWeather = {
  dt?: number;
  sunrise?: number;
  sunset?: number;
  temp?: number;
  feels_like?: number;
  pressure?: number;
  humidity?: number;
  dew_point?: number;
  uvi?: number;
  clouds?: number;
  visibility?: number;
  wind_speed?: number;
  wind_deg?: number;
  weather?: Weather[];
  rain?: Precipitation;
  snow?: Precipitation;
};
