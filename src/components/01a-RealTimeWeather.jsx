import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function RealTimeWeather({actualData}) {
    return (
        <ListGroup>
            <ListGroup.Item className='bg-success text-dark'>
                AT THIS EXACT MOMENT
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark text-left text-light'>
                place: {actualData.name}, {actualData.sys.country}
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark text-left text-light'>
                temperature: {parseInt(actualData.main.temp-273.15)}°C | 
                clouds: {actualData.clouds.all}% 
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark text-left text-light'>
                max today: {parseInt(actualData.main.temp_max-273.15)}°C | 
                min today: {parseInt(actualData.main.temp_min-273.15)}°C
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark text-left text-light'>
                humidity: {actualData.main.humidity}% | 
                pressure: {actualData.main.pressure} mbar
            </ListGroup.Item>
        </ListGroup>
    )
}
