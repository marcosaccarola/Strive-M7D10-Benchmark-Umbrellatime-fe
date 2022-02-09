const APP_ID=process.env.REACT_APP_ID

//************************************** ACTUAL DATA BY CITY ***************************************
const URL='https://api.openweathermap.org/data/2.5/weather?q='
export const getActualData=async(query,setActualData)=>{
    try {
        let response=await fetch(URL+query+'&appid='+APP_ID)
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
//********************************* FORECAST DATA BY CITY *******************************************
const URL_FORECAST='https://api.openweathermap.org/data/2.5/forecast?q='
export const getForecastData=async(query,setForecastData)=>{
    try {
        let response=await fetch(URL_FORECAST+query+'&appid='+APP_ID)
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
//************************************** ACTUAL DATA BY COORDINATES ***************************************
export const getActualDataFromCoordinates=async(lat,lon,setActualData)=>{
    try {
        let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APP_ID}`)
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
//********************************* FORECAST DATA BY COORDINATES *******************************************
export const getForecastDataFromCoordinates=async(lat,lon,setForecastData)=>{
    try {
        let response=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APP_ID}`)
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