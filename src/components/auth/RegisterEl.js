import * as React from 'react'

import { Modal, Form, FloatingLabel, Button, Alert } from "react-bootstrap"
import { useMutation } from 'react-query';
import { API } from '../../config/api';


export default function RegisterEl(props) {
    const [message, setMessage] = React.useState(null)

    const [form, setForm] = React.useState({
        fullName: '',
        email: '',
        password: '',
    });

    const { fullName, email, password } = form;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,

        });
    };

    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();

            // Configuration Content-type
            const response = await API.post("/register", form)

            const alert = (
                <Alert variant="success">Registration Succeeded</Alert>
            )

            setMessage(alert);

            props.setShowReg(false)
            props.setShowLog(true)
        } catch (err) {
            console.log(err);
            const alert = (
                <Alert variant="danger">Registration Failed</Alert>
            );

            setMessage(alert);
        }
    });

    return (
        <>
            <Modal show={props.showReg} onHide={() => props.setShowReg(false)}>
                <Modal.Body className="p-4">
                    <h1 className='fs-1 ff-tns fw-bold mb-4' >Register</h1>
                    {message && message}
                    <Form className="mb-3" onSubmit={(e) => handleSubmit.mutate(e)} >
                        <Form.Group className="mb-4" >
                            <FloatingLabel label='Email' controlId="floatingInput">
                                <Form.Control required onChange={handleChange} name="email" value={email} type="email" placeholder='Email' />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-4" >
                            <FloatingLabel label='Password' controlId="floatingInput">
                                <Form.Control required onChange={handleChange} name="password" value={password} type="password" placeholder="Password" />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-4" >
                            <FloatingLabel label='Full Name' controlId="floatingInput">
                                <Form.Control required onChange={handleChange} name="fullName" value={fullName} type="text" placeholder='Full Name' />
                            </FloatingLabel>
                        </Form.Group>
                        <Button type="submit" style={{ backgroundColor: '#393939' }} className="rounded-0 border-0 w-100 p-3">Register</Button>
                    </Form>
                    <p className='text-center'>Already have an account? Click
                        <span className='ms-1 fw-bold' onClick={() => {
                            props.setShowReg(false);
                            props.setShowLog(true);
                        }} variant="" style={{ cursor: 'pointer' }}>
                            Here
                        </span></p>
                </Modal.Body>
            </Modal>

        </>

    )
}