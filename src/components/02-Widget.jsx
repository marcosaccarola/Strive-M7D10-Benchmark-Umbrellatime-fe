import {Col, Container, Row, Table} from 'react-bootstrap'
import {FiClock} from 'react-icons/fi'
import {BsCalendarEvent} from 'react-icons/bs'
import {FaWind} from 'react-icons/fa'


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
                        {/* <Container className='text-start text-dark'> */}
                            <Table>
                                <tbody>
        {forecastData.list.map(f=>
                        <>
            {f.dt_txt.slice(11,13)==='00'&&<tr><td colSpan={7}><div className='text-center mt-5'><BsCalendarEvent className='me-3' />{new Date(f.dt_txt.slice(0,10)).toString().slice(0,15)}</div></td></tr>}
                                    <tr>
                                    <td><FiClock className='' /></td>
                                    <td>{f.dt_txt.slice(11,13)}</td>
                                    <td><img className='ms-4' src={`http://openweathermap.org/img/wn/${f.weather[0].icon}.png`} alt='Weather icon' /></td>
                                    <td className='text-start'>{parseInt(f.main.temp-273.15)}°C</td>
                                    <td><FaWind className='ms-4' /></td>
                                    <td>{f.wind.deg}°</td>
                                    <td>{parseInt(f.wind.speed)}Km/h</td>
                                    </tr>
                        {/* </Container> */}
                        </>
        )}
                                </tbody>
                            </Table>
                    </Container>
                </Col>
            </Row>

        </Container>
    )
}

export default Widget