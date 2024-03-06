import React , {useState} from 'react'
//import styles from '../styles/signup/SignUp.module.css'
import { Container , Row , Col , Card , Button} from 'react-bootstrap';
import axios from 'axios'; //package to call Apis easily
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const SignUP = () => {
    //use state 
    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');
    const [email , setEmail] = useState('');
    const [phone , setPhone] = useState('');
    const [country , setCountry] = useState('');
    const [gender , setGender] = useState('');
    //const [error , setError] = useState('');
    //navigation
    const navigate = useNavigate();
    //event on button of submition
    const handleSubmit =()=>{
        let userData = {userName , password , email , phone , country , gender};
        //handle Api
        axios.post('http://localhost:8000/admins' , userData)
        .then((res)=>{
            toast.success("user register successfully !")
            navigate(`/Login`)
        })
        .catch((err)=>{
            toast.error(err.message)
        })
    }
    /*const handleValid =(e) =>{
        if(userName.length>10){
            setError(`chars should be less than 10 chars`)
        }else{
            if (userName===''){
                setError(`ou must enter your name to cpmplete the login`)
            }else{
                setError(``)
            }
        }
    }*/
    return (
        <section className=' bg-dark  vh-100 pt-5'>
            <Container>
                <Col lg={6} className='offset-lg-3'>
                    <Card>
                        <div className='card-header'>
                            <h1>user register</h1>
                        </div>
                        <div className='card-body'>
                            <form>
                            <Row>
                                <Col lg='6'>
                                    <div className='form-group'>
                                        <label>
                                            user name <span className='text-danger'>*</span>
                                        </label>
                                        <input type='text' className='form-control' value={userName} onChange={(e)=>{
                                            setUserName(e.target.value)
                                            
                                        }}/>
                                    </div>
                                </Col>
                                <Col lg='6'>
                                    <div className='form-group'>
                                        <label>
                                            password <span className='text-danger'>*</span>
                                        </label>
                                        <input type='password' className='form-control' value={password} onChange={e=> setPassword(e.target.value)}/>
                                    </div>
                                </Col>
                                <Col lg='6' className='mt-3'>
                                    <div className='form-group'>
                                        <label>
                                            Email <span className='text-danger'>*</span>
                                        </label>
                                        <input type='text' className='form-control' value={email} onChange={e=> setEmail(e.target.value)}/>
                                    </div>
                                </Col>
                                <Col lg='6' className='mt-3'>
                                
                                    <div className='form-group'>
                                        <label>
                                            Phone <span className='text-danger'>*</span>
                                        </label>
                                        <input type='phone' className='form-control' value={phone} onChange={e=> setPhone(e.target.value)}/>
                                    </div>
                                </Col>
                                <Col lg='12' className='mt-3'>
                                    <div className='form-group'>
                                        <label className='mb-2'>
                                            Country <span className='text-danger'>*</span>
                                        </label>
                                        <select className='form-control' value={country} onChange={e=> setCountry(e.target.value)}>
                                            <option value="">Select Country</option>
                                            <option value="Egypt">Egypt</option>
                                            <option value="KSA">KSA</option>
                                            <option value="USA">USA</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col lg='12' className='mt-3'>
                                    <div className='form-group'>
                                        <label className='mb-2 me-2'>
                                            Gender :<span className='text-danger'>*</span>
                                        </label>
                                        <input type='radio' name='gender' value='male' className='form-check-input me-3'  onChange={e=> setGender(e.target.value)}/>
                                        <label htmlFor='male'>Male</label>
                                        <input type='radio' name='gender' value='female' className='form-check-input me-3' onChange={e=> setGender(e.target.value)}/>
                                        <label htmlFor='male'>Female</label>
                                    </div>
                                </Col>
                            </Row>
                            </form>
                        </div>
                        <div className='card-footer'>
                            <Button onClick={handleSubmit}>Sign up</Button>
                        </div>
                    </Card>
                </Col>
            </Container>
        </section>
    )

}
export default SignUP;
