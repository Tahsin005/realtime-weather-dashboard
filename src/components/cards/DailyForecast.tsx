import Card from './Card'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getWeather } from '../../api'

type Props = {}

function DailyForecast({}: Props) {
    const { data } = useSuspenseQuery({
        queryKey: ["weather"],
        queryFn: () => getWeather({ lat: 23.8103, lon: 90.4125 }),
    })

    return (
        <Card title="Daily Forecast" childrenClassName="flex flex-col gap-4">
            {data?.daily.map((day) => (
                <div key={day.dt} className="flex justify-between">
                    <p className='w-9'>{new Date(day.dt * 1000).toLocaleDateString(undefined, {
                        weekday: "short",
                    })}</p>
                    <img className='size-8' src={`https://openweathermap.org/payload/api/media/file/${day.weather[0].icon}.png`} alt='weather icon'/>
                    <p>{Math.round(day.temp.day)}°C</p>
                    <p className='text-gray-500/75'>{Math.round(day.temp.min)}°C</p>
                    <p className='text-gray-500/75'>{Math.round(day.temp.max)}°C</p>
                </div>
            ))}
        </Card>
    )
}

export default DailyForecast