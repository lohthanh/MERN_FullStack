import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorList from '../components/AuthorList';

const Main = (props) => {


  return (
    <div>
        <h1>Favorite Authors</h1>
        <AuthorList />
    </div>
  )
}

export default Main