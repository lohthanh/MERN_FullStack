import React from 'react';
import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
    <Routes>
      <Route path='/product' element={<Main />} />
      <Route path='/product/:id' element={<Detail />} />
      <Route path='/product/:id/edit' element={<Update/>} />
    </Routes>

    </div>
  );
}

export default App;
