import {Col, Container, Row} from 'react-bootstrap'

const Widget=({actualData,forecastData})=>{

    return(
        <Container className='main rounded'>

            <Row>
                <Col>{actualData.name}</Col>
            </Row>

            <Row>
                <Col>
                    <Container className='start my-auto bg-secondary rounded'>
                        <img src={`http://openweathermap.org/img/wn/${actualData.weather[0].icon}@4x.png`} alt='Weather icon' />
                        <span className='temperature'>{parseInt(actualData.main.temp-273.15)}°C</span>
                    </Container>
                </Col>
                <Col className='start forecast my-auto bg-secondary rounded'>
                    <Container>
                        <span className='forecast'>{forecastData.list[0].dt_txt.slice(11,16)}</span>
                        <img className='mx-3' src={`http://openweathermap.org/img/wn/${forecastData.list[0].weather[0].icon}.png`} alt='Weather icon' />
                        <span className='forecast'>{parseInt(forecastData.list[0].main.temp-273.15)}°C</span>
                    </Container>
                    <Container>
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
                    </Container>
                </Col>
            </Row>

        </Container>
    )
}

export default Widget