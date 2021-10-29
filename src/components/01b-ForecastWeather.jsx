import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function ForecastWeather({f}) {
    return (
        <ListGroup key={f.dt}>
            <ListGroup.Item className='bg-warning text-dark'>
                FORECAST <small>{f.dt_txt}</small>
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark'>
                {parseInt(f.main.temp-273.15)}°C | {f.weather[0].main} 
                <img src={`http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`} alt={'an icon'} />
            </ListGroup.Item>
        </ListGroup>
    )
}
