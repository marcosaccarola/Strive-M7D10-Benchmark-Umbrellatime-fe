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
            }else{
                console.log('SOMETHING WENT WRONG')
            }
        } catch (error) {
            console.log(error)
        }
        console.log('ACTUAL DATA FROM FETCH',actualData)
    }
    //********************************* FORECAST DATA BY POSITION *******************************************
    const URL_FORECAST='http://api.openweathermap.org/data/2.5/forecast?q='
    const getForecastData=async(query)=>{
        try {
            let response=await fetch(URL_FORECAST+query+APP_ID)
            if(response.ok){
                let data=await response.json()
                setForecastData(data)
            }else{
                console.log('SOMETHING WENT WRONG')
            }
        } catch (error) {
            console.log(error)
        }
        console.log('FORECAST DATA FROM FETCH',forecastData)
    }

    return(
        <Container fluid className="px-4">
            <Row>
                <Col>
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
                    <ListGroup>
                        <ListGroup.Item className='bg-dark'>
                            place: {actualData.name}, {actualData.sys.country}
                        </ListGroup.Item>
                        <ListGroup.Item className='bg-dark'>
                            temperature: {parseInt(actualData.main.temp-273.15)}°C | 
                            clouds: {actualData.clouds.all}% 
                        </ListGroup.Item>
                        <ListGroup.Item className='bg-dark'>
                            max today: {parseInt(actualData.main.temp_max-273.15)}°C | 
                            min today: {parseInt(actualData.main.temp_min-273.15)}°C
                        </ListGroup.Item>
                        <ListGroup.Item className='bg-dark'>
                            humidity: {actualData.main.humidity}% | 
                            pressure: {actualData.main.pressure} mbar
                        </ListGroup.Item>
                    </ListGroup>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage