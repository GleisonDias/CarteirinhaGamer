import './Campo.css'

const Campo = (props) => {
    const aoDigitado =(evento) => {
        props.aoAlterado(evento.target.value);
    };

    return(
        <div className="campo">
            <label className='campo-label'>{props.label}</label>
            <input 
                className='campo-input'
                type={props.tipo || 'text'}
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Campo