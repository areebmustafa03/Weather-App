import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Search({title}) {
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
          size: {
              width: "500px"
          }
        },
    }));
    const classes = useStyles();
    return (
    <div>
            <form className={classes.root} noValidate autoComplete="off">
                
                <TextField id="outlined-basic" label="Enter city" variant="outlined" style={cityStyle}/>
                <TextField id="outlined-basic" label="Enter country" variant="outlined" style={countryStyle}/>
            </form>
            <Button variant="contained"  style={buttonStyle}>
                {title}
            </Button>
    </div>
    
    )
}
const cityStyle = {
    width:"500px",
    position: "absolute",
    top: "10%",
    right: "50%"   
    
};
const countryStyle = {
    width: "500px",
    position: "absolute",
    top: "10%",
    right: "23%" 
};
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