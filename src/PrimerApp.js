
const PrimerApp = ({ datos = "El componente padre no envío la información"}) => {

    return (
        <>
            <h1>Primera App en React</h1>
            <p>{datos}</p>
        </>
    );
}

export default PrimerApp;