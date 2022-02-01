const APP_ID=process.env.REACT_APP_ID

//************************************** ACTUAL DATA BY POSITION ***************************************
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
//********************************* FORECAST DATA BY POSITION *******************************************
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