
const CampoSelecao = (props) => {

    const aoSelecionar =(evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="CampoSelecao">
            <label>{props.label}</label>
            <select
                required={props.required}
                value={props.valor}
                onChange={aoSelecionar}
            >
                <option value=""/>
                {props.item.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default CampoSelecao;