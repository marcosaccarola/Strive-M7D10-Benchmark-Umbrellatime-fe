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
                <Col className=''>
                </Col>
            </Row>

        </Container>
    )
}

export default Widget