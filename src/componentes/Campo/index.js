import './Campo.css'
const Campo = (props) => {

    const aoDigitado =(evento) => {
        props.aoAlterado(evento.target.value)
    }
    return(
        <div className="Campo">
            <label>
                {props.label}
            </label>
            <input
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Campo