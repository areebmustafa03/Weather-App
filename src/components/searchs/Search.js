import React, {useState,useEffect} from 'react';
import CountryCodes from '../../CountryCodes.json';
import USACodes from '../../USAStates.json';
import './search.css';

function Search({ searchWeather}) {
  
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [isUS, setISUS] = useState(false);
    const [state,setState] = useState("");

    useEffect(()=>{
        
        setCountry("Afghanistan");
    },[]);
    const handleCity = event =>{
        
        setCity(event.target.value);
    }
    const handleState = event =>{
        
        setState(event.target.value);
    }
    const handleCountry = event => {
        
        setCountry(event.target.value);
        if(event.target.value === "United States"){
            
            setISUS(true);
        }
        else{
            setState("");
            setISUS(false);
        }
    }
    const onClick = () =>{
        if (country === "United States"){
            searchWeather(city,country,state);

        }
        else{
            searchWeather(city, country,"");
        }
        
    }
    return (
    <div className="container">
        <form  action="/action_page.php">
            <div className="row">
                
                <div className="col-75">
                    <input  onChange={handleCity} type="text" id="city" name="cityName" placeholder="Enter city" />
                </div>

            </div>
            <div div className="row">
                <div className="col-75">
                    <select onChange={handleCountry} id="country" name="country">
                        {
                            CountryCodes.codes.map((item,index) => (
                        
                                <option key={index} value={item.name}>{item.name}</option>
                                // <MenuItem value={a.name} key={b}> {a.name}</MenuItem>
                             ))
                        }
                    </select>
            </div>
            {
                isUS === true ? < div className="row">
                <div className="col-75">
                    <select onChange={handleState} id="state" name="state">
                        {
                            USACodes.states.map((item,index) => (
                        
                                <option key={index} value={item.name}>{item.name}</option>
                              
                             ))
                        }
                    </select>
                </div>
            </div>: <div></div>
            }
            
            </div>
        </form>
        <div className="button-container">
            <button onClick={onClick} className="who-are-we border" >Search</button>
        </div>
       
    </div>
    
    
    );
}

export default Search;