import React, { useState } from "react";
import PropTypes from 'prop-types'

const CounterApp = ({ contador = 0 }) => {
    const [valor, setContador] = useState(contador);
    const decrementar = () => {
        setContador(valor - 1);
    }
    const reiniciar = () => {
        setContador(contador);
    }
    const incremetar = () => {
        setContador(valor + 1);
    }
    return (
        <>
            <h2>Contador</h2>
            <p>{valor}</p>
            <button onClick={decrementar}>-1</button>
            <button onClick={reiniciar}>reinicio</button>
            <button onClick={incremetar}>+1</button>
        </>
    );
}


CounterApp.propTypes = {
    contador: PropTypes.number
}

export default CounterApp;