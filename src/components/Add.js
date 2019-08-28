import React, {useState} from 'react';
import { Link } from "react-router-dom";

function Add() {
 const [name, setName] = useState('');
 const [age, setAge] = useState('');
 const [dateOfBirth, setDateOfBirth] = useState('');

 const handleSubmit = async (e) =>{
    e.preventDefault()
    const data = JSON.stringify({name, age, dateOfBirth})
    let result = await fetch("http://localhost:5000",{
      method:"POST",
      body:data,
      headers:{
        'Content-Type': 'application/json',
      }
    }) //End Fetch
    console.log(result)
    window.location.replace('./Residents');
 } // End of function form

console.log(name, age, dateOfBirth)

  return (
    <div className="Form">    
    <Link to="/">Home</Link> { }
    <Link to="/Residents">Residents</Link>
    <p>Add A New Resident</p>
    
    <form onSubmit={e=> handleSubmit(e)}>
    <div className="form-group">
    <label htmlFor="residentName">Name</label>
    <input 
        type="text" 
        className="form-control" 
        id="residentName" 
        aria-describedby="emailHelp" 
        placeholder="Resident Name"
        value = {name}
        onChange={e=>setName(e.target.value)}
        />
         
    </div>

    <div className="form-group">
    <label htmlFor="residentAge">Age</label>
    <input 
        type="text" 
        className="form-control" 
        id="residentAge" 
        aria-describedby="residentAge" 
        placeholder="Age"
        value = {age}
        onChange={e=>setAge(e.target.value)}/>
  </div>
  <div className="form-group">
    <label htmlFor="dateOfBirth">DOB</label>
    <input 
    type="text" 
    className="form-control" 
    id="dateOfBirth" 
    placeholder="DOB"
    value = {dateOfBirth}
    onChange={e=>setDateOfBirth(e.target.value)}/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
}

export default Add;
