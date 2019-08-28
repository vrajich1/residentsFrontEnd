import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";



function Residents() {
  const [residents, setResidents] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [idState, setId] = useState('');

  const fetchResidents = () => fetch('http://localhost:5000')
  .then(response => response.json())
  .then(residentsList => setResidents(residentsList))

  useEffect(() => {
    fetchResidents()
  }, [])

  const handleForm = (residents) => {
    console.log('handleForm')
    setName(residents.name)
    setAge(residents.age)
    setDateOfBirth(residents.dateOfBirth)
    setId(residents._id)
  }


  const handleEdit = async (e, id) => {
    e.preventDefault()
    console.log('handle edit')
    const update = JSON.stringify({ name, age, dateOfBirth })
    console.log('Update:', update)
    console.log('ID:', idState)
    await fetch("http://localhost:5000/" + idState, {
      method: "PUT",
      body: update,
      headers: {
        'Content-Type': 'application/json',
      }
    })
    fetchResidents()
    document.querySelector('.close').click();

  }

  const handleDelete = async (id) => {
    await fetch('http://localhost:5000/' + id, {
      method: "DELETE"
    })
    fetchResidents()
  }

   return (
    <div className="Residents">
      <Link to="/">Home</Link> { }
      <Link to="/Add">Add New Resident</Link>
      <h2>Our Current Residents</h2>
      {residents.map((resident) => (
        <div className='border' key={resident._id}>
          <h3> {resident.name} </h3>
          <p> {resident.age} </p>
          <p> {resident.dateOfBirth} </p>
          {/* <p> {resident._id} </p> */}

          <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal" onClick={e => handleForm(resident)} >Edit</button>{" "}

          <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Edit Resident</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <form onSubmit={e => handleEdit(e, resident._id)}>
                  <div className="form-group">
                    <label htmlFor="residentsName">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="residentNae"
                      aria-describedby="residentName"
                      placeholder="Resident Name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />

                  </div>

                  <div className="form-group">
                    <label htmlFor="residentsAge">Age</label>
                    <input
                      type="text"
                      className="form-control"
                      id="residentAge"
                      aria-describedby="residentAge"
                      placeholder="Age"
                      value={age}
                      onChange={e => setAge(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="residentsDateOfBirth">Birthday</label>
                    <input
                      type="text"
                      className="form-control"
                      id="residentDateOfBirth"
                      placeholder="DOB"
                      value={dateOfBirth}
                      onChange={e => setDateOfBirth(e.target.value)} />
                  </div>
                  <p>id: {idState}</p>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>

              </div>
            </div>
          </div> {" "}


          <button type="button" className="btn btn-danger" onClick={e => handleDelete(resident._id)} >Delete</button>
        </div>
      ))}
    </div>)
}


export default Residents;
