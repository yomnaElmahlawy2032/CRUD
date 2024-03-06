import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
const Home = () => {
    return (
        <div className='bg-dark text-white vh-100'>
            <h1 className='text-center pt-4 mb-5'>Welcome To Home Page</h1>
            {/*links*/}
            <div className='m-auto w-50  text-center'>
            <Link to={'/Login'} className='me-2'>
            <Button variant="danger" className='btn-lg' >Login</Button>{' '}
            </Link>
            <Link to={'/SignUp'} className='me-2'>
            <Button variant="danger" className='btn-lg' >Sign Up</Button>{' '}
            </Link>
            <Link to={'/Users'} className='me-2'>
            <Button variant="danger" className='btn-lg' >Users</Button>{' '}
            </Link>
            </div>
        </div>
    )
}

export default Home
