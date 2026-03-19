import './App.css';
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import CardJogo from './componentes/CardJogo';

function App() {

  const [jogos, setJogos] = useState([]);
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState('Todos');

  const atualizaJogos = (jogoNovo) => {
    setJogos([...jogos, jogoNovo]);
  };

  const jogosFiltrados = jogos.filter(jogo =>{
    const buscaOK = jogo.nome.toLowerCase().includes(busca.toLocaleLowerCase());
    const filterOK = filtro === 'Todos' || jogo.status === filtro;
    return buscaOK && filterOK;
  });

  const filtros = ['Todos', 'Zerado', 'Em andamento', 'Desejo jogar', 'Desisti']

    return (
      <div className="app">
        <Banner/>

          <div className="app-main">
            <Formulario onSubmit={atualizaJogos} />

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
                    <CardJogo key= {`${jogo.nome}-${index}`} jogo ={jogo}/>
                  ))
                )}
              </div>
            </div>

          </div>
        <header className="header">
        </header>
      </div>
    );
}

export default App;
