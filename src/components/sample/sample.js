import React from 'react';
import './sample.css'

const Sample = (props) =>{
    return(
        <React.Fragment>
            <h3>{props.message}</h3>
            <p>Made with react</p>
        </React.Fragment>
    );
}

export default Sample