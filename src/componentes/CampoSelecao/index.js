import { useState } from "react";
import './CampoSelecao.css';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import {coresFranquia} from '../../constantes/opcoes';

const CampoSelecao = (props) => {
    const [aberto, setAberto] = useState(false);

    const listaItens = Array.isArray(props.item)
        ? props.item
        : Object.keys(props.item ||{});

    const itemAtual = Array.isArray(props.item)
        ? props.item.find(i => (i.nome || i) === props.valor)
        : props.item?.[props.valor];

    const aoClicarOpcao = (valorSelecionado) => {
        props.aoAlterado(valorSelecionado);
        setAberto(false);
    };

    const corPorNome = (nome) => {
        const indice = String(nome).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return coresFranquia[indice % coresFranquia.length];
    }
    


    const corAtual = itemAtual?.cor || (props.valor ? corPorNome(props.valor) : undefined);
    
    const corFundo = corAtual ? `${corAtual}22` : 'transparent';
    
    return (
        <div className="campo-selecao">
            <label className="campo-selecao-label">{props.label}</label>
            
            <div className="selecao-trigger" onClick={() => setAberto(!aberto)}>
                <span 
                    className="tag-exibicao"
                    style={{ 
                        border: `1px solid ${corAtual || 'var(--border2)'}`, 
                        color: corAtual || 'var(--muted)',
                        backgroundColor: corFundo
                    }}
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
                        const corItem = Array.isArray(props.item)
                            ? (i.cor || corPorNome(String(nome)))
                            : (props.item?.[nome]?.cor || corPorNome(String(nome)));
                        
                        return (
                            <div 
                                key={nome}
                                className={`opcao-item ${props.valor === nome ? 'selecionada' : ''}`}
                                onClick={() => aoClicarOpcao(nome)}
                            >
                                <span 
                                    className="tag-exibicao" 
                                    style={{ 
                                        backgroundColor: `${corItem}33`,
                                        color: corItem,
                                        border: `1px solid ${corItem}55`
                                }}>
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