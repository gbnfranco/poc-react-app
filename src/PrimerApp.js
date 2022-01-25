import React from 'react';
import PropTypes from 'prop-types';
import CounterApp from './CounterApp';

const PrimerApp = ({ datos,opcional }) => {

    // console.warn("Probando warns")
    return (
        <>
            <h1>Primera App en React</h1>
            <p>{datos}</p>
            <p>{opcional}</p>
            <CounterApp contador={5} />
        </>
    );
}

PrimerApp.propTypes = {
    datos: PropTypes.string.isRequired
}

PrimerApp.defaultProps = {
    opcional: PropTypes.defaultProps = "Esta es información definida por defualt"
}

export default PrimerApp;