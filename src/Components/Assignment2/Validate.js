import React from 'react';

const Validate = (props) => {
    let ValidateMessage = 'Text too short';
    if (props.inputLength >= 5) {
        ValidateMessage = 'Text too long';
    }
    return (
        <div>
            <p>{ValidateMessage}</p>
            {/* {
                props.inputLength >= 5 ? <p>Text too long</p> : <p>Text too short</p>
            } */}
        </div>
    )
}
export default Validate;