import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthorForm = (props) => {

    const [authorName, setAuthorName] = useState('');
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({
        authorName: ''
    })

    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/authors/new', {
            authorName
        })
            .then(res => {console.log(res)
                         navigate('/authors')})
            .catch(err => {
                const errors = err.response.data.errors;
                console.log(err)
                errors.authorName ?
                setFormErrors(errs => ({...errs, 'authorName': errors.authorName.message}))
                : setFormErrors({authorName: ''})
                
            });
    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <h2>Add an Author</h2>
                <span>{formErrors.authorName}</span> <br />
                <label>Author's Name: </label><br />
                <input type='text' name='authorName' onChange={(e) => setAuthorName(e.target.value)} value={authorName} /><br />
                <input type='submit' />
            </form>
            <button><Link to='/authors'>Cancel</Link></button>
        </>
    )
}

export default AuthorForm;