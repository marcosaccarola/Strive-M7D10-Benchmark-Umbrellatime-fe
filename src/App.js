import './style/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Bar from './components/00-Bar';
import { useState } from 'react';
import { getActualData, getForecastData } from './utils/fetch';
import Widget from './components/02-Widget';
import Footer from './components/03-Footer';
import Empty from './components/01-Empty';

function App() {

  const[query,setQuery]=useState('')
  const handleChange=(e)=>{setQuery(e.target.value)}
  const handleSubmit=(e)=>{
      e.preventDefault()
      getActualData(query,setActualData)
      getForecastData(query,setForecastData)
  }
  
  const[actualData,setActualData]=useState()
  const[forecastData,setForecastData]=useState()


  return (
    <div className="App">
      <header className="App-header">
        <Bar handleChange={handleChange} handleSubmit={handleSubmit} />
        {actualData&&forecastData
        ? 
        <Widget actualData={actualData} forecastData={forecastData} />
        : 
        <Empty setActualData={setActualData} setForecastData={setForecastData} />
        }
        <Footer />
      </header>
    </div>
  );
}

export default App;
