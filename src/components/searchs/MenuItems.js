import React,{Fragment} from 'react'
import MenuItem from "@material-ui/core/MenuItem";
import CountryCodes from '../../CountryCodes.json';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const MenuItems = ({handleCountry,country,classes}) => {

    
    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={country}
                onChange={handleCountry}
                label="Age"
            >
            
        
        </Select>
        
      </FormControl>
    );
    
}

export default MenuItems;
