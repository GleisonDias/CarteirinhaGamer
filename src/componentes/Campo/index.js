import './Campo.css'

const Campo = (props) => {
    const aoDigitado =(evento) => {
        props.aoAlterado(evento.target.value);
    };

    console.log("valores armazenados no tipo:", props.tipo);
    console.log("valores armazenados no props:", props);
    return(
        <div className="campo">
            <label className='campo-label'>{props.label}</label>
            <input 
                className='campo-input'
                /*type={''}   Mexer depois, quando colocar a data*/
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Campo