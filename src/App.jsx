import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './components/Home/Home';
import Hola from './pagina/Hola';
import Leer from './pagina/Leer';
import Ciclo from './pagina/Ciclo';
import SumaCiclo from './pagina/SumaCiclo';
import CalculadoraG from './pagina/calcGCC';
import Par from './pagina/par';
import LeerGCC from './pagina/LeerGCC';
import SumaGcc from './pagina/SumaGcc';
import Piramide from './pagina/Piramide';
import Factorial from './pagina/factorial';
import Raiz from './pagina/Raiz';

const Calculadora = lazy(() => import('./pagina/Calculadora'));
const Suma = lazy(() => import('./pagina/Suma'));

function App() {
  return (
    
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/suma" element={<Suma />} />
          <Route path="/hola" element={<Hola />} />
          <Route path="/leer" element={<Leer />} />
          <Route path="/ciclo" element={<Ciclo />} />
          <Route path="/suma-ciclo" element={<SumaCiclo />} />
          <Route path="/calcGC" element={<CalculadoraG />} />
          <Route path="/par" element={<Par />} />
          <Route path="/leerGcc" element={<LeerGCC />} />
          <Route path="/sumagcc" element={<SumaGcc />} />
          <Route path="/piramide" element={<Piramide />} />
          <Route path="/factor" element={<Factorial />} />
          <Route path="/raiz" element={<Raiz />} />
        </Routes>
      </Suspense>
    </Router>
  );
}


export default App;