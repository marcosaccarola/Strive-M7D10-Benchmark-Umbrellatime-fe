import {Col, Container, Row} from 'react-bootstrap'
import {FiClock} from 'react-icons/fi'
import {BsCalendarEvent} from 'react-icons/bs'


const Widget=({actualData,forecastData})=>{

    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const now=new Date()

    return(
        <Container className='main rounded'>

            <Row>
                <Col>
                <Container className='temperature-now'>{actualData.name}</Container>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Container className='my-3 bg-secondary rounded'>
                        <img src={`http://openweathermap.org/img/wn/${actualData.weather[0].icon}@4x.png`} alt='Weather icon' />
                        <span className='temperature-now pe-5'>{parseInt(actualData.main.temp-273.15)}°C</span>
                    </Container>
                </Col>

                <Col md={6}>
                    <Container className='my-3 opacity-01 rounded'>
        {forecastData.list.map(f=>
                        <>
                        <Container className='text-start'>
            {f.dt_txt.slice(11,13)==='00'&&
                            // 
                            <div className='me-3'><BsCalendarEvent className='me-3' />{new Date(f.dt_txt.slice(0,10)).toString().slice(0,15)}</div>
            }
                            
                            <FiClock className='ms-5 me-3' />
                            <span className=''>{f.dt_txt.slice(11,13)}</span>
                            <img className='mx-3' src={`http://openweathermap.org/img/wn/${f.weather[0].icon}.png`} alt='Weather icon' />
                            <span className=''>{parseInt(f.main.temp-273.15)}°C</span>
                        </Container>
                        </>
        )}
                    </Container>
                </Col>
            </Row>

        </Container>
    )
}

export default Widget