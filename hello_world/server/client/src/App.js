import React from 'react';
import './App.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import Detail from './views/Detail';
import Update from './views/Update';


function App() {

  return (
    <div className="App">

    <Routes>
      <Route path='/' element={<h1>Hello!</h1>} />
      <Route path='/people' element={<Main />} />
      <Route path='/people/:id' element={<Detail />} />
      <Route path='/people/:id/edit' element={<Update/>} />
    </Routes>

    </div>
  );
}

export default App;
