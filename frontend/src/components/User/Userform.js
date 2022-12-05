import React, { useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Userform.css'

const Userform = (props) => {
  const [userdata, setUserData] = useState({
    username: "",
    email: "",
    document: ""
  });
  const handleEmail = (event) => {
    setUserData({ ...userdata, email: event.target.value })
  }

  const handleName = (event) => {
    setUserData({ ...userdata, username: event.target.value })

  }
  const handleFileInputChange = (event) => {
   setUserData({...userdata,document:event.target.files[0]})
   
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append("profilepic",userdata.document)
   formData.append("name",userdata.username)
    formData.append("email",userdata.email)
    console.log(formData)
    try {
      await axios.post('/users/create',formData )
    } catch (error) {
      console.log("error in create user " +error)
    } 
  
  }


  return (
    <div className='user_form'>
      <Form className='form_data' onSubmit={handleSubmit} >
        <h1>User form</h1>
        <Form.Group className="mb-2" controlId="formBasicText">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" onChange={handleName}
            value={userdata.username} />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handleEmail}
            value={userdata.email} /> 
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicFile">
          <Form.Label>Document 1</Form.Label>
          <Form.Control type="file" onChange={handleFileInputChange}
       />
        </Form.Group>
        <Button variant="primary" type="submit" className='submit_btn'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Userform