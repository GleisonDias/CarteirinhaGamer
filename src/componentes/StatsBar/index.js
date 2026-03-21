import './StatsBar.css';

const StatusBar = ({jogos}) => {
    console.log("Conteúdo:", jogos);
    const total = jogos.length;
    const zerados = jogos.filter(jg => jg.status === 'Zerado' || jg.status === 'Zerei o Remake').length;
    const andamento = jogos.filter(jg => jg.status === 'Em andamento').length;
    const desejo = jogos.filter(jg => jg.status === 'Desejo jogar').length;
    const desisti = jogos.filter(jg => jg.status === 'Desisti').length;

    return (
        <div className='stats-bar'>
            <div className='stats-item'>
                <span className='stats-num'>{total}</span>
                <span className='stats-label'>Total de Games</span>       
            </div>

            <div className='stats-item'>
                <span className='stats-num green'>{zerados}</span>
                <span className='stats-label'>Zerado</span>
            </div>

            <div className='stats-item'>
                <span className='stats-num orange'>{andamento}</span>
                <span className='stats-label'>Em Andamento</span>
            </div>

            <div className='stats-item'>
                <span className='stats-num blue'>{desejo}</span>
                <span className='stats-label'>Lista de Desejo</span>
            </div>

            <div className='stats-item'>
                <span className='stats-num red'>{desisti}</span>
                <span className='stats-label'>Desisti</span>
            </div>
        </div>
    );
};

export default StatusBar;