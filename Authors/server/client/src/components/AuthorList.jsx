import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthorList.module.css';
import axios from 'axios';


const AuthorList = (props) => {

    const { authors } = props;
    const [authorsList, setAuthorsList] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8000/authors')
            .then(res => {
                console.log(res)
                setAuthorsList(res.data)
            })
            .catch(err => console.error(err));
    }, [])

    const deleteAuthor = authorId => {
        axios.delete('http://localhost:8000/authors/' + authorId)
            .then(res => console.log(res.data))
            .catch(err => console.error(err))
        setAuthorsList(authorsList.filter(author => author._id !== authorId));
    }

    return (
        <div>
            <p><Link to='/authors/new'>Add New Author</Link></p>

        <div className={styles.display}>
            <table >
                <thead>
                <tr>
                    <th>Authors</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {
                        authorsList.map( (author, index) => {
                         return <tr key={index}>
                                <td>{author.authorName}</td>
                                <td>
                                    <button><Link to={`/authors/edit/${author._id}`} >Edit</Link></button>
                                    <button onClick={ (e) => deleteAuthor(author._id) }>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default AuthorList;