import React, { Component } from 'react';
// import logo from './logo.svg';


import UserInput from './UserInput';
import UserOutput from './UserOuput';


class Assignment1 extends Component {
    state = {
        username: "Madhu",
    }
    usernameHandler = (event) => {
        this.setState({
            username: event.target.value,
        })
    }
    render() {
        return (
            <div className="App">
                <UserInput changed={this.usernameHandler} changedvalue={this.state.username} />
                <UserOutput userName={this.state.username} />
                <UserOutput userName={this.state.username} />
                <UserOutput userName="Krishna" />
            </div>
        );
    }
}

export default Assignment1;
