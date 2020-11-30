import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NewUserPage.css';
import { Redirect } from 'react-router-dom';

export default function NewUserPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function onSubmit(event){
        event.preventDefault();
        console.log(username, email, password, confirmPassword);

    }

    return (
        <div className="sign-up-wrapper">
            <div className="title-sign-up-page">
                <h1>New User</h1>
            </div>

            <Form onSubmit={(event) => {
                onSubmit(event);
            }}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" onChange={(event) => {
                        const { value } = event.target;
                        setUsername(value);
                    }} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" onChange={(event) => {
                        const { value } = event.target;
                        setEmail(value);
                    }} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" onChange={(event) => {
                        const { value } = event.target;
                        setPassword(value);
                    }} />
                </Form.Group>

                <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" onChange={(event) => {
                        const { value } = event.target;
                        setConfirmPassword(value);
                    }} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign-Up
            </Button>
            </Form>

        </div>
    );
}