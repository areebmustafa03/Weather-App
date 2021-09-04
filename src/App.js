  
import './App.css';
import React, {useState} from 'react';
import Navbar from './components/layout/Navbar';
import Search from './components/searchs/Search';
import axios from 'axios';
import CountryCodes from './CountryCodes.json';
import cityList from './city.list.json';
import USACodes from './USAStates.json';
function App() {
  
  const [loading,setLoading] = useState(false);
  const [currentWeather,setCurrentWeather] = useState(null);
  

  const searchWeather =  async (city, country,state) => {
    
    if (country !== "United States"){
        let foundCountry = CountryCodes.codes.find(count => count.name===country);
        let index = cityList.findIndex(function(item,i){
          return item.country === foundCountry.code && item.name ===city;
        });
        const id = cityList[index].id;
        const result = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${process.env.REACT_APP_CLIENT_ID}&units=metric`);
        console.log(result.data.main);
        console.log(result.data.coord);
        console.log(result.data.weather[0]);
        
    }
    else{
      
      const shortUSName = USACodes.states.find(element => state === element.name);
      console.log(shortUSName);
      let index = cityList.findIndex(function(item,i){
        return country==="United States" && item.name === city && item.state===shortUSName.abbreviation;
      });
      console.log(cityList[index].id);
      const id = cityList[index].id;
      const result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${process.env.REACT_APP_CLIENT_ID}&units=metric`);
      console.log(result.data.main);
      console.log(result.data.coord);
      console.log(result.data.weather[0]);
    }
   
    
  }
  
  return (
    <div>
      <Navbar title='Weather Application'/>
      <Search searchWeather = {searchWeather}/>
    </div>
  );
}

export default App;
