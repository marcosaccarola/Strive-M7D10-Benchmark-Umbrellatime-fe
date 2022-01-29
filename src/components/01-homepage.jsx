import { useState } from "react"
import { Col, Container, Form, FormControl, ListGroup, Row } from "react-bootstrap"
import { getActualData, getForecastData } from "../utils/fetch"
import RealTimeWeather from "./01a-RealTimeWeather"
import ForecastWeather from "./01b-ForecastWeather"
import Widget from "./02-Widget"

const HomePage=({actualData,forecastData})=>{
    const[query,setQuery]=useState('')
    // const[actualData,setActualData]=useState()
    // const[forecastData,setForecastData]=useState()
    
    const handleChange=(e)=>{setQuery(e.target.value)}
    const handleSubmit=(e)=>{
        e.preventDefault()
        // getActualData(query,setActualData)
        // getForecastData(query,setForecastData)
    }


    return(
        <Container fluid className="">

            <Widget />

            {/* <Row>
                <Col>
                    <ListGroup>
                        <ListGroup.Item className='bg-dark text-white'>
                            UMBRELLA TIME
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row> */}
            {/* <Row>
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
            </Row> */}
            {/* <Row>
                <Col className='text-light'>
                    {actualData&&(
                        <RealTimeWeather actualData={actualData} />
                    )}
                </Col>
            </Row>
            <Row>
                <Col className='text-light'>
                    {forecastData&&forecastData.list.map((f)=>(
                        <ForecastWeather f={f} />
                    ))}
                </Col>
            </Row> */}
        </Container>
    )
}

export default HomePage