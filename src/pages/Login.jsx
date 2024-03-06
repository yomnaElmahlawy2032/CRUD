import React , {useState} from 'react'
//import styles from '../styles/signup/SignUp.module.css'
import { Container , Row , Col , Card , Button} from 'react-bootstrap';
import axios from 'axios'; //package to call Apis easily
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const submitEvent =()=>{
        navigate('/SignUp')
    }
    //use state 
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    //navigation
    const navigate = useNavigate();
    //event on button of submition
    const handleSubmit =()=>{
        let userData = { email , password };
        //handle Api
        axios.get(`http://localhost:8000/admins/1`)
        .then(res=>{
            toast.success('user logged in success')
            navigate('/Users')
        })
        .catch(err=>{
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
                            <h1>Login</h1>
                        </div>
                        <div className='card-body'>
                            <form>
                            <Row>
                            {/*email*/}
                            <Col lg='6'>
                                    <div className='form-group'>
                                        <label>
                                            Email <span className='text-danger'>*</span>
                                        </label>
                                        <input type='text' className='form-control' value={email} onChange={e=> setEmail(e.target.value)}/>
                                    </div>
                                </Col>
                                {/*password*/}
                                <Col lg='6'>
                                    <div className='form-group'>
                                        <label>
                                            password <span className='text-danger'>*</span>
                                        </label>
                                        <input type='password' className='form-control' value={password} onChange={e=> setPassword(e.target.value)}/>
                                    </div>
                                </Col>
                            </Row>
                            </form>
                        </div>
                        <div className='card-footer'>
                            <Button onClick={handleSubmit}>Login</Button>
                            <Button onClick={submitEvent} className='ms-5'>Sign Up</Button>
                        </div>
                    </Card>
                </Col>
            </Container>
        </section>
    )

}
export default Login;

