// import { useState } from "react";
// import { Link } from "react-router-dom";
// import WeatherPage from "../weatherpage/weatherPage";
import "./cards.css";

// to display corresponding day / date
const Cards = ({ weatherdata}) => {
  const dateToDay = (dateString) => {
    const date = new Date(dateString);
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayOfWeekString = daysOfWeek[date.getDay()];
    const options = { month: "2-digit", day: "2-digit" };
    const dateStringShort = date.toLocaleDateString("en-US", options);
    return [dateStringShort, dayOfWeekString];
  };
  const addToSaved = ()=>{
    const savedList = localStorage.getItem('savedLocations');
    if(savedList){
      const list = JSON.parse(savedList);
      if(list.includes(weatherdata.location.name)){
        alert("already there buddy")
      }else{
        list.push(weatherdata.location.name);
      localStorage.setItem('savedLocations',JSON.stringify(list));
      }
      
    }
  }

  if (!weatherdata) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="card">
        <div className="city-container">
          <span className="place">
            {weatherdata.location.name}, {weatherdata.location.region},{" "}
            {weatherdata.location.country}
          </span>
        </div>
        <div className="today-forcast">
          <span className="weather-icon-holder">
            <img
              src={weatherdata.current.condition.icon}
              alt=""
              className="weather-icon"
            />
          </span>
          <span className="head-temp">{weatherdata.current.temp_c} °C</span>
          <h3 className="weather-type">{weatherdata.current.condition.text}</h3>
          <span className="today-weekday">
            {dateToDay(weatherdata.forecast.forecastday[0].date)[1]} &nbsp;
            {dateToDay(weatherdata.forecast.forecastday[0].date)[0]}{" "}
          </span>
          <div className="maxMin">
            <span className="Max_temp">
              Max : {weatherdata.forecast.forecastday[0].day.maxtemp_c} °C
            </span>
            <span className="Min_temp">
              Min : {weatherdata.forecast.forecastday[0].day.mintemp_c} °C
            </span>
          </div>
        </div>
        <div className="f-day-forcast">
          <div className="day-1 days">
            <span className="forecast-image-holder">
              <img
                src={weatherdata.forecast.forecastday[1].day.condition.icon}
                alt=""
              />
            </span>
            <span className="sub-temp">
              {weatherdata.forecast.forecastday[1].day.avgtemp_c} °C
            </span>
            <span className="weekday">
              {dateToDay(weatherdata.forecast.forecastday[1].date)[0]}
            </span>
            <span className="weekday">
              {dateToDay(weatherdata.forecast.forecastday[1].date)[1]}
            </span>
          </div>
          <div className="day-2 days">
            <span className="forecast-image-holder">
              <img
                src={weatherdata.forecast.forecastday[2].day.condition.icon}
                alt=""
              />
            </span>
            <span className="sub-temp">
              {weatherdata.forecast.forecastday[2].day.avgtemp_c} °C
            </span>
            <span className="weekday">
              {dateToDay(weatherdata.forecast.forecastday[2].date)[0]}
            </span>
            <span className="weekday">
              {dateToDay(weatherdata.forecast.forecastday[2].date)[1]}
            </span>
          </div>
          <div className="day-3 days">
            <span className="forecast-image-holder">
              <img
                src={weatherdata.forecast.forecastday[3].day.condition.icon}
                alt=""
              />
            </span>
            <span className="sub-temp">
              {weatherdata.forecast.forecastday[3].day.avgtemp_c} °C
            </span>
            <span className="weekday">
              {dateToDay(weatherdata.forecast.forecastday[3].date)[0]}
            </span>
            <span className="weekday">
              {dateToDay(weatherdata.forecast.forecastday[3].date)[1]}
            </span>
          </div>
          <div className="day-4 days">
            <span className="forecast-image-holder">
              <img
                src={weatherdata.forecast.forecastday[4].day.condition.icon}
                alt=""
              />
            </span>
            <span className="sub-temp">
              {weatherdata.forecast.forecastday[4].day.avgtemp_c} °C
            </span>
            <span className="weekday">
              {dateToDay(weatherdata.forecast.forecastday[4].date)[0]}
            </span>
            <span className="weekday">
              {dateToDay(weatherdata.forecast.forecastday[4].date)[1]}
            </span>
          </div>
          <div className="day-5 days">
            <span className="forecast-image-holder">
              <img
                src={weatherdata.forecast.forecastday[5].day.condition.icon}
                alt=""
              />
            </span>
            <span className="sub-temp">
              {weatherdata.forecast.forecastday[5].day.avgtemp_c} °C
            </span>
            <span className="weekday">
              {dateToDay(weatherdata.forecast.forecastday[5].date)[0]}
            </span>
            <span className="weekday">
              {dateToDay(weatherdata.forecast.forecastday[5].date)[1]}
            </span>
          </div>
        </div>
        <div className="Button-Holders">
          <button >View Details</button>
          <button onClick={addToSaved}>Add to Home</button>
        </div>
      </div>
    );
  }
};

export default Cards;
