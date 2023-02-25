// import logo from './logo.svg';
import './App.css';
import SecondSearch from './Components/topbar/secondSearch';
import Cards from './Components/Cards/cards';
import { useState, useEffect } from 'react';

import API_KEY from './API/api';
import Footer from './Components/footer/footer';
import Homepage from './Components/Homepage/homepage';
// import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
// import WeatherPage from './Components/weatherpage/weatherPage';

function App() {
  const [searchValue, setSearchValue] = useState();

  const [data,setData] = useState();
  const [error, setError] = useState(false);

  const locationList = localStorage.getItem('savedLocations');
  if(locationList){
  }else{
    localStorage.setItem('savedLocations',"[]");
  }const list = JSON.parse(locationList);
  
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchValue}&days=6&aqi=no&alerts=no`);
      const weatherData = await response.json();
      if (weatherData.error){
        setError(true);
      if(weatherData.error.code === 1003){
        console.log(weatherData.error);
        setData("Search Something");
        
      }
      if(weatherData.error.code===1006){
        setData(weatherData.error.message);
        
      }
    }
    else{
      setError(false);
      setData(weatherData);
    }
      console.log(weatherData);
      
    };
    fetchUser();
  }, [searchValue]);
  return (
    
    <div className="App">
      <SecondSearch setSearchValue = {setSearchValue}/>
      
      <div className='Card-holder'>
        {error? <h3 className='error-display'> {data} </h3>:

           <Cards weatherdata={data}/> 
          }
      </div>
      <div className='Card-holder'>{
            list.length>=1?<Homepage list={list}/>:<></>
          }</div>
      
      
      <Footer/>
    </div>
  );
}

export default App;
