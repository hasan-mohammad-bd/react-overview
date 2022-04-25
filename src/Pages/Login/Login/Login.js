import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Login = () => {
  let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      if (error) {
        errorElement = <p className="text-danger">Error: {error?.message}</p>

    }

      // let from = location?.state?.from?.pathname || "/";

    //useRef is the way to get value from input steps: bring the useRef, set the event handler, set the email/password.current.value in submit event handler.
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const location = useLocation()
    const navigate = useNavigate();

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password, loading);
        const {data} = await axios.post('http://localhost:5000/login', {email})
        localStorage.setItem('accessToken', data.accessToken);
    }

    // if(user){
    //     navigate(from, {replace: true})
    // }
    const setPassword = async ()  => {
      const email = emailRef.current.value;
        await sendPasswordResetEmail(email, sending);
        if(email){
          toast("mail has been sent !");
        }
        else toast("Please enter your email address")
    }
    if(loading || sending){
      <Loading></Loading>
    }

  return (
    <div className="container w-50 mx-auto mt-5">
      <h2 className="text-primary text-center">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} name="email" type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} name="email" type="password" placeholder="Password" required/>
        </Form.Group>
        {errorElement}
        <Button variant="primary w-50 mx-auto d-black my-2" type="submit">
          Login
        </Button>
      </Form>
      <p>New to Genius Car?<Link to={"/login"} className="text-danger pe-auto text-decoration-none">Please Register</Link></p>
      <p>forget password?<span onClick={setPassword} className="text-primary pe-auto text-decoration-none">send email</span></p>
      <SocialLogin></SocialLogin>
      <ToastContainer/>


    </div>
  );
};

export default Login;
