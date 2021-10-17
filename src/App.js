// 1. IMPORTACIONES
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './components/Home';
import AboutUs from './components/AboutUs';


// 2. COMPONENTE PRINCIPAL / RUTAS FRONTEND

function App() {
  return (
    // FRAGMENTOS
    /**
     * EN REACT EXISTE UNA REGLA DE QUE UN COMPONENTE DEBE DE TENER UNA ÚNICA ETIQUETA DOMINANTE / QUE ENGLOBA TODO
     */
    // FORMATO JSX
    <>
        <Router>
          <Switch>
            <Route exact path="/sobre-nosotros" component={AboutUs}  />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>


    </>
    
  );
}

export default App;
