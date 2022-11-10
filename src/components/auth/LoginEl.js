import * as React from 'react'
import { Modal, Form, FloatingLabel, Button } from "react-bootstrap"

export default function LoginEl(props) {

    return (
        <>

            <Modal show={props.showLog} onHide={() => props.setShowLog(false)}>


                <Modal.Body className="p-4">
                    <h1 className='fs-1 ff-tns fw-bold mb-4' >Login</h1>
                    <Form className="mb-3">
                        <Form.Group className="mb-4" >
                            <FloatingLabel label='Email' controlId="floatingInput">
                                <Form.Control name="email" type="email" placeholder='Email' />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-4" >
                            <FloatingLabel label='Password' controlId="floatingInput">
                                <Form.Control name="password" type="password" placeholder='Password' />
                            </FloatingLabel>
                        </Form.Group>
                        <Button style={{ backgroundColor: '#393939' }} className="rounded-0 border-0 w-100 p-3">Login</Button>
                    </Form>
                    <p className='text-center'>Don't have any account? Click
                        <span className='ms-1 fw-bold' onClick={() => {
                            props.setShowLog(false);
                            props.setShowReg(true);
                        }} style={{ cursor: 'pointer' }}>
                            Here
                        </span></p>
                </Modal.Body>
            </Modal>

        </>


    )
}