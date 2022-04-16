import React from 'react';
import google from '../../../images/social/google1.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || error1) {
        errorElement =
            <div>
                <p>Error: {error?.message} {error1?.message}</p>
            </div>

    }
    if (user || user1) {
        navigate('/home')
    }

    return (
        <div>

            <div className='d-flex align-items-center '>
                <div style={{ height: '1px' }} className=' w-50 bg-primary'></div>
                <div className='px-2'>or</div>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
            </div>
            <span className='text-danger'>{errorElement}</span>
            <div className='mt-3'>
                <button onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto'>
                    <img src={google} alt="" />
                    <span className='mx-2'>Google Sign In</span></button>
            </div>
            <div className='mt-3'>
                <button
                    className='btn btn-info w-50 d-block mx-auto'>
                    <img src={facebook} alt="" />
                    <span className='mx-2'>Facebook Sign In</span></button>
            </div>
            <div className='mt-3'>
                <button onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 d-block mx-auto'>
                    <img src={github} alt="" />
                    <span className='mx-2'>Github Sign In</span></button>
            </div>
        </div>

    );
};

export default SocialLogin;