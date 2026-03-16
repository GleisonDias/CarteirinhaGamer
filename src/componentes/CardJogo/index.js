import './CardJogo.css';

const statusConfig = {
    'Zerado':            { classe: 'zerado' ,    Label: 'Zerado'},
    'Zerei o Remake':    { classe: 'zerado' ,    Label: 'Zerei Remake'},
    'Em andamento':      { classe: 'andamento' ,    Label: 'Em Andamento'},
    'Desejo jogar':      { classe: 'desejo' ,    Label: 'Desejo Jogar'},
    'Näo iniciado':      { classe: 'nao' ,    Label: 'Não Iniciado'},
    'Desisti':           { classe: 'desisti' ,    Label: 'Desisti'},
};

const CardJogo = ({jogo}) => {
    console.log('O valor da props jogo:', jogo);

    return (
        <div className='card-jogo'>
            <div className='card-info'>
                <div className='card-nome'>{jogo.nome}</div>
                <div>{jogo.franquia}</div>

            </div>

        </div>
    );
};

export default CardJogo;
