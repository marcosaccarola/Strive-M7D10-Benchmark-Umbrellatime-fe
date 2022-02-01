const APP_ID=process.env.REACT_APP_ID
const APP_ID=process.env.REACT_APP_CORS
//************************************** ACTUAL DATA BY POSITION ***************************************
const URL='http://api.openweathermap.org/data/2.5/weather?q='
export const getActualData=async(query,setActualData)=>{
    try {
        let response=await fetch(REACT_APP_CORS+URL+query+'&appid='+APP_ID)
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
export const getForecastData=async(query,setForecastData)=>{
    try {
        let response=await fetch(REACT_APP_CORS+URL_FORECAST+query+'&appid='+APP_ID)
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