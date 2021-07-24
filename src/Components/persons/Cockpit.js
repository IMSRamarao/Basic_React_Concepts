import React from 'react';

import Class from './Cockpit.css'
import { useEffect, useRef, useContext } from 'react'
import AuthContext from '../../context/AutContext';

const cockPit = (props) => {
    const toggleBtnRef = useRef(null);

    const authContext = useContext(AuthContext);
    console.log('[Cockpit.js]', authContext.authentication);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // setTimeout(() => {
        //     alert('saved daye to clould');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] clean up the UseEffect');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] clean up the 2nd UseEffect');
        }
    })

    const classes = [];
    if (props.personsLength <= 2) {
        classes.push(Class.red);  //classes = ['red']
    }
    if (props.personsLength <= 1) {
        classes.push(Class.bold);  //classes = ['red'. 'bold']
    }
    let btnclass = '';
    if (props.showPersons) {
        btnclass = Class.Red;
    }
    return (
        <div className={Class.Cockpit}>
            <h1>{props.title}</h1>
            <p>{props.children}</p>
            <p className={classes.join(' ')}>This is really Working!!</p>
            <button
                ref={toggleBtnRef}
                className={btnclass}
                onClick={props.clicked}>Toggle Persons</button>
            {/* <AuthContext.Consumer>
                {context => <button onClick={context.login}>Login</button>}
            </AuthContext.Consumer> */}
            <button onClick={authContext.login}>Login</button>
        </div>
    );
}
export default React.memo(cockPit);