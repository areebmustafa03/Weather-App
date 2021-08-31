
import React from 'react'
import {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import { loadCSS } from 'fg-loadcss';

function Navbar() {

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }));
    const classes = useStyles();
    useEffect(() => {
      const node = loadCSS(
        'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
        document.querySelector('#font-awesome-css'),
      );
  
      return () => {
        node.parentNode.removeChild(node);
      };
    }, []);
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                
                <Typography variant="h6" className={classes.title}>
                <Icon className="fas fa-bolt" style ={{marginRight:"-2px", position: "relative", top:"6px"}}/>
            
                    Weather Application
                </Typography>
                
                </Toolbar>
            </AppBar>
            
        </div>
    );
}
export default Navbar;
