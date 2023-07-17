import Excluido from './component/modal/excluido';
import Cadastro from './pages/cadastro';
import Edicao from './pages/edição';
import HomePage from './pages/home';
import Lista from './pages/lista';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<HomePage/>} />
        <Route path = "/cadastro" element = {<Cadastro/>} />
        <Route path = "/lista" element = {<Lista/>} />
        <Route path = "/lista/edição" element = {<Edicao/>} />
        <Route path = "/lista/excluido" element = {<Excluido/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;