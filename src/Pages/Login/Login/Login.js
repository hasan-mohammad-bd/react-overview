import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

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

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    // if(user){
    //     navigate(from, {replace: true})
    // }
    const setPassword = async ()  => {
      const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email')
    }

  return (
    <div className="container w-50 mx-auto mt-5">
      <h2 className="text-primary text-center">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
        </Form.Group>
        {errorElement}
        <Button variant="primary w-50 mx-auto d-black my-2" type="submit">
          Login
        </Button>
      </Form>
      <p>New to Genius Car?<Link to={"/register"} className="text-danger pe-auto text-decoration-none">Please Register</Link></p>
      <p>forget password?<span onClick={setPassword} className="text-primary pe-auto text-decoration-none">send email</span></p>
      <SocialLogin></SocialLogin>


    </div>
  );
};

export default Login;
