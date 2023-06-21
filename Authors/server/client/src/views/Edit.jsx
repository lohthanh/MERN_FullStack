import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Edit = (props) => {

    const { id } = useParams();
    const [authorName, setAuthorName] = useState('');
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8000/authors/' + id)
            .then(res => {
                setAuthorName(res.data.authorName);
                setLoaded(true);
            })
            .catch(err => console.error(err))
    }, [])

    const updateAuthor = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/authors/edit/' + id, {
           authorName
        })
            .then(res => {console.log(res)
                navigate('/authors')})
            .catch(err => {
                const errors = err.response.data.errors;
                console.log(err)
                errors.authorName ?
                setErrors(errs => ({...errs, 'authorName': errors.authorName.message}))
                : setErrors({authorName: ''})
            });
    }

  return (
    <div>
        {loaded}
        <form onSubmit={updateAuthor}>
            <h2>Update Author</h2>
            <span>{errors.authorName}</span> <br />
            <label>Author's Name: </label><br />
            <input type='text' name='authorName' onChange={(e) => setAuthorName(e.target.value)} value={authorName} /><br />
            <input type='submit' />
        </form>
        <button><Link to="/authors">Cancel</Link></button>

    </div>
  )
}

export default Edit;