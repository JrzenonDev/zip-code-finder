import { FiSearch } from 'react-icons/fi'
import './styles.css'

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu cep..."
        />

        <button className="buttonSearch">
          <FiSearch
            size={25}
            color="#fff"
          />
        </button>
      </div>

      <main className="main">
        <h2>CEP: 12313123</h2>
        <span>Rua teste rua</span>
        <span>Complemento: complemento teste</span>
        <span>Vila Teste</span>
        <span>Ribeirão Pires - SP</span>
      </main>

    </div>
  );
}

export default App;
