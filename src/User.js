import userEvent from "@testing-library/user-event";
import React,{Fragment, useEffect,useState} from "react";
import {Table} from "react-bootstrap";
function User(){
    const [user,setUser]=useState([])
    useEffect(()=>{
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{
            data.json().then(result=>{
                setUser(result.data);
            })
        })
    },[])
    return(
       <Fragment>
           <h1>Student Details</h1>
          <Table striped bordered hover>
  <thead>
    <tr>
      <th>S.no</th>
      <th>Name</th>
      <th>Salary</th>
      <th>Age</th>
      
    </tr>
  </thead>
  <tbody>
    {
        user.map((item,i)=>
        <tr>
      <td>{i}</td>
      <td>{item.employee_name}</td>
      <td>{item.employee_salary}</td>
      <td>{item.employee_age}</td>
      
        </tr>
        )
    }
  
  </tbody>
</Table>
       </Fragment>
    )
}
export default User;