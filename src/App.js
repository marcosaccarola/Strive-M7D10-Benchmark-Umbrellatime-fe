//import logo from './logo.svg';
import './style/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './components/01-Homepage';
import Bar from './components/00-Bar';
import { useState } from 'react';
import { getActualData, getForecastData } from './utils/fetch';

function App() {

  const[query,setQuery]=useState('')
  const[actualData,setActualData]=useState()
  const[forecastData,setForecastData]=useState()
  
  const handleChange=(e)=>{setQuery(e.target.value)}
  const handleSubmit=(e)=>{
      e.preventDefault()
      getActualData(query,setActualData)
      getForecastData(query,setForecastData)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Bar handleChange={handleChange} handleSubmit={handleSubmit} />
        <HomePage actualData={actualData} forecastData={forecastData} />
      </header>
    </div>
  );
}

export default App;
