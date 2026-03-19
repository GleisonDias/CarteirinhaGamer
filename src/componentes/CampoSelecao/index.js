import { useState } from "react";
import './CampoSelecao.css';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

const CampoSelecao = (props) => {
    const [aberto, setAberto] = useState(false);

    const listaItens = Array.isArray(props.item)
        ? props.item
        : Object.keys(props.item ||{});

    const itemAtual = listaItens.find(i => {
        const nome = i.nome || i;
        return nome === props.valor;
    });

    const aoClicarOpcao = (valorSelecionado) => {
        props.aoAlterado(valorSelecionado);
        setAberto(false);
    };
    
    return (
        <div className="campo-selecao">
            <label className="campo-selecao-label">{props.label}</label>
            
            <div className="selecao-trigger" onClick={() => setAberto(!aberto)}>
                <span 
                    className="tag-exibicao"
                    style={{ backgroundColor: itemAtual?.cor || (props.valor ? '#66c0f4' : 'transparent') }}
                >
                    {props.valor || "Selecione..."}
                </span>
                {aberto 
                    ? <MdOutlineKeyboardArrowUp size={24} color="var(--muted)" /> 
                    : <MdOutlineKeyboardArrowDown size={24} color="var(--muted)" />
                }
            </div>
        
            {aberto && (
                <div className="opcoes-container">
                    {listaItens.map((i) => {
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