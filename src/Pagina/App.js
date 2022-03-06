import "./App.css"
import Conversor from "../Components/Conversor/Conversor"

function App() {
  return (
    <div className="app">
      <h1 className="titulo">
        CONVERSOR DE MOEDA
      </h1>      
      <Conversor/>
      <p className="paragrafo">
        Converta facilmente dólar norte-americano para reais e vice-versa. 
        O seu uso é bem simples: basta colocar o valor que deseja converter, 
        selecionar qual moeda de origem e a de destino. Pronto, sua conversão 
        já estará feita de forma fácil e rápida!
      </p>
    </div>
  );
}

export default App;
