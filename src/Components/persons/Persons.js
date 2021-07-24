import React, { Component } from 'react';
import CockPit from './Cockpit';
import withClass from '../../hoc/withClass'
// import Radium, { StyleRoot } from 'radium';
// import styled from 'styled-components';
import classes from './Person.css'
import PersonDetails from './PersonDetails';
import Aux from '../../hoc/Auxiliary';
import AuthContext from '../../context/AutContext';

class Persons extends Component {
    constructor(props) {
        super(props)
        console.log('[Persons.js] Constructor');
    }
    state = {
        persons: [
            { id: "1", name: "madhu", age: 20 },
            { id: "2", name: "Satya", age: 21 },
            { id: "3", name: "Ramarao", age: 18 }
        ],
        otherState: "this is other State",
        showPersons: false,
        showCockpit: true,
        changeCounter: 0,
        authentication: false,
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[Persons.js] componetDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdae');
        // if (nextProps.persons !== this.state.persons) {
        //     return true;
        // } else {
        //     return false;
        // }
        return true;
    }
    componentDidUpdate() {
        console.log('[Persons.js] componetDidUpdate');
    }

    changeNameHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = { ...this.state.persons[personIndex] };
        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1,
            }
        });
    }

    loginHandler = () => {
        const doesAuth = this.state.authentication;
        this.setState({
            authentication: !doesAuth,
        })
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons })
    }

    togglePersons = () => {
        const doesShow = this.state.showPersons
        this.setState({
            showPersons: !doesShow
        })
    }
    render() {
        console.log('[Persons.js] is rendering...');

        // const StyledButton = styled.button`
        //     background-color: ${props => props.alt ? 'red' : 'green'};
        //     color: white;
        //     padding: 10px;
        //     font-weight: bold;
        //     border: 1px solid blue;
        //     font: inherit;
        //     courser: pointer;
        //     margin: 10px auto;

        //     &:hover {
        //         background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        //         color: black;
        //     }
        // `;




        let personDetails = null;
        if (this.state.showPersons) {
            personDetails =
                <PersonDetails
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.changeNameHandler} />

            // buttonStyle.backgroundColor = "red";
            // buttonStyle[':hover'] = {
            //     backgroundColor: 'salmon'
            // }


        }



        return (

            <Aux>
                <button onClick={() => { this.setState({ showCockpit: false }) }}>Remove Cockpit</button>
                <AuthContext.Provider value={{
                    authentication: this.state.authentication,
                    login: this.loginHandler,
                }}>
                    {
                        this.state.showCockpit ?
                            <CockPit
                                title={this.props.appTitle}
                                personsLength={this.state.persons.length}
                                showPersons={this.state.showPersons}
                                clicked={this.togglePersons} >Hello!! </CockPit> : null
                    }

                    {personDetails}
                </AuthContext.Provider>
            </Aux >

        );
    }
}

export default withClass(Persons, classes.Persons);