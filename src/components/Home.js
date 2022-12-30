import React from 'react'
import Employee  from './Employee'
import Table from 'react-bootstrap/Table';
import  Button  from 'react-bootstrap/Button';
import { FaUserPlus } from "react-icons/fa";
import {AiFillDelete } from "react-icons/ai"; 
import {FiEdit } from "react-icons/fi";
import {Link, useNavigate} from 'react-router-dom'

function Home() {

  const history=useNavigate();
  const handleDelete=(id)=>{
    alert('Deleted')
    let index=Employee.map(item=>item.id).indexOf(id);
    Employee.splice(index,1)
    console.log(Employee);
    history('/')
  }
  const handleEdit=(id,uname,age,desg,salary)=>{
    localStorage.setItem("id",id)
    localStorage.setItem("uname",uname)
    localStorage.setItem("age",age)
    localStorage.setItem("desg",desg)
    localStorage.setItem("salary",JSON.stringify(salary));

  }
  return (
    <div>
        <h1 className='text-primary text-center mt-4'>Employee Managment</h1>
        <p className='text-center'>  employee management system is a modern technique to manage the employees’ information. <br/> 
            It gives the complete information about the employee to the management and also it helps in <br/> maintaining the complete organization-related information. 
            The entire organization can be the  <br/> employee management system in a better way.</p>
            <Link to={'/add'} >  <Button id='btn' className='btn btn-success'>Add <FaUserPlus/> </Button> </Link>
       
        <h3 className='mt-5 text-center'> List of Employee</h3>
         <Table className='mt-4' striped bordered hover>
      <thead>
        <tr>
          <th>uname</th>
          <th>Age</th>
          <th>Designation</th>
          <th>salary</th>
        </tr>
      </thead>

      <tbody>
      {
        Employee && Employee.length > 0 ?
        Employee.map(( item)=>(
            <tr>
                <td> {item.uname}</td>
                <td> {item.age}</td>
                <td> {item.desg}</td>
                <td> {item.salary}</td>
               
                <td>

                   <Link to={'./edit'}> 

                 <Button onClick={()=>handleEdit(item.id,item.uname,item.age,item.desg,item.salary)} className='btn btn-secondary'> <FiEdit/> </Button>
                 
                    </Link>

                <Button  className='ms-2' onClick={()=> handleDelete(item.id)}> <AiFillDelete/> </Button> 
                
                </td> 
                
              
            </tr>
        )):'Error'
      }
      </tbody>

    </Table>
    </div>
  )
}

export default Home