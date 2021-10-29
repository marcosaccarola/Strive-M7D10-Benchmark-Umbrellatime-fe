import { useState } from "react"
import { Col, Container, Form, FormControl, ListGroup, Row } from "react-bootstrap"

const HomePage=()=>{
    const[query,setQuery]=useState('')
    const[actualData,setActualData]=useState()
    const[forecastData,setForecastData]=useState()
    const APP_ID=process.env.REACT_APP_APP_ID
    const handleChange=(e)=>{setQuery(e.target.value)}
    const handleSubmit=(e)=>{
        e.preventDefault()
        getActualData(query)
        getForecastData(query)
    }
    //************************************** ACTUAL DATA BY POSITION ***************************************
    const URL='http://api.openweathermap.org/data/2.5/weather?q='
    const getActualData=async(query)=>{
        try {
            let response=await fetch(URL+query+APP_ID)
            if(response.ok){
                let data=await response.json()
                setActualData(data)
                console.log('ACTUAL DATA FROM FETCH',data)
            }else{
                console.log('SOMETHING WENT WRONG')
            }
        } catch (error) {
            console.log(error)
        }
    }
    //********************************* FORECAST DATA BY POSITION *******************************************
    const URL_FORECAST='http://api.openweathermap.org/data/2.5/forecast?q='
    const getForecastData=async(query)=>{
        try {
            let response=await fetch(URL_FORECAST+query+APP_ID)
            if(response.ok){
                let data=await response.json()
                setForecastData(data)
                console.log('FORECAST DATA FROM FETCH',data)
            }else{
                console.log('SOMETHING WENT WRONG')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Container fluid className="w-50">
            <Row>
                <Col className='my-5 text-dark'>
                    <h1>UMBRELLA TIME</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <FormControl 
                            type="search"
                            value={query}
                            onChange={(e)=>handleChange(e)}
                            placeholder="text a cityname"
                            />
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    {actualData&&(
                    <ListGroup className=''>
                        <ListGroup.Item className='bg-success text-dark'>
                            AT THIS EXACT MOMENT
                        </ListGroup.Item>
                        <ListGroup.Item className='bg-dark text-left'>
                            place: {actualData.name}, {actualData.sys.country}
                        </ListGroup.Item>
                        <ListGroup.Item className='bg-dark text-left'>
                            temperature: {parseInt(actualData.main.temp-273.15)}°C | 
                            clouds: {actualData.clouds.all}% 
                        </ListGroup.Item>
                        <ListGroup.Item className='bg-dark text-left'>
                            max today: {parseInt(actualData.main.temp_max-273.15)}°C | 
                            min today: {parseInt(actualData.main.temp_min-273.15)}°C
                        </ListGroup.Item>
                        <ListGroup.Item className='bg-dark text-left'>
                            humidity: {actualData.main.humidity}% | 
                            pressure: {actualData.main.pressure} mbar
                        </ListGroup.Item>
                    </ListGroup>
                    )}
                </Col>
            </Row>
            <Row>
                <Col>
                    {forecastData&&forecastData.list.map((f)=>(
                        <ListGroup key={f.dt}>
                            <ListGroup.Item className='bg-warning text-dark'>
                                FORECAST <small>{f.dt_txt}</small>
                            </ListGroup.Item>
                            <ListGroup.Item className='bg-dark'>
                                 {parseInt(f.main.temp-273.15)}°C | {f.weather[0].main} 
                                <img src={`http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`} alt={'an icon'} />
                            </ListGroup.Item>
                        </ListGroup>
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage