import React, { useState } from 'react'

const PersonForm = (props) => {
    const { initialFirstName, initialLastName, onSubmitProp, errors } = props;
    //keep track of what is being typed via useState hook
    // const [firstName, setFirstName] = useState(""); 
    // const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    
    //handler when the form is submitted
    // const onSubmitHandler = e => {
    //     //prevent default behavior of the submit
    //     e.preventDefault();
    //     //make a post request to create a new person
    //     axios.post('http://localhost:8000/api/people', {
    //         firstName,
    //         lastName
    //     })
    //         .then(res=>console.log(res))
    //         .catch(err=>console.log(err))
    // }

    //change to refractor code
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({firstName, lastName});
        setFirstName('');
        setLastName('');
    }

    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <div>{errors?.map( (err, i) => <p key={i}>{err}</p>)}</div>
            <p>
                <label>First Name</label><br/>
                <input type="text" name='firstName' onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" name='lastName' onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
            </p>
            <input type="submit"/>
        </form>
    )
}


export default PersonForm;
