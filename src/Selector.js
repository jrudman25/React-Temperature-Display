/*
 * Selector component JavaScript code
 */

import './Selector.css';
import React from "react";

const Selector = (props) => {
        return(
            <div className="Selector">
                <div>
                    <div className="group">
                        <label htmlFor="min">Min</label>
                        <input
                            type="text"
                            id={props.id + "Min"}
                            defaultValue={props.min}
                            onBlur={props.handleBlur}
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="current">Current</label>
                        <input
                            type="text"
                            id={props.id + "Current"}
                            defaultValue={props.current}
                            onBlur={props.handleBlur}
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="max">Maximum</label>
                        <input
                            type="text"
                            id={props.id + "Max"}
                            defaultValue={props.max}
                            onBlur={props.handleBlur}
                        />
                    </div>
                </div>
                <select
                     value={props.scale}
                     onChange={props.handleBlur}
                     id={props.id + "Scale"}
                >
                    <option value={0}>Celsius</option>
                    <option value={1}>Fahrenheit</option>
                    <option value={2}>Kelvin</option>
                </select>
                <br />
            </div>
        );
};

export default Selector;
