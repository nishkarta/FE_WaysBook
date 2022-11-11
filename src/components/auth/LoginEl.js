import * as React from 'react'
import { Modal, Form, FloatingLabel, Button, Alert } from "react-bootstrap"
import { useMutation } from 'react-query';
import { API } from '../../config/api';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';


export default function LoginEl(props) {
    const navigate = useNavigate()
    const [state, dispatch] = React.useContext(UserContext)
    const [message, setMessage] = React.useState(null)

    const [form, setForm] = React.useState({
        email: '',
        password: '',
    })

    const { email, password } = form

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault()

            const data = await API.post("/login", form)

            const alert = <Alert variant="success">Login Succeeded</Alert>;
            setMessage(alert);

            let payload = data.data.data;


            dispatch({
                type: "LOGIN_SUCCESS",
                payload,
            });

            navigate("/");
            props.setShowLog(false)

        } catch (err) {
            console.log(err)
            const alert = <Alert variant="danger">Wrong Email/Password</Alert>
            setMessage(alert)
        }
    })

    return (
        <>

            <Modal show={props.showLog} onHide={() => props.setShowLog(false)}>


                <Modal.Body className="p-4">
                    <h1 className='fs-1 ff-tns fw-bold mb-4' >Login</h1>
                    {message && message}
                    <Form onSubmit={(e) => handleSubmit.mutate(e)} className="mb-3">
                        <Form.Group className="mb-4" >
                            <FloatingLabel label='Email' controlId="floatingInput">
                                <Form.Control name="email" type="email" placeholder='Email' value={email} onChange={handleChange} />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-4" >
                            <FloatingLabel label='Password' controlId="floatingInput">
                                <Form.Control name="password" type="password" value={password} onChange={handleChange} placeholder='Password' />
                            </FloatingLabel>
                        </Form.Group>
                        <Button type="submit" style={{ backgroundColor: '#393939' }} className="rounded-0 border-0 w-100 p-3">Login</Button>
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