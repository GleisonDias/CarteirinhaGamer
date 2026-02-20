import { useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import './CampoSelecao.css';

const CampoSelecao = (props) => {
    const [aberto, setAberto] = useState(false);
    const itemAtual = (props.item || []).find(i => {
        const nome = i.nome || i; 
        return nome === props.valor;
    });

    const aoClicarOpcao = (valorSelecionado) => {
        props.aoAlterado(valorSelecionado);
        setAberto(false); 
    };

    return (
        <div className="campo-selecao">
            <label>{props.label}</label>
            
            <div className="selecao-trigger" onClick={() => setAberto(!aberto)}>
                <span className="tag-exibicao" style={{ backgroundColor: itemAtual?.cor || '#555' }}>
                    {props.valor || "Selecione..."}
                </span>
                {aberto ? <MdOutlineKeyboardArrowUp size={24}/> : <MdOutlineKeyboardArrowDown size={24}/>}
            </div>

            {aberto && (
                <div className="opcoes-container">
                    {(props.item || []).map((i) => {

                        const nome = i.nome || i; 
                        const cor = i.cor || 'transparent'; 
                        
                        return (
                            <div 
                                key={nome}
                                className={`opcao-item ${props.valor === nome ? 'selecionada' : ''}`}
                                onClick={() => aoClicarOpcao(nome)}
                            >
                                <span className="tag-exibicao" style={{ backgroundColor: cor }}>
                                    {nome}
                                </span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default CampoSelecao;