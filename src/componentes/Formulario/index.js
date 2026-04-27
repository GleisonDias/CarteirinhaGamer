import { useEffect, useState } from "react";
import {ordemCrono, plataformasOpcoes, statusOpcoes, notaOpcoes} from '../../constantes/opcoes';
import Campo from "../Campo";
import CampoSelecao from "../CampoSelecao";
import Botao from "../Botao";
import './Formulario.css'

const Formulario = (props) => {
    const [nome, setNome] = useState('');
    const [ordem, setOrdem] = useState('');
    const [franquia, setFranquia] = useState('');
    const [plataforma, setPlataforma] = useState('');
    const [status, setStatus] = useState('');
    const [nota, setNota] = useState('');
    const [data, setData] = useState('');

    // quando o editingGame mudar, preenche o formulario com os dados 
    useEffect(() => {
        if (props.editingGame) {
            setNome(props.editingGame.nome || '');
            setOrdem(props.editingGame.ordem || '');
            setFranquia(props.editingGame.franquia || '');
            setPlataforma(props.editingGame.plataforma || '');
            setStatus(props.editingGame.status || '');
            setNota(props.editingGame.nota || '');
            setData(props.editingGame.data || '');
        } else {
            // limpa o formulario quando sair da edicao
            setNome(''); setOrdem(''); setFranquia('');
            setPlataforma(''); setStatus(''); setNota(''); setData('');
        }
    }, [props.editingGame]);

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.onSubmit({ nome, ordem, franquia, plataforma, status, nota, data });
        setNome(''); setOrdem(''); setFranquia('');
        setPlataforma(''); setStatus(''); setNota(''); setData('');
    };

    const editing = !!props.editingGame;

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <div className="formulario-header">
                    <div className={`formulario-tag ${editing ? 'editing' : ''}`}>
                        {editing ? '✏️ Editando Game' : 'Adicionar Game'}
                    </div>
                </div>
                {/* <h3>Bem-vindo à minha Carteirinha Gamer! Aqui organizo minha coleção de jogos de várias plataformas e lojas digitais.
                     Cada game tem seu próprio espaço, com status de progresso, plataforma, data de conclusão, classificação e até imagem.</h3>
                    <h3>Explore por franquias ou plataformas e acompanhe o que já foi zerado e o que ainda está na lista de desejos.</h3>*/}
                <Campo
                    label="Nome do Game"
                    placeholder="Ex: The last of us"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    obrigatoriosaved franchises
                />

                <div className="campo-row">
                    <div className="campo">
                        <label className="campo-label">Franquia</label>
                        <input
                            className="campo-input"
                            list="franchise-suggestions" // conecta ao datalist abaixo
                            placeholder="Ex: Bioshock"
                            value={franquia}
                            onChange={e => setFranquia(e.target.value)}
                        />
                        <datalist id="franchise-suggestions">
                            {(props.savedFranchises || []).map(franquia =>(
                                <option key={franquia} value={franquia} /> // cada franquia vira uma sugestao
                            ))}
                        </datalist>
                    </div>

                    <CampoSelecao
                        label="Ordem Cronológica"
                        item={ordemCrono}
                        valor={ordem}
                        aoAlterado={valor => setOrdem(valor)}
                    />
                </div>

                <div>
                    <CampoSelecao
                        label="Plataforma"
                        item={plataformasOpcoes}
                        valor={plataforma}
                        aoAlterado={valor => setPlataforma(valor)}
                    />
                    <CampoSelecao
                        label="Status"
                        item={statusOpcoes}
                        valor={status}
                        aoAlterado={valor => setStatus(valor)}
                    />
                </div>
                
                <Campo
                    label="Data de Conclusão"
                    tipo="date"
                    valor={data}
                    aoAlterado={valor => setData(valor)}
                />

                <CampoSelecao
                    label="Nota"
                    item={notaOpcoes}
                    valor={nota}
                    aoAlterado={valor => setNota(valor)}
                />
                <Botao tipo="submit">
                    {editing ? '✓ Salvar alterações' : '+ Adicionar à Coleção'}
                </Botao>

                {editing && (
                    <button
                        type="button"
                        className="cancel-button"
                        onClick={props.onCancelEdit}
                    >
                        Cancelar
                    </button>
                )}
            </form>
        </section>
    );
};

export default Formulario;