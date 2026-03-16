import './Botao.css';

const Botao = (props) => {
    return (
        <button 
            className="botao"
            type={props.tipo || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};
export default Botao;