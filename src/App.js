/*
 * App component JavaScript code
 */

import './App.css';
import React, { useState }  from 'react';
import Selector from "./Selector";
import Display from "./Display";

const App = (props) => {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);
    const [currentValue, setCurrentValue] = useState(20);
    const [currentScale, setCurrentScale] = useState(0);
    let scaleMins = [-273.15, -459.67, 0]; //C, F, K

    return (
        <div className="App">
            <Selector id="input" min={minValue} max={maxValue} current={currentValue} scale={currentScale} handleBlur={handleBlur}/>
            <Display id="output" min={minValue} max={maxValue} current={currentValue} scale={currentScale}/>
        </div>
    );

    function handleBlur(event) {
        let minVal, maxVal, curVal;

        if (isNaN(event.target.value)) {
            switch (event.target.id) {
                case "inputMin":
                    event.target.defaultValue = minValue;
                    event.target.value = minValue;
                    break;
                case "inputMax":
                    event.target.defaultValue = maxValue;
                    event.target.value = maxValue;
                    break;
                case "inputCurrent":
                    event.target.defaultValue = currentValue;
                    event.target.value = currentValue;
                    break;
                default:
                    break;
            }
        }
        else {
            let value = Number(event.target.value);
            switch (event.target.id) {
                case "inputMin":
                    minVal = value;
                    if (minVal < scaleMins[currentScale]) {
                        minVal = scaleMins[currentScale];
                    }
                    if (maxValue < minVal) {
                        maxVal = minVal;
                        setMaxValue(maxVal);
                        document.getElementById('inputMax').value = maxVal;
                    }
                    if (currentValue < minVal) {
                        curVal = minVal;
                        setCurrentValue(curVal);
                        document.getElementById('inputCurrent').value = curVal;
                    }
                    if (currentValue > maxVal) {
                        curVal = maxVal;
                        setCurrentValue(curVal);
                        document.getElementById('inputCurrent').value = curVal;
                    }
                    setMinValue(minVal);
                    event.target.value = minVal;
                    break;
                case "inputMax":
                    maxVal = value;
                    if (maxVal < minValue) {
                        maxVal = minValue;
                    }
                    if (currentValue > maxVal) {
                        curVal = maxVal;
                        setCurrentValue(curVal);
                        document.getElementById('inputCurrent').value = curVal
                    }
                    setMaxValue(maxVal);
                    event.target.value = maxVal;
                    break;
                case "inputCurrent":
                    curVal = value;
                    if (curVal < minValue) {
                        curVal = minValue;
                    }
                    if (curVal > maxValue) {
                        curVal = maxValue;
                    }
                    setCurrentValue(curVal);
                    event.target.value = curVal;
                    break;
                case "inputScale":
                    setCurrentScale(value);
                    if (minValue < scaleMins[value]) {
                        let newMin = scaleMins[value]
                        setMinValue(newMin);
                        document.getElementById('inputMin').value = newMin;
                        if (currentValue < newMin) {
                            setCurrentValue(newMin);
                            document.getElementById('inputCurrent').value = newMin;
                        }
                        if (maxValue < newMin) {
                            setMaxValue(newMin);
                            document.getElementById('inputMax').value = newMin;
                        }
                    }
                    break;
                default:
                    break;
            }
        }
    }
}

export default App;
