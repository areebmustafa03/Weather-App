import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import CountryCodes from '../../CountryCodes.json';
function Search({title, searchWeather}) {

    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    //const [isUS, setISUS] = useState(false);
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            
            margin: theme.spacing(1),
            width: '25ch',
          },
          container: {
            boxSizing: "border-box"
          },

          size: {
              width: "500px"
          },
          formControl: {
            margin: theme.spacing(1),
            minWidth: 120
          },
          selectEmpty: {
            marginTop: theme.spacing(2)
          }
        },
    }));
    const handleCity = event =>{
        setCity(event.target.value);
    }
    const handleCountry = event => {
        
        setCountry(event.target.value);
    }
    const onClick = () =>{

        searchWeather(city, country);
    }
    const classes = useStyles();
    return (
    <div class={classes.container}>
        <div className={row}>
        <div className={col75}>
            <form className={classes.root} noValidate autoComplete="off">
                
                <TextField id="outlined-basic" label="Enter city" variant="outlined" style={cityStyle} onChange={handleCity}/>
            </form>
        </div>
        
            <FormControl variant="outlined" className={classes.formControl}>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={country}
                        onChange={handleCountry}
                        label="Age"
                    >
                    {
                        CountryCodes.codes.map((a,b) => (
                            
                           <MenuItem value={a.name} key={b}> {a.name}</MenuItem>
                        ))
                    }
                     </Select>
             </FormControl>
            <Button variant="contained"  onClick={onClick} style={buttonStyle}>
                {title}
            </Button>

            
    </div>
    
    )
}
const col75 = {
    float: "right",
    width: "75%",
    marginTop: "6px"
};
const cityStyle = {
    width:"500px",
    resize: "vertical"
    
};
const row ={
    "&:after":{
        content: "",
        display: "table",
        clear: "both"
    }
}
const buttonStyle = {
    backgroundColor: "#fe4a49",
    color: "white",
    position: "absolute",
    height: "50px",
    width: "1025px",
    top: "19%",
    right: "23%"

};
export default Search;