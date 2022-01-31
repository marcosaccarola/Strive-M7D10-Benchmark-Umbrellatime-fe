import {Col, Container, Row} from 'react-bootstrap'
import {FiClock} from 'react-icons/fi'
import {BsCalendarEvent} from 'react-icons/bs'

const Widget=({actualData,forecastData})=>{

    return(
        <Container className='main rounded'>

            <Row>
                <Col>
                <Container>{actualData.name}</Container>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Container className='start my-3 bg-secondary rounded'>
                        <img src={`http://openweathermap.org/img/wn/${actualData.weather[0].icon}@4x.png`} alt='Weather icon' />
                        <span className='temperature'>{parseInt(actualData.main.temp-273.15)}°C</span>
                    </Container>
                </Col>
                <Col>
                    <Container className='start forecast my-3 rounded'>
        {forecastData.list.map(f=>
                        <Container>
                            <BsCalendarEvent className='mx-3' />
                            <span className=''>{f.dt_txt.slice(8,10)}</span>
                            <FiClock className='mx-3' />
                            <span className=''>{f.dt_txt.slice(11,13)}</span>
                            <img className='mx-3' src={`http://openweathermap.org/img/wn/${f.weather[0].icon}.png`} alt='Weather icon' />
                            <span className=''>{parseInt(f.main.temp-273.15)}°C</span>
                        </Container>
        )}
                        {/* <Container>
                            <span className='forecast'>{forecastData.list[1].dt_txt.slice(11,16)}</span>
                            <img className='mx-3' src={`http://openweathermap.org/img/wn/${forecastData.list[1].weather[0].icon}.png`} alt='Weather icon' />
                            <span className='forecast'>{parseInt(forecastData.list[1].main.temp-273.15)}°C</span>
                        </Container>
                        <Container>
                            <span className='forecast'>{forecastData.list[2].dt_txt.slice(11,16)}</span>
                            <img className='mx-3' src={`http://openweathermap.org/img/wn/${forecastData.list[2].weather[0].icon}.png`} alt='Weather icon' />
                            <span className='forecast'>{parseInt(forecastData.list[2].main.temp-273.15)}°C</span>
                        </Container>
                        <Container>
                            <span className='forecast'>{forecastData.list[3].dt_txt.slice(11,16)}</span>
                            <img className='mx-3' src={`http://openweathermap.org/img/wn/${forecastData.list[3].weather[0].icon}.png`} alt='Weather icon' />
                            <span className='forecast'>{parseInt(forecastData.list[3].main.temp-273.15)}°C</span>
                        </Container>
                        <Container>
                            <span className='forecast'>{forecastData.list[4].dt_txt.slice(11,16)}</span>
                            <img className='mx-3' src={`http://openweathermap.org/img/wn/${forecastData.list[4].weather[0].icon}.png`} alt='Weather icon' />
                            <span className='forecast'>{parseInt(forecastData.list[4].main.temp-273.15)}°C</span>
                        </Container>
                        <Container>
                            <span className='forecast'>{forecastData.list[5].dt_txt.slice(11,16)}</span>
                            <img className='mx-3' src={`http://openweathermap.org/img/wn/${forecastData.list[5].weather[0].icon}.png`} alt='Weather icon' />
                            <span className='forecast'>{parseInt(forecastData.list[5].main.temp-273.15)}°C</span>
                        </Container>
                        <Container>
                            <span className='forecast'>{forecastData.list[6].dt_txt.slice(11,16)}</span>
                            <img className='mx-3' src={`http://openweathermap.org/img/wn/${forecastData.list[6].weather[0].icon}.png`} alt='Weather icon' />
                            <span className='forecast'>{parseInt(forecastData.list[6].main.temp-273.15)}°C</span>
                        </Container>
                        <Container>
                            <span className='forecast'>{forecastData.list[7].dt_txt.slice(11,16)}</span>
                            <img className='mx-3' src={`http://openweathermap.org/img/wn/${forecastData.list[7].weather[0].icon}.png`} alt='Weather icon' />
                            <span className='forecast'>{parseInt(forecastData.list[7].main.temp-273.15)}°C</span>
                        </Container>
                        <Container>
                            <span className='forecast'>{forecastData.list[8].dt_txt.slice(11,16)}</span>
                            <img className='mx-3' src={`http://openweathermap.org/img/wn/${forecastData.list[8].weather[0].icon}.png`} alt='Weather icon' />
                            <span className='forecast'>{parseInt(forecastData.list[8].main.temp-273.15)}°C</span>
                        </Container> */}
                    </Container>
                </Col>
            </Row>

        </Container>
    )
}

export default Widget