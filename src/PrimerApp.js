import React from 'react';
import PropTypes from 'prop-types';

const PrimerApp = ({ datos }) => {

    // console.warn("Probando warns")
    return (
        <>
            <h1>Primera App en React</h1>
            <p>{datos}</p>
        </>
    );
}

PrimerApp.propTypes = {
    datos: PropTypes.string.isRequired
}

export default PrimerApp;