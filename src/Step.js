import React, {Component} from "react";
import './Step.css';


const Step = (props) => {
    return(
        <div className="step">
            <label>
                krok
            </label>
            <input type='number' onChange={(val)=>{props.changeStep(val)}} />

        </div>
    )
}
export default Step;