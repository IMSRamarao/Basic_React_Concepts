import React, { Component } from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Auxiliary';
import withClass from '../../hoc/withClass';
import AuthContext from '../../context/AutContext';

// import styled from 'styled-components';
// import Radium from 'radium';

// const StyledDiv = styled.div`
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         width: 60%;
//         padding: 16px ;
//         border: 1px solid #eee;
//         box-shadow: 0 2px 3px #ccc;
//         margin: 16px;
//         text-align: center;

//         @media (min-width: 500px ) {
//             width: 400px;
//         }
//     `

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authentication);
    }

    render() {
        const inputStyle = {
            backgroundColor: 'white',
            padding: '8px',
            border: '1px solid blue',
            margin: 'auto',
            borderRadius: '20px'
        };
        console.log('[Person.js] is rendering...');

        return (
            <Aux>
                {/* <AuthContext.Consumer>
                    {context =>
                        context.authentication ? <p>Authenticated!!</p> : <p>Please Log in</p>
                    }
                </AuthContext.Consumer> */}

                {this.context.authentication ? <p>Authenticated!!</p> : <p>Please Log in</p>}
                <p onClick={this.props.click}>I am {this.props.name} with the age {this.props.age}</p>
                <p>{this.props.children}</p>
                <input
                    style={inputStyle}
                    type="text"
                    // ref={(inputEl) => { this.inputElement = inputEl }}
                    ref={this.inputElementRef}
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
};
export default withClass(Person, classes.Person);