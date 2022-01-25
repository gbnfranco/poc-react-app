import React from 'react';
import PropTypes from 'prop-types';

const PrimerApp = ({ datos, opcional }) => {

    // console.warn("Probando warns")
    return (
        <>
            <h1>Primera App en React</h1>
            <p>{datos}</p>
            <p>{opcional}</p>
        </>
    );
}

PrimerApp.propTypes = {
    datos: PropTypes.string.isRequired,
    opcional: PropTypes.string
}

PrimerApp.defaultProps = {
    opcional: "Tomamos valor por defecto",
}

export default PrimerApp;