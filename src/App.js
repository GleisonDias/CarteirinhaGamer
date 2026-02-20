import './App.css';
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

const [jogos, setJogos] = useState([])

const atualizaJogos = (jogoNovo) => {
  console.log(jogoNovo)
  
  setJogos([...jogos, jogoNovo]);

  console.log(jogos)

}

  return (
    <div className="App-header">
      <Banner/>
      <Formulario 
        onSubmit={atualizaJogos}
      />
      <section className='Lista-jogos'>
        <h2>Meus Games</h2>
        {jogos && jogos?.map(jogo => (
          <div key={jogo.nome}>
            <strong>{jogo.nome}</strong>
            <span>{jogo.franquia}</span>
            <span>{jogo.status}</span>
            <span>{jogo.nota}</span>
            <span>{jogo.data}</span>
            
          </div>
        ))}

      </section>
      <header className="header">
      </header>
    </div>
  );
}

export default App;
