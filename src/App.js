  
import './App.css';
import React, {useState} from 'react';
import Navbar from './components/layout/Navbar';
import Search from './components/searchs/Search';
import axios from 'axios';
import CountryCodes from './CountryCodes.json';
import cityList from './city.list.json';

function App() {
  
  const [loading,setLoading] = useState(false);
  const [currentWeather,setCurrentWeather] = useState(null);
  

  const searchWeather = (city, country) => {
    
    
    // let foundCountry = CountryCodes.codes.find(count => count.name===country);
    // //console.log(foundCountry);
    // console.log(city);
    // console.log(foundCountry.code);
    // let index = cityList.findIndex(function(item,i){
      
    //   return item.country === foundCountry.code && item.name ===city;
    // });
    
  }
  
  return (
    <div>
      <Navbar title='Weather Application'/>
      <Search title='Search' searchWeather = {searchWeather}/>
    </div>
  );
}

export default App;
