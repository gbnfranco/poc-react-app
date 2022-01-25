
const PrimerApp = () => {

    const contenido = "Este ejercicio muestra el contenido de una variable llamada contenido";
    const objeto = {
        id: 1,
        nombre: "Gibrann"
    }
    return (
        <>
            <h1>Primera App en React</h1>
            <p>{contenido}</p>
            <p>Tambien es posible agregar objetos con JSON.stringify comó se muestra a continuación {JSON.stringify(objeto,null,3)}</p>
        </>
    );
}

export default PrimerApp;