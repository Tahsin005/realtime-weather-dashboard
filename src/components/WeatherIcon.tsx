import clsx from "clsx"

type Props = {
  icon: string
  className?: string
}

export default function WeatherIcon({ icon, className }: Props) {
    return (
        <img className={clsx('size-8', className)} src={`https://openweathermap.org/payload/api/media/file/${icon}.png`} alt='weather icon'/>
    )
}