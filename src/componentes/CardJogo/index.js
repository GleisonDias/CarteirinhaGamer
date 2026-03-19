import './CardJogo.css';
import {notaOpcoes, statusOpcoes} from '../../constantes/opcoes';

const CardJogo = ({jogo}) => {
    console.log('O valor da props jogo:', jogo);

const status = statusOpcoes[jogo.status] || {classe: 'nao', label: 'Sem Status'};
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
                    <span className={`card-status ${status.classe}`}>{status.label}</span>
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
