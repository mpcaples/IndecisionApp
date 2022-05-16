import React from 'react'; 
import Option from './Option'; 

const Options = (props) => (
    <div>
        {
            props.options.map((option) => (
                <Option 
                    key={option} 
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }  
        {props.options.length === 0 && <p>Please Add an option to get started</p>}
        <button onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
);
export default Options; 