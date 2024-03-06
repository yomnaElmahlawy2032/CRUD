import React,{useState , useEffect} from 'react';
import { Container , Row , Col ,  Button , Table} from 'react-bootstrap';
import {AiFillEdit} from 'react-icons/ai';
import {AiOutlineDelete} from 'react-icons/ai'
import {AiFillEye} from 'react-icons/ai'
import Form from '../components/reusable/Form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const [showForm , setShowForm] = useState(false);
    const [showEdit , setShowEdit] = useState(false);
    const [userData , setUserData] = useState({});
    const [user , setUser] = useState([]);

    //useEffect
    const getData = ()=>{
        axios.get('http://localhost:8000/users')
        .then(res => setUser((res.data)))
        .catch(err=> toast.error(err.message))
    }
    const handleEdit = user =>{
        setUserData(user);
        setShowEdit(true)
    }
    const handleDelete = id =>{
        if(window.confirm("Are You Sure To Delete!?")){
        axios.delete(`http://localhost:8000/users/${id}`)
            .then((res)=>{
                toast.success(`User deleted Successsfully`)
                getData() //to update ta after deleted items
            })
            .catch((err)=>{
                toast.error(err.message)
            })
        }
    }
    const viewProfile = () =>{
        navigate('/Profile')
        
    }
    useEffect(()=>{
        getData();
    } , )
    //navigate[showForm , showEdit]
    const navigate = useNavigate();
    return (
    <Container fluid>
    <Row>
        <Col lg='3' className='vh-100 bg-secondary ms-0'>
            <h4 className='text-center mt-4 text-white-50'>Admin Dashboard</h4>
            <hr className='text-white fw-bolder'/>
            <Button onClick={()=> setShowForm(true)} className='btn-danger btn-sm d-block mt-5 w-50 m-auto'>Add User</Button>
            {
                showForm && <Form show= {showForm} setShow= {setShowForm}/>
            }
            {
                showEdit && <Form  showEdit = {showEdit} setShowEdit = {setShowEdit} userData = {userData}/>
            }
        </Col>
        <Col lg='9'>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>country</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>View Profile</th>
                    </tr>
                </thead>
                <tbody>
                {
                    user.map((item , index )=>(
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.country}</td>
                            <td>
                            <AiFillEdit className='text-info' style={{cursor : 'pointer'}}
                                onClick={()=> handleEdit(item)}
                            />
                            </td>
                            <td><AiOutlineDelete className='text-danger' style={{cursor : 'pointer'}}
                                onClick={() => handleDelete(item.id)}
                            /></td>
                            <td><AiFillEye style={{cursor : 'pointer'}} onClick={()=> viewProfile(item)}/></td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </Col>
    </Row>

    </Container>
    )
}

export default Users
