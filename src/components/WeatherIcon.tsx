import React from 'react'

type Props = {
  icon: string
}

export default function WeatherIcon({ icon }: Props) {
    return (
        <img className='size-8' src={`https://openweathermap.org/payload/api/media/file/${icon}.png`} alt='weather icon'/>
    )
}