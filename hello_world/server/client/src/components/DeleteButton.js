import React from 'react'
import axios from 'axios';

const DeleteButton = (props) => {
    const { successCallback } = props;

    //create handleDelete with api call
    //  const deletePerson = (personId) => {
    //     axios.delete('http://localhost:8000/api/people/' + personId)
    //     .then(res => {successCallback(personId)})
    //     .catch(err=>console.error(err));
    // }

  return (
    <div>
        <button onClick={ successCallback } >Delete</button>
    </div>
  )
}

export default DeleteButton;