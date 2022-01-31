import { Container } from "react-bootstrap"
import {BsCalendarEvent,BsLinkedin,BsGithub} from 'react-icons/bs'
import {MdAlternateEmail} from 'react-icons/md'


const Footer=()=>{

    return(
        
        <Container fluid className='fixed-bottom foot-icons mx-auto px-0 py-3 mt-5'>
                <Container className='d-flex justify-content-end bg-black w-75'>
                <MdAlternateEmail className='me-3' size={25} onClick={()=>window.open('mailto:marco.saccarola.dev@gmail.com')} />
                <BsLinkedin className='me-3' size={25} onClick={()=>window.open('https://www.linkedin.com/in/marcosaccarola/')} />
                <BsGithub className='' size={25} onClick={()=>window.open('https://github.com/marcosaccarola')} />
            </Container>
        </Container>
    )
}

export default Footer