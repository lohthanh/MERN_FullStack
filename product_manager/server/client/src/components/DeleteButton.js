import React from 'react'

const DeleteButton = (props) => {
    const { successCallback } = props;

  return (
    <div>
        <button onClick={ successCallback }>Delete</button>
    </div>
  )
}

export default DeleteButton;