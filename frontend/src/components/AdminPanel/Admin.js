import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import './Admin.css'
import axios from 'axios';
import { useEffect } from 'react';
const Admin = () => {

const [data,setData]=useState([])
  //GET USER DATA
  useEffect(() => {
    const fetchUserdata = async () => {
      try {
       const res= await axios.get('/users/userdata') 
       setData(res.data)
      } catch (error) {
        console.log("error in fetch user data ", +error)
      }
    }
    fetchUserdata();
  }, [])
  console.log(data)
  const noDataMsg= <h2>No user found</h2>
  return (
    <div>
      <Table striped>
        {
          data.length>0 ? ( <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Document-1</th>
            </tr>
          </thead>):noDataMsg
        }
       
        <tbody>
          {
            data.map((userdata,index)=> {
       return(
         <tr key={index+1}>
            <td>{index+1}</td>
            <td>{userdata.name}</td>
            <td>{userdata.email}</td>
            <td>{userdata.document}</td>
         </tr>
              )
            })
          }
         
        </tbody>
      </Table>
    </div>
  )
}

export default Admin