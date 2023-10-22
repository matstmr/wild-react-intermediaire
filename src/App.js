import './app.scss';
import iaImage from './ia.png'

function App() {
  return (
    <div className="card">
      <img src={iaImage} alt="" />
      <h3 className="categorie"><span>habilitado</span></h3>
      <h2 className="titre">Valores predeterminados
        en formulario</h2>
      <p>Formulario de campos con
        valores predeterminados</p>

    <span className="menu">...</span>
    </div>
  );
}

export default App;
