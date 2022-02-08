import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { getActualDataFromCoordinates, getForecastDataFromCoordinates } from "../utils/fetch";


const Empty=({setActualData,setForecastData})=>{

    useEffect(() => {
      geo()
    }, []);

    const geo=()=>{
        function success(position){
            const lat=position.coords.latitude
            const lon=position.coords.longitude
            getActualDataFromCoordinates(lat,lon,setActualData)
            getForecastDataFromCoordinates(lat,lon,setForecastData)
        }
        function error() {
            console.log('Impossible to find your position')
        }
        if(!navigator.geolocation) {
            console.log('Geolocation is not supported by your browser')
        }else{
            console.log('Locating...')
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }


    return(
        <>
            <Container className='text-white mt-5'>
                <Row className='text-light'>
                <p>Umbrella Time is waiting for your position</p>
                <p>Please accept to show your position or text a city name</p>
                <p>To avoid homonyms, add your country name, after a comma</p>
                <p className='text-white'>Example: Rome, Italy</p>
                </Row>
            </Container>
        </>
    )
}

export default Empty