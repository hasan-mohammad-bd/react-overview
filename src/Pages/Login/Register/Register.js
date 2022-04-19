import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from "react-router-dom";
import SocialLogin from '../SocialLogin/SocialLogin';



const Register = () => {
    const navigate = useNavigate()
    const [agree , setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      if(user){
        console.log(user);
      }



    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const agree = event.target.terms.value;

        await  createUserWithEmailAndPassword(email, password)
        await updateProfile({displayName: name})
        navigate("/home")


    }

    if(user){
        navigate("/home")
    }


    return (
        <div className='container w-50 mx-auto mt-5'>
        <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {/* conditional class is there */}
          <Form.Check className={agree ? "ps-2 text-primary" : "ps-2 text-danger"} onClick={()=> setAgree(!agree)} type="checkbox" name="terms" label="Accept terms and conditions" />
        </Form.Group>
        {/* disable is the agree is false / it is also conditional */}
        <Button disabled={!agree} variant="primary w-50 d-black mx-auto" type="submit">
          Register 
        </Button>
      </Form>
      <p>Already registered?<Link to={"/login"} className="text-danger pe-auto text-decoration-none">Please Login</Link></p>
      <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;