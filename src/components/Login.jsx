import React from 'react';
import {Form} from 'react-bootstrap';

const Login = () => {
  return (
    <div>
        <form className="login">
            <Form.Group>
                <h3>Login</h3>
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Username"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"/>
            </Form.Group>
        </form>
    </div>
  )
}

export default Login;