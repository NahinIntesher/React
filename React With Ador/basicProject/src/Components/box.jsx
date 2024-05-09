import React from "react";

function Box(props) {    
    return(
        <div className="hello" style={{backgroundColor: props.color}}>
            {props.name} 
            <br/>
            {props.code}
        </div>
    )   
}

export default Box;