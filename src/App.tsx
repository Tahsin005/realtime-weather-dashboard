import { useQuery } from "@tanstack/react-query"
import { getWeather } from "./api"
import Card from "./components/cards/Card"
import DailyForecast from "./components/cards/DailyForecast"
import HourlyForecast from "./components/cards/HourlyForecast"

function App() {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 23.8103, lon: 90.4125 }),
  })
  return (
    <div className="flex flex-col gap-8">
      <Card title="Current Weather">
        {JSON.stringify(data?.current)}
      </Card>
      <HourlyForecast />
      <DailyForecast />
    </div>
  )
}

export default App
