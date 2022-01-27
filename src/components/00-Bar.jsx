import { Container, Navbar } from "react-bootstrap"
import {BsCloudLightningRain} from 'react-icons/bs'
import umbrella from "../assets/umbrella-512.png"


const Bar=()=>{

    return(
        <>
        <Navbar sticky="top" bg="dark" variant="dark">
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
            </Container>
        </Navbar>
        </>
    )
}

export default Bar