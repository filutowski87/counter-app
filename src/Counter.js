import React, {Component} from 'react';
import './Counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
// import Clock from './Clock';
import ClockFunctional from './ClockFunctional';
import Step from './Step';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
        stepValue: 5,
        };

        // binding needed when this.changeValue is a ES5 method
        // this.changeValue = this.changeValue.bind(this);
    }

    //changeValue() { // ES5 method (no this context by default)
    changeValue = (action) => { // ES6 method

        this.setState((prevState, prevProps) => {
            
            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {
                currentCounterValue += 1;
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else {
                currentCounterValue = 0;
            }

            return({
                counterValue: currentCounterValue
            });
        });
    }

    toggleClock = () => {
        this.setState((prevState) => {
            return({
                showClock: !prevState.showClock
            });
        })
    }

    changeStep = (e) => {
        this.setState(()=>{
            return({
                counterValue: parseInt(this.state.counterValue) + parseInt(e.target.value)
            })
        })
    } 
    render() {

        let clockElement = '';

        if (this.state.showClock) {
            // clockElement = <Clock toggleClockMethod={this.toggleClock} />;
            clockElement = <ClockFunctional toggleClockMethod={this.toggleClock} />;
        } else {
            clockElement = <span onClick={this.toggleClock} className="show-clock">show clock</span>;
        }

        return (
            <div className="counter">
                Counter:
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} />
                {clockElement}
                <Step stepValue={ this.state.stepValue} changeStep={this.changeStep}/>
            
            </div>

        );
    }
}

export default Counter;

// function Counter(props) {

//     let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1);

//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {props.initValue}
//             </span>
//         </div>
//     );
// }

// export default Counter;

