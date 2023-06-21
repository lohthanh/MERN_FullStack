import React from 'react';
import './App.css';
import Main from './views/Main';
import { Routes, Route, Link } from 'react-router-dom';
import AuthorForm from './components/AuthorForm';
import Edit from './views/Edit';


function App() {

  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<><h1>Welcome to your favorite Author Library!</h1> <h3><Link to='/authors'>All Authors</Link></h3></>} />
      <Route path='/authors' element={<Main />} />
      <Route path='/authors/new' element={<AuthorForm />} />
      <Route path='/authors/edit/:id' element={<Edit />} />
    </Routes>

    </div>
  );
}

export default App;
