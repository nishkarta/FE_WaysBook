import * as React from 'react'

import { Modal, Form, FloatingLabel, Button } from "react-bootstrap"


export default function RegisterEl(props) {


    return (
        <>
            <Modal show={props.showReg} onHide={() => props.setShowReg(false)}>
                <Modal.Body className="p-4">
                    <h1 className='fs-1 ff-tns fw-bold mb-4' >Register</h1>
                    <Form className="mb-3">
                        <Form.Group className="mb-4" >
                            <FloatingLabel label='Email' controlId="floatingInput">
                                <Form.Control name="email" type="email" placeholder='Email' />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-4" >
                            <FloatingLabel label='Password' controlId="floatingInput">
                                <Form.Control name="password" type="password" placeholder="Password" />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-4" >
                            <FloatingLabel label='Full Name' controlId="floatingInput">
                                <Form.Control name="fullName" type="text" placeholder='Full Name' />
                            </FloatingLabel>
                        </Form.Group>
                        <Button style={{ backgroundColor: '#393939' }} className="rounded-0 border-0 w-100 p-3">Register</Button>
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