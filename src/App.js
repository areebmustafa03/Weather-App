  
import './App.css';
import React, {useState} from 'react';
import Navbar from './components/layout/Navbar';
import Search from './components/searchs/Search';
import axios from 'axios';
import CountryCodes from './CountryCodes.json';
import cityList from './city.list.json';
import USACodes from './USAStates.json';
import WeatherCard from './components/weather/WeatherCard';
import Alert from './components/alert/Alert';
import NoResultFound from './components/weather/NoResultFound';
function App() {
  
  
 
  const [flag , setFlag] = useState(false);
  const [currentWeather,setCurrentWeather] = useState({});
  const [clear , setClear] = useState(true);
  const [alert, setAlert] = useState(null);
  const [found,setFound] = useState(false);
  const [usState, setUSState] = useState("");
  
  const searchWeather =  async (city,country,state) => {

    const string = city.toLowerCase();
    const realCity =  string.charAt(0).toUpperCase() + string.slice(1);
    setClear(true);

    if (country !== "United States"){
        
        let foundCountry = CountryCodes.codes.find(count => count.name===country);
        let index = cityList.findIndex(function(item,i){
          return item.country === foundCountry.code && item.name ===realCity;
        });
        
        if (index === -1){
          
          setFound(true);
        }
        else{
          const id = cityList[index].id;
          const result = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${process.env.REACT_APP_CLIENT_ID}&units=metric`);
          
          setCurrentWeather(result.data);
          setFlag(true);
          setClear(false);
          setFound(false);
        }
       
        
    }
    else{
      
    
      const shortUSName = USACodes.states.find(element => state === element.name);
      
      let index = cityList.findIndex(function(item,i){
        return country==="United States" && item.name === realCity && item.state===shortUSName.abbreviation;
      });
    

      if (index === -1){
        setFound(true);
      }
      else{
        const id = cityList[index].id;
        const result = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${process.env.REACT_APP_CLIENT_ID}&units=metric`);
        setCurrentWeather(result.data);
        setUSState(state);
        setFlag(true);
        setClear(false);
        setFound(false);
      }
   
    }
   

    
  }
  const clearUsers = () => {
    setCurrentWeather({});
    setClear(true);

    
  }
  const noResultFoundClear= () => {
    setFound(false);
  }
  const setAlerts = (msg) => {
    setAlert({msg});
    setTimeout(() => setAlert(null),5000);
  }
  return (
    <div>
      <Navbar title='Weather Application'/>
      <Alert alert={alert}/>
      <Search  searchWeather = {searchWeather} clearUsers={clearUsers} showClear={clear} setAlert={setAlerts}/>
      {
        flag === true && clear !== true && !found?
        <div> 
          <WeatherCard currentWeather={currentWeather} state={usState}  />

        </div>
         :
         <div></div>
      }
      {
        found && <NoResultFound showClear={found} clearUsers={noResultFoundClear} />
      }
      
      
      
     
    </div>
  );
}

export default App;
