import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './pages/Main'; 
import Repository from './pages/Repository';

export default function GeneralRoutes() {
  return (
    //browser router serve para fazer com que as paginas aparecam na url do navegador após o endereço principal
    <Router>
      {/* Switch serve para que apenas uma rota seja chamada por vez */}
      <Routes>
        {/* cada route e uma pagina da aplicação */}
        <Route exact path="/" element={<Main/>} />
        <Route path="/repository" element={<Repository/>} />
      </Routes>
    </Router>
  );
}
