import './App.css';
import { useState } from 'react';
import Nav from './componentes/Nav';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import CardJogo from './componentes/CardJogo';
import StartsBar from './componentes/StatsBar'; 

function App() {

  const [jogos, setJogos] = useState([]);
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState('Todos');
  const [editingGame, setEditingGame] = useState(null);
  const [savedFranchises, setSavedFranchises] = useState([]); // É uma array que guarda todas as franquias que o usuario ja adicionou.

  const atualizaJogos = (jogoNovo) => {
    if (editingGame !== null) {
      const newGames = jogos.map((j, i) => i === editingGame ? jogoNovo : j);
      setJogos(newGames);
      setEditingGame(null);
    } else {
      setJogos([...jogos, jogoNovo]);
    }
    // Se a franquia for nova, adiciona a lista. 
    // acesso a propriedade - curto circuito - negacao logica - spread operator - imutabilidade - função despachante.
    if (jogoNovo.franquia &&  !savedFranchises.includes(jogoNovo.franquia)) {
      setSavedFranchises([...savedFranchises, jogoNovo.franquia]);
    } {/* Primeiro verifica se jogoNovo.franquia existe. Se sim, o includes verifica se esse valor ja esta em
       franquiasUsadas e retorna true. o !(operador negativo) inverte pra false, impedindo a execuçao.
       Se nao existir, o includes retorna false, o ! inverte pra true, e como os dois lados do && sao true,
       o bloco executa e a funcao despachate adiciona o novo item. */}
  };

  // atualizar só campos especificos do card. (ex: capa)
  const updateCard = (index, updatedGame) => { 
    //se i é igual a index, retorna jogoAtualizado. senao, retorna j.
    setJogos(jogos.map((j, i) => i === index ? updatedGame : j));
  }; 

  const deleteGame = (index) => {
    {/* Filter entrega 2 parametros (item, indice), o Underline recebe o item mas sinaliza que esse parametro sera ignorado. */}
    setJogos(jogos.filter((_, i) => i !== index));
    setEditingGame(null);
  };

  const editGame = (index) => {
    setEditingGame(index);
    // rola até o formulario suavemente
    document.querySelector('.formulario')?.scrollIntoView({
      behavior:'smooth',
      block: 'start'
    });
  };

  const cancelEdit = () => {
    setEditingGame(null);
  };

  const jogosFiltrados = jogos.filter(jogo =>{
    const buscaOK = jogo.nome.toLowerCase().includes(busca.toLocaleLowerCase());
    const filterOK = filtro === 'Todos' || jogo.status === filtro;
    return buscaOK && filterOK;
  });

  const filtros = ['Todos', 'Zerado', 'Em andamento', 'Desejo jogar', 'Desisti']

    return (
      <div className="app">
        <Nav />
        <Banner/>
        <StartsBar jogos={jogos}/>
          <div className="app-main">
            <Formulario 
              onSubmit={atualizaJogos}
              savedFranchises={savedFranchises}
              editingGame={editingGame !== null ? jogos[editingGame] : null}
              onCancelEdit={cancelEdit}
            />

            {/*Lista dos jogos*/}
            <div className="games-panel">
              <div className='games-toolbar'>
                <input
                  className="games-search"
                  placeholder='Buscar game...'
                  value={busca}
                  onChange={e => setBusca(e.target.value)}
                />
                {filtros.map(filtroAtual => (
                  <button 
                  key={filtroAtual}
                  className={`filter-btn ${filtro === filtroAtual ? 'ativo' : ''}`}
                  onClick={() => setFiltro(filtroAtual)}
                  >
                    {filtroAtual}
                  </button>
                ))}
              </div>

              <div className="section-head">
                <h2>Minha Coleção</h2>
                <span className="section-count">{jogosFiltrados.length} games</span> 
              </div>

              <div className="games-grid">
                {jogosFiltrados.length === 0 ? (
                  <div className="empty-state">
                    <div className="empty-icon">🎮</div>
                    <p>Nenhum game ;-;</p>
                  </div>
                ) :(
                  jogosFiltrados.map((jogo, index) => (
                    <CardJogo 
                    key= {`${jogo.nome}-${index}`} 
                    jogo ={jogo}
                    index={index}
                    onDelete={deleteGame}
                    onUpdate={updateCard}
                    onEdit={editGame}
                    isAnyEditing={editingGame !== null}
                    onSave={() => {
                      setEditingGame(null);
                    }}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        <header className="header"></header>
      </div>
    );
};

export default App;
