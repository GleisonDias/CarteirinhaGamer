import { useState } from "react";
import {ordemCrono, franquiaOpcoes, plataformasOpcoes, statusOpcoes, notaOpcoes} from '../../constantes/opcoes';
import Campo from "../Campo";
import CampoSelecao from "../CampoSelecao";
import Botao from "../Botao";

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [ordem, setOrdem] = useState('')
    const [franquia, setFranquia] = useState('')
    const [plataforma, setPlataforma] = useState('')
    const [status, setStatus] = useState('')
    const [nota, setNota] = useState('')
    const [data, setData] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoJogoCadastrado({
            nome,
            ordem,
            franquia,
            plataforma,
            status,
            nota,
            data
        })
        setNome('')
        setOrdem('')
        setFranquia('')
        setPlataforma('')
        setStatus('')
        setNota('')
        setData('')
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Cadastrar novo game.</h2>
                <Campo
                    label="Nome do Game"
                    placeholder="Digite o nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoSelecao
                    label="Ordem Cronológica"
                    item={ordemCrono}
                    valor={ordem}
                    aoAlterado={valor => setOrdem(valor)}
                />
                <CampoSelecao
                    label="Franquia"
                    item={franquiaOpcoes}
                    valor={franquia}
                    aoAlterado={valor => setFranquia(valor)}
                />
                <CampoSelecao
                    label="Plataforma"
                    item={plataformasOpcoes.map(p => p.nome)}
                    valor={plataforma}
                    aoAlterado={valor => setPlataforma(valor)}
                />
                <CampoSelecao
                    label="Status"
                    item={statusOpcoes}
                    valor={status}
                    aoAlterado={valor => setStatus(valor)}
                />
                <CampoSelecao
                    label="nota"
                    item={notaOpcoes}
                    valor={nota}
                    aoAlterado={valor => setNota(valor)}
                />
                <Botao>Adicionar a lista</Botao>
            </form>
        </section>
    )
}

export default Formulario