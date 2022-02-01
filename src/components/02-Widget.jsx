import {Col, Container, Row, Table} from 'react-bootstrap'
import {FiClock} from 'react-icons/fi'
import {BsCalendarEvent} from 'react-icons/bs'
import {FaWind} from 'react-icons/fa'


const Widget=({actualData,forecastData})=>{

    return(
    <Container className='rounded'>

        <Row>
            <Col>
            <Container className='temperature-now'>{actualData.name}</Container>
            </Col>
        </Row>

        <Row>
            <Col md={6}>
                <Container className='my-3 opacity-01 rounded'>
                    <img src={`http://openweathermap.org/img/wn/${actualData.weather[0].icon}@4x.png`} alt='Weather icon' />
                    <span className='temperature-now pe-5'>{parseInt(actualData.main.temp-273.15)}°C</span>
                </Container>
                <Container className='my-3 py-3 d-flex justify-content-center opacity-01 rounded'>
                    {/* <Table> */}
                        <tbody className=''>
                        <tr>
                            <td><span className='text-start d-block pe-5'>Sunrise</span></td>
                            <td><span className='text-end d-block'>{Math.floor(actualData.sys.sunrise/(1000*60*60*60)) + ":" + Math.floor(actualData.sys.sunrise/(1000*60))%60}</span></td>
                            <td><span className='text-start d-block ps-3'></span></td>
                        </tr>
                        <tr>
                            <td><span className='text-start d-block pe-5'>Sunset</span></td>
                            <td><span className='text-end d-block'>{Math.floor(actualData.sys.sunset/(1000*60*60*60)+10) + ":" + Math.floor(actualData.sys.sunset/(1000*60))%60}</span></td>
                            <td><span className='text-start d-block ps-3'></span></td>
                        </tr>
                        <tr><hr/></tr>
                        <tr>
                            <td><span className='text-start d-block pe-5'>Wind direction</span></td>
                            <td><span className='text-end d-block'>{actualData.wind.deg}</span></td>
                            <td><span className='text-start d-block ps-3'>°</span></td>
                        </tr>
                        <tr>
                            <td><span className='text-start d-block pe-5'>Wind speed</span></td>
                            <td><span className='text-end d-block'>{actualData.wind.speed}</span></td>
                            <td><span className='text-start d-block ps-3'>Km/h</span></td>
                        </tr>
                        <tr>
                            <td><span className='text-start d-block pe-5'>Pressure</span></td>
                            <td><span className='text-end d-block'>{actualData.main.pressure}</span></td>
                            <td><span className='text-start d-block ps-3'>mBar</span></td>
                        </tr>                             
                        </tbody>
                    {/* </Table> */}
                </Container>
            </Col>

            <Col md={6}>
                <Container className='my-3 opacity-01 rounded'>
                    <span className='d-block-inline'>Forecast</span>
                        <Table className='text-white'>
                            <tbody>
    {forecastData.list.map(f=>
                    <>
        {f.dt_txt.slice(11,13)==='00'&&
                            <tr>
                            <td colSpan={7}>
                                <div className='text-center mt-5'>
                                <BsCalendarEvent className='me-3 text-dark' />{new Date(f.dt_txt.slice(0,10)).toString().slice(0,15)}
                                </div>
                            </td>
                            </tr>
        }
                            <tr>
                            <td><FiClock className='text-dark' /></td>
                            <td>{f.dt_txt.slice(11,13)}</td>
                            <td>
                                <img className='ms-4' src={`http://openweathermap.org/img/wn/${f.weather[0].icon}.png`} alt='Weather icon' />
                            </td>
                            <td className='text-start'>{parseInt(f.main.temp-273.15)}°C</td>
                            <td><FaWind className='ms-4' /></td>
                            <td>{f.wind.deg}°</td>
                            <td>{parseInt(f.wind.speed)}Km/h</td>
                            </tr>
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