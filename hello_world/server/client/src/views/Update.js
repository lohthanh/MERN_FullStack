import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PersonForm from '../components/PersonForm';


const Update = (props) => {
    // const { id } = useParams();
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    const {id} = useParams();
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/people/' + id)
    //         .then(res => {
    //             setFirstName(res.data.firstName);
    //             setLastName(res.data.lastName);
    //         })
    // }, []);

    useEffect( () => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    })

    // const updatePerson = (e) => {
    //     e.preventDefault();
    //     axios.patch('http://localhost:8000/api/people/' + id, {
    //         firstName,
    //         lastName
    //     })
    //         .then(res => {console.log(res)
    //             navigate('/people')
    //             setFirstName("")
    //             setLastName("")})
    //         .catch(err => console.error(err));
    // }

    const updatePerson = person => {
        axios.patch('http://localhost:8000/api/people/' + id, person)
            .then(res => {console.log(res)
                navigate('/people')
            })
            .catch(err => console.error(err));
    }

  return (
    <div>
        <h1>Update a Person</h1>
        {/* <form onSubmit={updatePerson}>
            <p>
                <label>First Name:</label>
                <input type='text' name='firstName' value={firstName} onChange={(e) => {setFirstName(e.target.value)}} />
            </p>
            <p>
                <label>Last Name:</label>
                <input type='text' name='lastName' value={lastName} onChange={(e) => {setLastName(e.target.value)}} />
            </p>
            <input type='submit' />
        </form>
        <Link to={'/people/'}>Go Home</Link> */}

        {loaded && (<PersonForm onSubmitProp={updatePerson} initialFirstName={person.firstName} initialLastName={person.lastName} /> )}

    </div>
  )
}

export default Update;