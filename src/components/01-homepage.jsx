import { useState } from "react"
import { Col, Container, Form, FormControl, Row } from "react-bootstrap"


const HomePage=()=>{
    const[position,setPosition]=useState('')
    const[positionData,setPositionData]=useState()

    // const fetchPositionData=(position)=>{
    //     try {
    //         let response=await fetch()
    //         if(response.ok){
    //             let data=await response.json()
    //             let 
    //             setOnlineUsers(onlineUsers)
    //         }else{
    //             console.log('SOMETHING WENT WRONG')
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return(
        <Container fluid className="px-4">
            <Row>
                <Col>
                    <h1>UMBRELLA TIME</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form 
                    // </Col>onSubmit={fetchPositionData}
                    >
                        <FormControl 
                            placeholder='text a place'
                            value={position}
                            onChange={(e)=>setPosition(e.target.value)}
                        />
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage