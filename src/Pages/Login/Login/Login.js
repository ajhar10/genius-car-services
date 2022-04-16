import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()
    let errorElement;

    if (error) {
        errorElement =
            <p className='text-danger'>Error: {error?.message}</p>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const handleNavigate = event => {
        navigate('/register')
    }

    const handleForgetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
        } else {
            toast('Please Enter Your Mail')
        }
    }
    return (
        <div className='container w-50 max-auto'>
            <h2 className='text-primary text-center mt-5'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='d-block w-50 mx-auto mb-3' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}

            <p>New to Genius Car? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={handleNavigate}>Please Register!</Link></p>
            <p>Forget Password? <button className='btn btn-link text-decoration-none' onClick={handleForgetPassword}>Reset Password!</button></p>
            <ToastContainer />
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;