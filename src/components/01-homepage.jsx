import { useState } from "react"
import { Col, Container, Form, FormControl, ListGroup, Row } from "react-bootstrap"
import RealTimeWeather from "./01a-RealTimeWeather"
import ForecastWeather from "./01b-ForecastWeather"

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
        <Container fluid className="w-50 mt-5">
            <Row>
                <Col>
                    <ListGroup>
                        <ListGroup.Item className='bg-dark text-white'>
                            UMBRELLA TIME
                        </ListGroup.Item>
                    </ListGroup>
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
                        <RealTimeWeather actualData={actualData} />
                    )}
                </Col>
            </Row>
            <Row>
                <Col>
                    {forecastData&&forecastData.list.map((f)=>(
                        <ForecastWeather f={f} />
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage