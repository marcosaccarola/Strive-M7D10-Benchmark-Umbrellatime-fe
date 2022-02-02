import { Button, Container, Form, FormControl, Navbar } from "react-bootstrap"
import umbrella from "../assets/umbrella-512.png"


const Bar=({handleChange,handleSubmit})=>{

    return(
        <>
        <Navbar sticky="top" bg="black" variant="dark">
            <Container>

            <Navbar.Brand href="#home">
                <img
                alt='logo'
                src={umbrella}
                width="30"
                height="30"
                className="d-inline-block align-top me-3"
                />{' '}
            umbrella time
            </Navbar.Brand>

            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Cityname"
                className="me-2"
                aria-label="Search"
                onChange={(e)=>handleChange(e)}
                />
                <Button 
                    variant="outline-light"
                    onClick={(e)=>handleSubmit(e)}
                    >Forecast</Button>
            </Form>

            </Container>
        </Navbar>
        </>
    )
}

export default Bar