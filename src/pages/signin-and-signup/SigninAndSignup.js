import React from 'react';
import './signin-and-signup.css';
import Signin from '../../components/signin/Signin';
import Signup from '../../components/signup/Signup';



const SigninAndSignupPage = () => (
    <div className='sign-in-and-sign-up'>
        <Signin />
        <Signup />
    </div>
);
export default SigninAndSignupPage;