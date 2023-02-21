/*
 * Display component JavaScript code
 */

import './Display.css';
import React from "react";
import {Box, Slider} from "@mui/material";

const Display = (props) => {
    let scaleNames = ["Celsius", "Fahrenheit", "Kelvin" ];
    return(
        <div className="Display">
            <p id="max">{props.max}</p>
            <div className="SliderContainer">
                <Box display="flex" justifyContent="center" sx={{width: 1/2, height: 9/10}}>
                    <Slider
                        sx={{
                            '& input[type="range"]': {
                                WebkitAppearance: 'slider-vertical',
                            }
                        }}
                        orientation="vertical"
                        defaultValue={20}
                        value = {props.current}
                        min = {props.min}
                        max = {props.max}
                        id = {props.id + "Input"}
                    />
                </Box>
            </div>
            <p id="min">{props.min}</p>
            <p id="scale">{props.current + "  " + scaleNames[props.scale]}</p>
        </div>
    );

}

export default Display;