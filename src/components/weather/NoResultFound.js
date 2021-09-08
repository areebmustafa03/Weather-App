import React from 'react';
import './noresultfound.css';

const NoResultFound = ({showClear,clearUsers}) => {
    
    const onClickClear= () => {
        clearUsers();
    }
    return (
       
        <div>
             {
                showClear === true &&
                <div className="button-container">
                    <button onClick={onClickClear} className="who-are-we border" >Clear</button>
                </div> 

            }
            <div className="over-card">
                <div className="card">
                    <div className="container"> 

                        <h1 className="font">
                            No Weather found for this city and country.
                        </h1>
                        <h2 className="font-2">Please try to enter a valid city and country. If you choose US, please select valid state.</h2>
                    </div>
                </div>
            </div>
         
        </div>
    )
}

export default NoResultFound;
