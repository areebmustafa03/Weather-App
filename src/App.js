  
import './App.css';
import React, {useState,useEffect} from 'react';
import Navbar from './components/layout/Navbar';
import Search from './components/searchs/Search';
import axios from 'axios';
import CountryCodes from './CountryCodes.json';
import cityList from './city.list.json';
import USACodes from './USAStates.json';
import WeatherCard from './components/weather/WeatherCard';
function App() {
  
  const [loading,setLoading] = useState(false);
  const [currentWeather,setCurrentWeather] = useState([]);

  const [usState, setUSState] = useState("");
  
  // useEffect(() => {
  //   //setLoading(false);
  //   setCurrentWeather([]);
  // }, [loading])
  const foo = () => {
    console.log(loading);
  }
  const searchWeather =   () => {
    setLoading(true);
    
    console.log(loading);
    foo();
    // if (country !== "United States"){
    //     let foundCountry = CountryCodes.codes.find(count => count.name===country);
    //     let index = cityList.findIndex(function(item,i){
    //       return item.country === foundCountry.code && item.name ===city;
    //     });
    //     const id = cityList[index].id;
    //     const result = await axios.get(
    //       `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${process.env.REACT_APP_CLIENT_ID}&units=metric`);
    //     console.log(result);
    //     setCurrentWeather(result.data);
    //     console.log(currentWeather);

    // }
    // else{
      
    //   const shortUSName = USACodes.states.find(element => state === element.name);
    //   console.log(shortUSName);
    //   let index = cityList.findIndex(function(item,i){
    //     return country==="United States" && item.name === city && item.state===shortUSName.abbreviation;
    //   });
    
    //   const id = cityList[index].id;
    //   const result = await axios.get(
    //     `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${process.env.REACT_APP_CLIENT_ID}&units=metric`);
    //   setCurrentWeather("heelo");
    //   setUSState(state);
    // }
   
    
  }
  
  return (
    <div>
      <Navbar title='Weather Application'/>
      <Search  searchWeather = {searchWeather}/>
      {/* <WeatherCard /> */}
      
     
    </div>
  );
}

export default App;
