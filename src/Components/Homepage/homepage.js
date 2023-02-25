import { useState, useEffect } from "react";
import API_KEY from "../../API/api";
import Cards from "../Cards/cards";
import './homepage.css';



function Homepage({list}) {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
          const promises = list.map(async item => {
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${item}&days=6&aqi=no&alerts=no`);
            const result = await response.json();
            return result;
          });
    
          const results = await Promise.all(promises);
          setData(results);
        }fetchData();
    }, [list]);
    return (
        <div className="Card-holder">
        {data.map((item, index) => (
            
              <Cards weatherdata={item} key = {index}/>
        
          ))}
        
        </div>
     );
}

export default Homepage;
