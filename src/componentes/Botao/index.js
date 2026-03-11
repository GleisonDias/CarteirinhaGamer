import './Botao.css';

const Botao =(props) => {
    return (
        <button 
            className="botao"
            type={props.tipo || 'button'}
            onClick={props.children}
        >
            {props.children}
        </button>
    );
};
export default Botao