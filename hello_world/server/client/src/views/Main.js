import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

// export default () => {
//     const [message, setMessage] = useState("Loading...")
//     useEffect(() => {
//         axios.get("http://localhost:8000/api/")
//             .then(res => setMessage(res.data.message))
//             .catch(err => console.log(err))
//     }, []);
//     return (
//         <div>
//             <h2>Message from the backend: {message}</h2>
//         </div>
//     )
// }

const Main = (props) => {
    const [people, setPeople] = useState([]);
    const [errors, setErrors] = useState([]);
    // const [loaded, setLoaded] = useState(false);

    // useEffect( () => {
    //     axios.get('http://localhost:8000/api/people')
    //         .then(res => {
    //             setPeople(res.data);
    //             setLoaded(true);
    //         })
    //         .catch(err => console.error(err));
    // }, []);

    useEffect( () => {
        axios.get('http://localhost:8000/api/people')
            .then(res => {
                setPeople(res.data);
            })
            .catch(err => console.error(err));
    }, []);


    //remove from DOM
    const removePerson = personId => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res => console.log(res.data))
            .catch(err => console.error(err))
        setPeople(people.filter(person=> person._id !== personId))
    }

    const createPerson = person => {
        axios.post('http://localhost:8000/api/people', person)
            .then(res => {
                setPeople([...people, res.data])
            })
            .catch(err => {
                const errorRes = err.response.data.errors;
                const errorArr = [];
                    for (const key of Object.keys(errorRes)) {
                            errorArr.push(errorRes[key].message)
                    }
                    setErrors(errorArr)
                    console.log(errorArr)
            });
    }

    return (
        <div>
            <PersonForm onSubmitProp={createPerson} initialFirstName="" initialLastName="" errors={errors} />
            <hr />
            <PersonList people={people} removePerson={removePerson} />
        </div>
    )

}

export default Main;