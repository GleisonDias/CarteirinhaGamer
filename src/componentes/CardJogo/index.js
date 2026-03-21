import './CardJogo.css';
import {notaOpcoes, statusOpcoes} from '../../constantes/opcoes';

const CardJogo = ({jogo}) => {
    console.log('O valor da props jogo:', jogo);

const status = statusOpcoes[jogo.status] || {classe: 'nao', label: 'Sem Status', cor:'#5a6a8a'};
const qtdEstrelas = Math.max(0, notaOpcoes.indexOf(jogo.nota));

    return (
        <div className="card-jogo">
            <div className='card-cover'>
                <div className='card-cover-bg'></div>
                {jogo.plataforma &&(
                    <span className='card-plataforma'>{jogo.plataforma}</span>
                )}
            </div>

            <div className="card-info">
                <div className="card-nome">{jogo.nome}</div>
                <div className="card-franquia">🏷️ {jogo.franquia || 'Sem franquia'}</div>

                {jogo.data && (
                    <div className="card-data">📅 {jogo.data}</div>
                )}
                <div className="card-increment">
                    <span 
                        className="card-status"
                        style={{
                            backgroundColor:`${status.cor}33`,
                            color: status.cor,
                            border: `1px solid ${status.cor}55`
                            }}
                    >
                        {status.label}
                    </span>

                    {qtdEstrelas > 0 && (
                        <span className="card-estrelas">
                            {'⭐'.repeat(qtdEstrelas)}
                        </span>
                    )}
                </div>
            </div>

        </div>
    );
};

export default CardJogo;
