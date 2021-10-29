import { useState } from "react"
import { Col, Container, Form, FormControl, Row } from "react-bootstrap"



const HomePage=()=>{
    const[query,setQuery]=useState('')
    const[positionData,setPositionData]=useState([])

    //************************************** POSITION DATA ***************************************
    const handleChange=(e)=>{setQuery(e.target.value)}
    const handleSubmit=(e)=>{
        e.preventDefault()
        getPositionData(query)
    }
    const APP_ID=process.env.REACT_APP_APP_ID
    const URL='http://api.openweathermap.org/data/2.5/weather?q='
    const getPositionData=async(query)=>{
        try {
            let response=await fetch(URL+query+APP_ID)
            if(response.ok){
                let data=await response.json()
                setPositionData(data)
            }else{
                console.log('SOMETHING WENT WRONG')
            }
        } catch (error) {
            console.log(error)
        }
        console.log('POSITION DATA FROM FETCH',positionData)
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
        </Container>
    )
}

export default HomePage