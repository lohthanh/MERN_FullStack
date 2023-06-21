import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const PersonList = (props) => {
    // const { removePerson } = props;
    const { people, removePerson } = props;

    // const deletePerson = (personId) => {
    //     axios.delete('http://localhost:8000/api/people/' + personId)
    //         .then(res => {
    //             removePerson(personId)
    //         })
    //         .catch(err => console.error(err));
    // }

    return (
        <div>
            {people.map( (person, i) => {
             return <p key={i}><Link to={'/people/' + person._id} >{person.lastName}, {person.firstName} </Link> || 
             <Link to={`/people/${person._id}/edit`}>Edit</Link>
             {/* <button onClick={(e) => {deletePerson(person._id)}}>Delete</button></p> */}
             <DeleteButton successCallback= {() => removePerson(person._id)} /></p>
            })}
        </div>
    )
}

export default PersonList;