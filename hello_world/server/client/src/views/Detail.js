import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

const Detail = (props) => {
    const [person, setPerson] = useState({});
    const { id } = useParams();
    const { removePerson } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => setPerson(res.data))
            .catch(err => console.error(err));
    }, []);

    // const removePerson = () => {
    //     axios.delete('http://localhost:8000/api/people/' + id)
    //         .then(res => console.log(res.data))
    //         .catch(err=>console.error(err));
    // }

    return (
        <div>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
            <p><Link to={'/people/' + person._id + '/edit' }>Edit</Link></p>
            <DeleteButton successCallback={removePerson} />
        </div>
    )


}

export default Detail;