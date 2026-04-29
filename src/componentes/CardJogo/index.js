import { useEffect, useState } from 'react';
import './CardJogo.css';
import {notaOpcoes, statusOpcoes} from '../../constantes/opcoes';

const CardJogo = ({jogo, index, onDelete, onUpdate, onEdit, isAnyEditing}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [urlPanel, setUrlPanel] = useState(false);
    const [imageUrl, setImageUrl] = useState(jogo.imagem || '');
    const [tempUrl, setTempUrl] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    const status = statusOpcoes[jogo.status] || {classe: 'nao', label: 'Sem Status', cor:'#5a6a8a'};
    const qtdEstrelas = Math.max(0, notaOpcoes.indexOf(jogo.nota));

    useEffect(() => {
        if (!isAnyEditing) {
            setIsEditing(false);
            setUrlPanel(false);
            setIsDeleting(false);
        }
    }, [isAnyEditing]);

    const handleOpenUrlPanel = () => {
        setTempUrl(imageUrl);
        setUrlPanel(true);
    };

    const handleConfirmUrl = () => {
        setImageUrl(tempUrl);
        onUpdate(index, { ...jogo, imagem: tempUrl});
        setUrlPanel(false);
    };

    const handleCancelUrl = () => {
        setTempUrl('');
        setUrlPanel(false);
    };

    const handleDelete = () => {
        if (isDeleting) {
            onDelete(index);
        } else {
            setIsDeleting(true);
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
        onEdit(index);
    };

    return (
        <div className={`card-jogo ${isEditing ? 'in-edition' : ''}`}>

            {/* Capa */}
            <div className='card-cover'>
                {imageUrl
                    ?   <img src={imageUrl} alt={jogo.nome} className='card-img'/> 
                    :   <div className='card-cover-bg'>
                            <span className='card-placeholder'>🎮</span>
                            </div>
                }

                {jogo.plataforma && !isEditing && (
                    <span className='card-plataforma'>{jogo.plataforma}</span>
                )}

                {/*botao de editar*/}
                {!isEditing && !isAnyEditing && (
                    <div className='card-hover-overlay'>
                        <button className='card-btn-edit' onClick={handleEdit}>
                            ✏️ Editar
                        </button>
                    </div>
                )}
                {isEditing && !urlPanel && (
                    <div className='card-img-overlay' onClick={handleOpenUrlPanel}>
                        <div className='card-img-icon'>🖼️</div>
                        <span className='card-img-text'>Trocar capa</span>
                    </div>
                )}

                {/* painel da url */}
                {urlPanel && (
                    <div className='card-url-panel'>
                        <p className='card-url-description'>Cole a URL da capa do game</p>
                        <input
                            className='card-url-input'
                            type='url'
                            placeholder='https://...'
                            value={tempUrl}
                            onChange={e => setTempUrl(e.target.value)}
                            autoFocus
                        />
                        <div className='card-url-actions'>
                            <button className='card-btn-confirm' onClick={handleConfirmUrl} >Confirmar</button>
                            <button className='card-btn-close' onClick={handleCancelUrl} >X</button>
                        </div>
                    </div>

                )}
            </div>

            {/* Modo edicao */}
            {isEditing && (
                <div className='card-edit-bar'>
                    {isDeleting ? (
                        <div className='card-confirm'>
                            <span>Tem certeza?</span>
                            <div className='card-confirm-btns'>
                                <button className='card-btn-yes' onClick={handleDelete}>Sim</button>
                                <button className='card-btn-no' onClick={() => setIsDeleting(false)}>Não</button>
                            </div>
                        </div>
                    )   :   (
                        <div className='card-edit-actions'>
                            <button className='card-btn-delete' onClick={handleDelete}>🗑️</button>
                        </div>
                    )}
                </div>
            )}
             {/* informacoes */}
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
