import React, { PureComponent } from 'react';

import Person from './Person';

class PersonDetails extends PureComponent {
    // getDerivedStateFromProps(props, state) {
    //     console.log('[PersonDetails.js] getDerivedStateFromProps');
    //     return state;
    // }

    //checking the componets
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[PersonDetails.js] shouldComponentUpdate');
    //     if (nextProps.persons !== this.props.persons ||
    //         nextProps.clicked !== this.props.clicked ||
    //         nextProps.changed !== this.props.changed) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    //     // return true;
    // }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[PersonDetails.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[PersonDetails.js] componentDidUpdate');
        console.log(snapshot);

    }

    render() {
        console.log('[PersonDetails.js] Rendering...');
        return (
            this.props.persons.map((person, index) => {
                return <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)} />
            })
        );
    }

}


export default PersonDetails;

