import { useState } from "react";
import {ordemCrono, franquiaOpcoes, plataformasOpcoes, statusOpcoes, notaOpcoes} from '../../constantes/opcoes';
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

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.onSubmit({ nome, ordem, franquia, plataforma, status, nota, data });
        setNome('');
        setOrdem('');
        setFranquia('');
        setPlataforma('');
        setStatus('');
        setNota('');
        setData('');
    };

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <div className="formulario-header">
                    <div className="formulario-tag">Adicionar Game</div>
                </div>
                {/*<h2>Carteirinha Gamer</h2>
                <h3>Bem-vindo à minha Carteirinha Gamer! Aqui organizo minha coleção de jogos de várias plataformas e lojas digitais.
                     Cada game tem seu próprio espaço, com status de progresso, plataforma, data de conclusão, classificação e até imagem.
                </h3>
                <h3>Explore por franquias ou plataformas e acompanhe o que já foi zerado e o que ainda está na lista de desejos.</h3>
                */}
                <Campo
                    label="Nome do Game"
                    placeholder="Ex: The last of us"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    obrigatorio
                />

                <div className="campo-row">
                    <CampoSelecao
                        label="Franquia"
                        item={franquiaOpcoes}
                        valor={franquia}
                        aoAlterado={valor => setFranquia(valor)}
                    />
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
                <Botao tipo="submit">+ Adicionar à Coleção</Botao>
            </form>
        </section>
    )
}

export default Formulario;