import React, { Component } from 'react';


import Char from './char';
import Validate from './Validate';




class Assignment2 extends Component {
    state = {
        userInput: "",
    }

    changeUserInputHandler = (event) => {
        this.setState({ userInput: event.target.value })
    }

    deleteCharHandler = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({ userInput: updatedText });
    }
    render() {
        const charList = this.state.userInput.split('').map((ch, index) => {
            return <Char
                character={ch}
                key={index}
                clicked={() => this.deleteCharHandler(index)} />;
        })
        return (
            <div>
                <input type="text" onChange={this.changeUserInputHandler} value={this.state.userInput} />
                <p>{this.state.userInput}</p>
                <Validate inputLength={this.state.userInput.length} />
                {charList}
            </div>
        );
    }
}

export default Assignment2;
