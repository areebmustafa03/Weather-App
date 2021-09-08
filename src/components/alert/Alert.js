
import React from 'react';
import './alert.css';

const Alert = ({alert}) => {
    return (
        alert !== null && 
        
            <div className="alert">
                <strong>Warning!</strong> {alert.msg}
            </div>
      
    )
}

export default Alert;
