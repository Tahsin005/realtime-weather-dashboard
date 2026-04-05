import Card from './Card'
import { getWeather } from '../../api'
import { useSuspenseQuery } from '@tanstack/react-query'
import WeatherIcon from '../WeatherIcon'

type Props = {}

export default function HourlyForecast({}: Props) {
    const { data } = useSuspenseQuery({
        queryKey: ["weather"],
        queryFn: () => getWeather({ lat: 23.8103, lon: 90.4125 }),
    })
    return (
        <Card title="Hourly Forecast (48 Hours)" childrenClassName="flex flex-row gap-4 overflow-x-scroll">
            {data?.hourly.map((hour) => (
                <div key={hour.dt} className="flex flex-col gap-2 items-center p-2">
                    <p className='whitespace-nowrap'>{new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                    })}</p>
                    <WeatherIcon icon={hour.weather[0].icon} />
                    <p>{Math.round(hour.temp)}°C</p>
                </div>
            ))}
        </Card>
    )
}