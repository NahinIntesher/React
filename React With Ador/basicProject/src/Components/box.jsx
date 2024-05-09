import React from "react";

function Box(object){
    return(
        <div className="hello"
            style = {{backgroundColor: object.color}}>
            {object.name}
            <br/>
            {object.title}
        </div>
    )
}
export default Box;