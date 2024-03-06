import React ,{useState , useEffect} from 'react';
import { Container , Row , Col , Card } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
const Form = ({show , setShow , showEdit , setShowEdit , userData}) => {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [country , setCountry] = useState('');
    
    const onSubmit = e =>{
        e.preventDefault();
        if (userData){ //send edit data
            let userEditData = {name , email ,country}
            axios.put(`http://localhost:8000/users/${userData.id}` , userEditData)
            .then((res)=>{
                toast.success(`User Updated Successsfully`)
                setShowEdit(false)
            })
            .catch((err)=>{
                toast.error(err.message)
            })
        }else{ //send data 
        let userData = {name , email ,country}
        axios.post('http://localhost:8000/users' , userData)
        .then((res)=>{
            toast.success(`User Add Successsfully`)
            setShow(false)
        })
        .catch((err)=>{
            toast.error(err.message)
        })
    }
    }
    //useEffect
    useEffect(()=>{
        if(userData){
            setName(userData.name)
            setEmail(userData.email)
            setCountry(userData.country)
        }
    },[userData])

    return (
        <div className='w-100 vh-100 d-flex align-items-center justify-content-center' style={{position : "fixed" , top : "0" , left : 0 , background : "rgba(0,0,0,.85)"}}>
        <div className='bg-danger w-50 vh-50 p-3 text-center' style={{position: "relative" , cursor : "pointer"}}>
            <h4 className='text-white text-center mb-5 mt-5'>{userData ? "Edit User" : "Add New User +" } </h4> 
                <Container>
                    <Col lg='6' className='offset-lg-3'>
                        <Card className='bg-danger'>
                            <div className='card-body'>
                            <form className='bg-danger' onSubmit={onSubmit}>
                                <Row>
                                    <Col lg='12'>
                                        <div className='form-group'>
                                            <input type = 'text' className='form-control' placeholder='Enter Your Name' onChange={e=>setName(e.target.value)} value={name}/>
                                        </div>
                                    </Col>
                                    <Col lg='12'>
                                        <div className='form-group mt-3'>
                                            <input type = 'email' className='form-control' placeholder='Enter Your Email' onChange={e=>setEmail(e.target.value)} value={email}/>
                                        </div>
                                    </Col>
                                    <Col lg='12'>
                                        <div className='form-group mt-3'>
                                            <select className='form-control' onChange={e=>setCountry(e.target.value)} value={country}>
                                                <option value='Select Country'>Select Country</option>
                                                <option value='Egypt'>Egypt</option>
                                                <option value='KSA'>KSA</option>
                                                <option value='USA'>USA</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col lg='12' >
                                        <input type='submit' value={userData ? "Update" : "Add"} className='d-block btn btn-outline-light mt-3 m-auto'/>
                                    </Col>
                                    
                                        <div onClick={
                                            ()=> {
                                            show && setShow(false)
                                            showEdit && setShowEdit(false)
                                            }
                                        }  
                                        style={{position:"absolute" , bottom: "340px" , left : "450px" , border: "1px solid white" , width:"30px" , color:"white" , cursor:"pointer"}}> x </div>
                                    
                                </Row>
                            </form>
                            </div>
                        </Card>
                    </Col>
                </Container>
        </div>
            
        </div>
        )
}

export default Form;
