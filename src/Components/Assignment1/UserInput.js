import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        padding: '10px',
        margin: '12px auto',
        border: '1px solid grey',
        borderRadius: '10px'
    }
    return (
        <input
            style={inputStyle}
            type="text"
            onChange={props.changed}
            value={props.changedvalue} />
    )
}

export default userInput;