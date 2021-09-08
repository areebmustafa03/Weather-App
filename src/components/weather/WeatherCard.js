import React from 'react'
import './weathercard.css';
const WeatherCard = ({currentWeather,state}) => {
    
   
    
    const cToF = celsius => {

        let cTemp = celsius;
        return cTemp * 9 / 5 + 32;
    }
   
    const imageURL  = "http://openweathermap.org/img/wn/" + currentWeather.weather[0].icon + "@2x.png";
    const str = currentWeather.weather[0].description;
    const description = str.charAt(0).toUpperCase() + str.slice(1);
    return (
    <div>
        <div className="over-card">
            <div className="card">
                <div className="container">
                
                    
                    {
                        currentWeather.sys.country !== "US" ? 
                        <h1 className="font">
                            
                            <div className="float-left"> {currentWeather.name}, {currentWeather.sys.country} </div>
                            <div className="float-right">{Math.ceil(currentWeather.main.temp)}°C | {Math.ceil(cToF(currentWeather.main.temp))}°F</div>
                            <div className="clear"/> 
                        </h1>
                        
                        : <h1 className="font">
                            <div className="float-left">{currentWeather.name}, {state}, {currentWeather.sys.country}</div>
                            <div className="float-right">{Math.ceil(currentWeather.main.temp)}°C | {Math.ceil(cToF(currentWeather.main.temp))}°F</div>
                            <div className="clear"/> 
                          </h1>
                    }
                    
            
                    <img className="center-img" src={imageURL} alt="Weather-img"/>
                    <div  className="text-center"> 
                        <h2 className="font">{description}</h2>
                        <h3 className="font">Feels Like: {Math.ceil(currentWeather.main.feels_like)}°C | {Math.ceil(cToF(currentWeather.main.feels_like))}°F</h3>
                        <h3 className="font">High: {Math.ceil(currentWeather.main.temp_max)}°C | {Math.ceil(cToF(currentWeather.main.temp_max))}°F </h3>
                        <h3 className="font">Low: {Math.ceil(currentWeather.main.temp_min)}°C | {Math.ceil(cToF(currentWeather.main.temp_min))}°F </h3>
                        <h3 className="font">Humidity: {currentWeather.main.humidity}%</h3>
                        <h3 className="font">Latitude: {currentWeather.coord.lat}</h3>
                        <h3 className="font">Longitude: {currentWeather.coord.lon} </h3>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    );
}


export default WeatherCard;
